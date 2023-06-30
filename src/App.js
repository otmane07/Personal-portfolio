import './App.scss';
import Navbar from "./sections/navbar/navbar"
import Home from "./sections/home/home"
import {useRef, useEffect} from "react";

function App() {
    // References to the different sections which will be observed
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const refNav = useRef(null)
    const refContainer = useRef(null)
    // const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = event => {
        if (refNav.current) {
            refNav.current.classList.add("hideNavBar") ;

            setTimeout(() => {
                refNav.current.classList.remove("hideNavBar") ;
            }, 250);
        }

    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // entries => an array with information about the element we observe
                // Within the callback function, entries.forEach((entry) => { ... }) iterates over each entry in the entries array.
                // Check if the observed element is intersecting with the view port
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // if it is the case we extract the id of that element
                        const sectionId = entry.target.id;
                        // Call your function here with the sectionId
                        refContainer?.current.setAttribute("data-current-section",sectionId)
                    }
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.5 } // The second arg is an options object
        );
        // ref.current value might have changed by the time the cleanup function runs
        // So we store all our reference.current in variables
        const currentRef1 = ref1?.current;
        const currentRef2 = ref2?.current;
        const currentRef3 = ref3?.current;
        const currentRef4 = ref4?.current;
        // Those if clauses are for verifying if our element is existing in the DOM
        // then if it is the case we observe this element => executing the logic of the observer
        // And if this element is intersecting with the view port we get his id

        // if (currentRef1) {
        //     observer.observe(currentRef1);
        // }

        //Better alternative ,I am gonna delete if clauses and replace it by optional chaining
        observer.observe(currentRef1);
        observer.observe(currentRef2);
        observer.observe(currentRef3);
        observer.observe(currentRef4);

        // Clean up code
        //This cleanup function is responsible for stopping the observation of the elements when the component unmounts
        // return is executed when component unmount
        return () => {
            observer.unobserve(currentRef1);
            observer.unobserve(currentRef2);
            observer.unobserve(currentRef3);
            observer.unobserve(currentRef4);
        };
    }, []);

    return (
        <div ref={refContainer}>
        <Navbar reference={refNav}/>
        <div className="container"  onScroll={handleScroll}>
            <Home reference={ref1} />
            <section ref={ref2} id="two"  className="section two" >
            </section>
            <section ref={ref3} id="three" className="section three" >
                <h1>FirstPage</h1>
            </section>
            <section ref={ref4} id="four" className="section four" >
                <h1>FirstPage</h1>
            </section>
        </div>
        </div>
    );
}

export default App;
