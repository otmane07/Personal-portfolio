import React from 'react'
import { FaDev } from 'react-icons/fa';
import "./navbar.scss"


const Navbar = ({reference}) => {
    
    return (
    <header className="header" ref={reference}>
        <div className="header__mainNav">
            <a href="/#" className="header__mainNav__logo" >
                <FaDev />
            </a>
            <button className="header__mainNav__burger">
                <span className="burger__icon">
                    <span className="burger__firstIconLine"></span>
                    <span className="burger__secondIconLine"></span>
                </span>
            </button>
            <nav className="header__mainNav__primary">
                <a href="/#" className="header__mainNav__primary__link">Home</a>
                <a href="/#" className="header__mainNav__primary__link">About Me</a>
                <a href="/#" className="header__mainNav__primary__link">Experiences</a>
                <a href="/#" className="header__mainNav__primary__link">Send me a message</a>
                <a href="/#" className="header__mainNav__primary__link">Contact</a>
            </nav>
            <div className="header__mainNav__action">
                <a className="seeResume" href="/#">My Resume</a>
            </div>
        </div>
        <div className="header__mobileNav">
            <nav className="header__mobileNav__wrapper">
                <a href="/#" className="header__mobileNav__wrapper__link">Home</a>
                <a href="/#" className="header__mobileNav__wrapper__link">About Me</a>
                <a href="/#" className="header__mobileNav__wrapper__link">Experiences</a>
                <a href="/#" className="header__mobileNav__wrapper__link">Send me a message</a>
                <a href="/#" className="header__mobileNav__wrapper__link">Contact</a>
            </nav>
        </div>
    </header>
  )
}
export default Navbar ;