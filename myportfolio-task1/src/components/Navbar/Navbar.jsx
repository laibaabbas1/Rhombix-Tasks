import React, { useState } from 'react'
import { FiSun } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import './Navbar.css'

const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    }

    // Smooth scroll function
    const scrollToSection = (id, e) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuActive(false); // Mobile menu close after click
    };

    return (
        <header>
            <nav className='flex between wrapper navbar'>
                <a href="#" className='logo'>
                    <span>L</span> Laiba
                </a>

                {/* Desktop Menu */}
                <ul className='flex gap-2 desktop-menu'>
                    <li><a href="#home" className='link' onClick={(e) => scrollToSection('home', e)}>Home</a></li>
                    <li><a href="#services" className='link' onClick={(e) => scrollToSection('services', e)}>Services</a></li>
                    <li><a href="#about" className='link' onClick={(e) => scrollToSection('about', e)}>About Me</a></li>
                    <li><a href="#projects" className='link' onClick={(e) => scrollToSection('projects', e)}>Projects</a></li>
                    <li><a href="#education" className='link' onClick={(e) => scrollToSection('education', e)}>Education</a></li>
                    <li><a href="#skills" className='link' onClick={(e) => scrollToSection('skills', e)}>Skills</a></li>
                    <li><a href="#contactme" className='link' onClick={(e) => scrollToSection('contactme', e)}>Contact Me</a></li>
                </ul>

                <div className='flex gap-2 nav-action'>
                    <a href="#" className='icon-container border-inverse'>
                        <FiSun />
                    </a>
                    <a href="#contactme" className='btn' onClick={(e) => scrollToSection('contactme', e)}>Let's Talk</a>
                    <a href="#" className='hamburger' onClick={toggleMenu}>
                        {isMenuActive ? <FaXmark /> : <FaBars />}
                    </a>
                </div>

                {/* Mobile Menu */}
                <ul className={`mobile-menu ${isMenuActive ? 'mobile-menu-active' : ''}`}>
                    <li><a href="#home" className='link' onClick={(e) => scrollToSection('home', e)}>Home</a></li>
                    <li><a href="#services" className='link' onClick={(e) => scrollToSection('services', e)}>Services</a></li>
                    <li><a href="#about" className='link' onClick={(e) => scrollToSection('about', e)}>About Me</a></li>
                    <li><a href="#projects" className='link' onClick={(e) => scrollToSection('projects', e)}>Projects</a></li>
                    <li><a href="#education" className='link' onClick={(e) => scrollToSection('education', e)}>Education</a></li>
                    <li><a href="#skills" className='link' onClick={(e) => scrollToSection('skills', e)}>Skills</a></li>
                    <li><a href="#contact" className='link' onClick={(e) => scrollToSection('contact', e)}>Contact Me</a></li>
                    <li><a href="#contactme" className='btn' onClick={(e) => scrollToSection('contactme', e)}>Let's Talk</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
