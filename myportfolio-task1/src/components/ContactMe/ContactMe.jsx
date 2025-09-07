import React from 'react'
import './ContactMe.css'
import '../../assets/bgimg.jpg'
import { FaInstagram, FaGithub, FaThreads } from "react-icons/fa6";
import { FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";


const ContactMe = () => {
    return (
        <section id='contactme'>
            <div className="wrapper p-block-9">
                <div className='text-center'>
                    <span className='sub-text overlay-text middle' datatype='Contact Me'>Contact Me</span>
                    <h2>
                        Let's Connect To<span className="yellow-text"> Shape <br /> the Future  </span>Together
                    </h2>
                </div>
                <div className='flex gap-2 stretch'>
                    <form className='mt-5'>
                        <div className='input-container'>
                            <label htmlFor=" name"> Name :</label>
                            <input type="text" name='name' id='name' required autoComplete='off' placeholder='Write your name here  ' className='input' />
                        </div>
                        <div className='input-container'>
                            <label htmlFor=" email">Email :</label>
                            <input type="text" name='email' id='email' required autoComplete='off' placeholder='Write your name here ' className='input' />
                        </div>
                        <div className='input-container'>
                            <label htmlFor="message">Your Message :</label><br />
                            <textarea name="message" id="message" required placeholder='Write your message here.....   ' rows={9}></textarea>
                        </div>
                        <div className="mt-1">
                            <a className='btn' href="">Send Message</a>
                        </div>
                    </form>

                    <div className='info mt-5 '>
                        <div className='detail'>
                            <div>
                                <h6 className='yellow-text'>Address</h6>
                                <p>Main Multan Road PhoolNagar <br />Lahore,Pakistan</p>
                            </div>
                            <div>
                                <h6 className='yellow-text'>Contact</h6>
                                <p>Phone:0331-4173615<br />Email:laibaabbas431@gmail.com</p>
                            </div>
                            <div>
                                <h6 className='yellow-text'>Linkedin</h6>
                                <p >  <a href="https://www.linkedin.com/in/laiba-abbas-2620b6334" className='link'>Connect Me on Linkedin</a></p>
                            </div>
                            <div></div>
                            <div></div>
                        </div>

                        <div className='bg-header rounded-b'>
                            <h5>Stay Connected</h5>
                            <div className='flex gap-1'>
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
                                <a href="https://www.tiktok.com/@techdeploy4?_t=ZS-8zXAUpVT4K2&_r=1" className="icon-container black-inverse">
                                    <FaTiktok />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe