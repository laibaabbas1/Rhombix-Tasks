import React from 'react'
import './Education.css'
import { RiGraduationCapFill } from "react-icons/ri";
import { PiBuildingOfficeFill } from "react-icons/pi";

function Education() {
    const Card = (props) => {
        return (
            <div className="card design">
                <div className='flex gap-1 border-btm p-btm-1'>
                    <div className='icon-container yellow-inverse '>
                        {props.icon}
                    </div>
                    <h3>{props.title}</h3>
                </div>

                <div className='mt-2'>
                    {props.item.map(education => {
                        return (
                            <div className='flex between mt-2'>
                                <div >
                                    <span className='sub-text' >{education.institute} </span>
                                    <p>{education.field}</p>
                                </div>
                                <div className='list'>{education.date}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        <section id='education'>
            <div className='wrapper p-block-9 border-btm'>
                <div className='text-center'>
                    <span className='sub-text overlay-text middle' datatype='Education & Work'>Education & Work</span>
                    <h2>
                        My <span className="yellow-text">Academic & <br /> Professional </span>Journey
                    </h2>
                </div>
                <div className=' flex gap-5 mt-5'>
                    <Card item={education} title='Education' icon={<RiGraduationCapFill />} />
                    <Card item={workExperience} title='Work Experience' icon={<PiBuildingOfficeFill />} />
                </div>
            </div>
        </section>
    )
}

export default Education



const education = [


    {
        id: 1,
        institute: 'NexSkill',
        field: 'Mern Stack Development Course',
        date: '2024-2025'
    },
    {
        id: 2,
        institute: 'University Of The Punjab',
        field: 'BSCS',
        date: '2021-2025'
    },
    {
        id: 3,
        institute: 'Aspire Group Of Colleges',
        field: 'Intermediate in Computer Science',
        date: '2019-2021'
    },
]

const workExperience = [
    {
        id: 1,
        institute: "Rhombix Technologies",
        field: "Internship",
        date: "September 2025"
    },
    {
        id: 2,
        institute: "Self-Employed",
        field: "Full Stack Web Development",
        date: "2024 – 2025"

    },
    {
        id: 3,
        institute: "NexSkill",
        field: "Mern Stack Development",
        date: "2024– 2025"

    },
]