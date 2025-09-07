import React from 'react'
import Project1 from '../../assets/Project1.jpg'
import Project2 from '../../assets/Project2.png'
import Project3 from '../../assets/Project3.jpg'
import Project4 from '../../assets/Project4.jpg'
import Project5 from '../../assets/Project5.png'
import Project6 from '../../assets/Project6.jpg'
import './Projects.css'
import { FaArrowRight } from "react-icons/fa";

const projectsData = [
    {
        id: 1,
        title: 'Doctor Appointment Web Application',
        description: 'Built a mern stack web app using React.js, Node.js, Express.js, and MongoDB. Admins can handle actions like cancel appointments, members can update progress.Integrated JWT auth for data visualization.',
        image: Project1,
        tech: [
            { id: 1, list: 'React js' },
            { id: 2, list: 'Tailwind Css' },
            { id: 3, list: 'MongoDB' },
            { id: 4, list: 'Express' },
            { id: 5, list: 'Nodejs' },
        ]
    },
    {
        id: 2,
        title: 'Flight Booking System',
        description: 'Designed a domestic flight booking system using Mern Stack. Admin Panel with different actions are included in it to perform tickets and other functions.',
        image: Project2,
        tech: [
            { id: 1, list: 'React js' },
            { id: 2, list: 'Bootstrap' },
            { id: 3, list: 'MongoDB' },
            { id: 4, list: 'Express' },
            { id: 5, list: 'Node js' },
        ]
    },
    {
        id: 3,
        title: 'Mini React js Projects',
        description: 'Developed websites using CRUD and TODO List with React.js. Utilized CSS Flexbox & Grid for proper alignment and responsiveness.',
        image: Project3,
        tech: [
            { id: 1, list: 'React js' },
            { id: 2, list: 'Bootstrap' },
            { id: 3, list: 'Html' },
        ]
    },
    {
        id: 4,
        title: 'Netflix Landing Page Clone',
        description: 'Developed a fully responsive replica of Netflix using HTML, CSS & JS. Designed key components like navbar, Movies section, and content grids.',
        image: Project4,
        tech: [
            { id: 1, list: 'Html' },
            { id: 2, list: 'Css' },
            { id: 3, list: 'Js' },
        ]
    },
    {
        id: 5,
        title: 'Spotify Page Clone',
        description: 'Created a functional clone of Spotify using HTML & CSS with animations, hover effects, and media queries.',
        image: Project5,
        tech: [
            { id: 1, list: 'Html' },
            { id: 2, list: 'Css' },
            { id: 3, list: 'Js' },
        ]
    },
    {
        id: 6,
        title: 'Mini-JavaScript Projects',
        description: 'Created mini JS projects like analogue & digital clock, login/signup page.',
        image: Project6,
        tech: [
            { id: 1, list: 'Html' },
            { id: 2, list: 'Css' },
            { id: 3, list: 'Js' },
        ]
    },
];

const Projects = () => {
    const [showAll, setShowAll] = React.useState(false);

    const visibleProjects = showAll ? projectsData : projectsData.slice(0, 1);

    const renderProjectsData = visibleProjects.map(project => (
        <div className="card flex gap-5 project-direction show" key={project.id}>
            <div className="project-image">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
                <ul className='flex gap-1'>
                    {project.tech.map(technology => (
                        <li className='list' key={technology.id}>{technology.list}</li>
                    ))}
                </ul>
                <h3 className='mt-2'>{project.title}</h3>
                <p className='para'>{project.description}</p>
                <a href="https://github.com/laibaabbas1" className='icon-container border-inverse rotate'>
                    <FaArrowRight />
                </a>
            </div>
        </div>
    ));

    return (
        <section id='projects'>
            <div className='wrapper p-block-9'>
                <div className="flex between gap-2">
                    <div>
                        <span className="sub-text overlay-text" datatype='My Projects'>My Projects</span>
                        <h2>
                            Let's have A Look <br />At <span className='yellow-text'>My Projects</span>
                        </h2>
                    </div>

                    <a
                        href="#"
                        className='btn self-end'
                        onClick={(e) => {
                            e.preventDefault();
                            setShowAll(!showAll);
                        }}
                    >
                        {showAll ? 'Show Less' : 'View All Projects'}
                    </a>
                </div>
                <div className='flex column gap-2 mt-5'>
                    {renderProjectsData}
                </div>
            </div>
        </section>
    );
}

export default Projects;
