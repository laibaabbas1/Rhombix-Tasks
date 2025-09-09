import React, { useState, useEffect } from 'react'
import './Footer.css'
import { FaArrowUpLong } from "react-icons/fa6";
import { FaInstagram, FaGithub, FaThreads } from "react-icons/fa6";
import { FaLinkedinIn, FaTiktok } from "react-icons/fa";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // scroll listener
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {   // 200px scroll ke baad show
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <footer>
            <div className="wrapper">
                <div className='flex between border-btm p-block-2 gap-2'>
                    <h2>Let's <span className='yellow-text'>Connect</span> There</h2>

                    {/* yaha change kiya hai */}
                    <a href="#contactme" className='btn self-end'>Hire Me Now</a>
                </div>
                <div className='p-block-7 gap-2'>
                    <div className="footer-wrapper gap-2 ">
                        <a href="" className='logo'>
                            <div className='margin-tb'><span>L</span> Laiba</div>
                        </a>
                        <p>I turn ideas into interactive web magic where design meets clean code."Your Vision, My Code - Let’s Build Something Amazing"</p>
                        <div className='flex gap-1 margin-tb'>
                            <a href="https://www.threads.com/@laibadevops" className="icon-container black-inverse">
                                <FaThreads />
                            </a>
                            <a href="https://www.instagram.com/laibadevops?igsh=MTNmdTZ4dDhiM2dmZQ==" className="icon-container black-inverse">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/laiba-abbas-2620b6334" className="icon-container black-inverse">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://github.com/laibaabbas1" className="icon-container black-inverse">
                                <FaGithub />
                            </a>
                            <a href="https://www.tiktok.com/@laibadevops " className="icon-container black-inverse">
                                <FaTiktok />
                            </a>
                        </div>
                    </div>

                    {/* Scroll-to-top button - sirf scroll hone ke baad visible */}
                    {isVisible && (
                        <button
                            className='scroll-to-top'
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <FaArrowUpLong />
                        </button>
                    )}
                </div>
            </div>

            <div className="copyright">
                <div className="wrapper flex between">
                    <p>Copyright &copy; Laiba All Rights Reserved</p>
                    <p>User Terms & Conditions | Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
