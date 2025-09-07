import React from 'react'
import HeroImage from '../../assets/hero.png'
import './Hero.css'
import CV from '../../assets/LAIBA CV.pdf'

const Hero = () => {
    return (
        <section id='home'>
            <div className='hero-section flex wrapper gap-4'>
                <div className="hero-content">
                    <span className='sub-text'>Hello There!</span>
                    <h1>
                        <span className="yellow-text">I'm Laiba Abbas</span>
                        <br /> Passionate Web Developer
                    </h1>
                    <p className='para'>I turn ideas into interactive web magic
                        where design meets clean code. "Your Vision, My Code - Let’s Build Something Amazing"</p>
                    <div>
                        {/* Scroll to Projects Section */}
                        <a href="#projects" className='btn'>View My Works</a>
                        <a href={CV} download="LAIBA'S CV" className='btn border-btn margin-left'>Download CV</a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={HeroImage} alt="Hero" />
                </div>
            </div>
        </section>
    )
}

export default Hero
