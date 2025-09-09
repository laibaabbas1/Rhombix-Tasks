import React from 'react'
import AboutImage from '../../assets/aboutpic.png'
import './AboutMe.css'
import CV from '../../assets/LAIBA CV.pdf'
const AboutMe = () => {
    return (
        <section id='about'>
            <div className=" gap-5 flex wrapper p-block-9 border-btm">
                <div className="about-image">
                    <img src={AboutImage} />
                </div>
                <div className="about-content">
                    <span className="sub-text overlay-text" datatype='About Me'>About Me</span>
                    <h2>Who is <span className='yellow-text'>Laiba Abbas?</span></h2>
                    <p className='m-top-2'>I am a self-motivated Web Developer with knowledge in React.js, Node.js, Express.js, MongoDB, JavaScript, HTML, CSS, Bootstrap, Tailwind and mobile responsive web development.A web developer passionate about clean code,modern design,user experience and building responsive accessible and high performing digital products. </p>
                    <br></br>
                    <p className='m-block-3'>
                        I'm always excited to learn new tools and contribute to meaningful projects. Outside of coding, I enjoy mentoring junior developers, exploring emerging technologies, and refining my design-to-code skills.
                    </p>
                    <a href={CV} download="LAIBA'S CV" className='btn margin-left '>Download CV </a>

                </div>
            </div>
        </section>
    )
}

export default AboutMe