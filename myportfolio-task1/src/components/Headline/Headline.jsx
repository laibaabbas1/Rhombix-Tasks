import React from 'react'
import { FaStar } from "react-icons/fa6";
import '../Headline/Headline.css'

const Headline = () => {
    return (
        <section className='headline'>
            <div className='moving-text'>
                <div className="container">
                    <h5>Web Development</h5>
                    <FaStar className='star' />
                    <h5>App Development</h5>
                    <FaStar className='star' />
                    <h5>Responsive Design</h5>
                    <FaStar className='star' />
                    <h5>UI/UX Design</h5>
                    <FaStar className='star' />
                </div>
                <div className="container">
                    <h5>Web Development</h5>
                    <FaStar className='star' />
                    <h5>App Development</h5>
                    <FaStar className='star' />
                    <h5>Responsive Design</h5>
                    <FaStar className='star' />
                    <h5>UI/UX Design</h5>
                    <FaStar className='star' />
                </div>
                <div className="container">
                    <h5>Web Development</h5>
                    <FaStar className='star' />
                    <h5>App Development</h5>
                    <FaStar className='star' />
                    <h5>Responsive Design</h5>
                    <FaStar className='star' />
                    <h5>UI/UX Design</h5>
                    <FaStar className='star' />
                </div>
            </div>
        </section>
    )
}

export default Headline