import React from 'react'
import './Skills.css'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss, SiBootstrap, SiNetlify, SiVercel, SiExpress, SiRedux, SiJsonwebtokens } from "react-icons/si";
import { SiMaterialformkdocs } from "react-icons/si";
const Skills = () => {
    const skillsData = [
        { id: 1, name: "HTML5", icon: <FaHtml5 /> },
        { id: 2, name: "CSS3", icon: <FaCss3Alt /> },
        { id: 3, name: "JavaScript", icon: <SiJavascript /> },
        { id: 4, name: "React.js", icon: <FaReact /> },
        { id: 5, name: "Node.js", icon: <FaNodeJs /> },
        { id: 6, name: "MongoDB", icon: <SiMongodb /> },
        { id: 7, name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { id: 8, name: "Bootstrap", icon: <SiBootstrap /> },
        { id: 9, name: "Netlify", icon: <SiNetlify /> },
        { id: 10, name: "Vercel", icon: <SiVercel /> },
        { id: 11, name: "GitHub", icon: <FaGithub /> },
        { id: 12, name: "Express.js", icon: <SiExpress /> },
        { id: 13, name: "Material UI", icon: <SiMaterialformkdocs /> },
        { id: 14, name: "Redux", icon: <SiRedux /> },
        { id: 15, name: "JSON Web Token (JWT)", icon: <SiJsonwebtokens /> },
        { id: 16, name: "Database Management", icon: <FaDatabase /> }
    ];

    return (
        <section id="skills">
            <div className="wrapper p-block-9 border-btm">
                <div className="flex between gap-2">
                    <div>
                        <span className="sub-text overlay-text" datatype='Skills'>My Skills</span>
                        <h2><span className='yellow-text'>Skills</span> & Technologies</h2>
                    </div>
                </div>

                <div className="flex wrap gap-2 mt-5">
                    {skillsData.map(skill => (
                        <div className="skill-card" key={skill.id}>
                            <div className="skill-icon">{skill.icon}</div>
                            <h4>{skill.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
