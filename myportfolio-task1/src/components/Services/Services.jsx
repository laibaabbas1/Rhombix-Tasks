import React from 'react'
import './Services.css'
import { FaCode, FaArrowRight } from "react-icons/fa";
import { FaLaptopCode, FaDatabase, FaPenRuler } from "react-icons/fa6";
import { TbCodeCircle, TbDeviceMobileCode } from "react-icons/tb";
import { BsCreditCard2Front } from "react-icons/bs";

const servicesData = [
    {
        id: 1,
        title: 'Website Development ',
        description: 'I create modern and user-friendly websites that reflect your brand identity. My focus is on speed, functionality, and a smooth user experience. Every project is tailored to meet your specific business needs. From design to deployment, I ensure your online presence stands out.',
        icon: <FaLaptopCode />,
    },
    {
        id: 2,
        title: 'Web App Development ',
        description: 'I develop scalable and intuitive web applications for businesses and startups. My web apps are designed for high performance, strong security, and easy scalability. I use the latest technologies to deliver seamless user experiences. Whether it’s a simple app or a complex platform, I’ve got you covered.',
        icon: <TbCodeCircle />,
    },
    {
        id: 3,
        title: 'Responsive Design',
        description: 'I design fully responsive websites that look and work perfectly on all devices. From mobile to desktop, your website will adapt to every screen size effortlessly. This ensures better user engagement and improved SEO. A responsive design makes your site future-ready.',
        icon: <FaPenRuler />,
    },
    {
        id: 4,
        title: 'Full Stack Development ',
        description: 'I provide end-to-end web solutions covering both frontend and backend development. My services include building scalable applications, database integration, and smooth deployment. I ensure that every part of your web app works together seamlessly. From concept to launch, I handle the complete process.',
        icon: <TbDeviceMobileCode />,
    },
    {
        id: 5,
        title: 'Frontend Development ',
        description: 'I design interactive, attractive, and responsive web interfaces. My frontend development ensures smooth navigation and a visually appealing layout. I focus on user experience to keep your visitors engaged. Using modern frameworks, I bring your design ideas to life.',
        icon: <BsCreditCard2Front />,
    },
    {
        id: 6,
        title: 'Backend Development',
        description: 'I develop secure, reliable, and efficient backend systems for your web applications. My work includes database management, API development, and server-side logic. I ensure that your website runs smoothly and handles user requests effectively. A strong backend powers a successful website.',
        icon: <FaDatabase />,
    },
    {
        id: 7,
        title: 'API Integration ',
        description: 'I integrate APIs to enhance your website or web app with new features. Whether it’s payment gateways, third-party services, or custom APIs, I ensure seamless integration. This allows your site to communicate effectively with other platforms. Smooth API integration improves both functionality and user experience.',
        icon: <FaCode />,
    },
];

const Services = () => {
    const [showAll, setShowAll] = React.useState(false);
    const visibleServices = showAll ? servicesData : servicesData.slice(0, 3);

    return (
        <section id="services">
            <div className="wrapper p-block-9 border-btm">
                <div className="flex between gap-2">
                    <div>
                        <span className="sub-text overlay-text" datatype='Services'>My Specialization</span>
                        <h2> <span className='yellow-text'>Services</span> I Provide</h2>
                    </div>

                    <a
                        href="#"
                        className='btn self-end'
                        onClick={(e) => {
                            e.preventDefault();
                            setShowAll(!showAll);
                            if (showAll) {
                                document.getElementById("services").scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        {showAll ? 'Show Less' : 'View All Services'}
                    </a>
                </div>

                <div className='flex stretch gap-2 mt-5 services-container'>
                    {visibleServices.map((service, index) => (
                        <div
                            className={`card design fade-in`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            key={service.id}
                        >
                            <span className="service-icon">{service.icon}</span>
                            <h4 className='m-block-1'>{service.title}</h4>
                            <p className='m-block-1 hide-text'>{service.description}</p>
                            <a href="#" className='link'>
                                Learn More &nbsp;<FaArrowRight className='arrow yellow-text' />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
