import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const triggerRef = React.useRef<HTMLDivElement>(null);
    const cardsRef = React.useRef<HTMLDivElement>(null);

    const projects = [
        {
            title: 'Personal Portfolio',
            description: 'A high-performance, responsive portfolio website built with modern web technologies. Features a futuristic cyberpunk aesthetic, fluid Framer Motion animations, and a fully mobile-optimized interface.',
            techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
            githubUrl: 'https://github.com/Rohankhaire/my-portfolio'
        },
        {
            title: 'StudentHub',
            description: 'Architected a RESTful backend API using Spring Boot and Hibernate ORM to manage complex course and user data. Integrated Spring Security with BCrypt hashing and JWT to protect administrative actions from unauthorized access. Built a high-interactivity frontend with Framer Motion and React Context API for seamless state management and role-based UI rendering.',
            techStack: ['Java', 'JavaScript', 'Spring Boot', 'Hibernate', 'React', 'PostgreSQL'],
            githubUrl: 'https://github.com/Rohankhaire/StudentHub'
        },
        {
            title: 'Employee Management System',
            description: 'Full-stack enterprise application with RESTful backend API using Spring Boot and Hibernate ORM. Implemented Spring Security with BCrypt hashing and JWT authentication for secure access control. Developed interactive React frontend with seamless state management and role-based UI rendering for efficient employee data management.',
            techStack: ['Java', 'JavaScript', 'Spring Boot', 'Hibernate', 'React', 'PostgreSQL'],
            githubUrl: 'https://github.com'
        },
        {
            title: 'BankSimulator',
            description: 'Developed a Bank Simulator System (Desktop-based Application) using Core Java (Swing/AWT) and PostgreSQL for backend data management. Implemented key banking operations such as account creation, deposit, withdrawal, mini statement, and PIN change. Designed an intuitive GUI interface to simulate real ATM user interactions and transaction flows. Ensured data validation, error handling, and secure database connectivity for reliable performance.',
            techStack: ['Core Java', 'Swing', 'AWT', 'PostgreSQL', 'JDBC'],
            githubUrl: 'https://github.com/Rohankhaire/BankSimulator'
        },
        {
            title: 'Share My Ride',
            description: 'Collaborative team project focused on secure carpooling. Engineered the authentication and user management modules using Firebase. Implemented role-based access control and integrated real-time data handling.',
            techStack: ['Core Java', 'JavaFX', 'Firebase', 'API Binding'],
            githubUrl: 'https://github.com'
        }
    ];

    React.useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // Desktop: Horizontal Scroll + Holographic Reveal
            mm.add("(min-width: 768px)", () => {
                const totalWidth = cardsRef.current!.scrollWidth;
                const windowWidth = window.innerWidth;
                const scrollLength = totalWidth - windowWidth;

                // 1. Holographic "Boot Up" Reveal
                gsap.fromTo(".project-card-item",
                    {
                        opacity: 0,
                        rotateX: -45,
                        y: 100,
                        scale: 0.8,
                        z: -100 // push back in 3D space
                    },
                    {
                        opacity: 1,
                        rotateX: 0,
                        y: 0,
                        scale: 1,
                        z: 0,
                        duration: 1,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: triggerRef.current,
                            start: "top 70%", // Start animation when section is in view
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // 2. Horizontal Scroll
                gsap.to(cardsRef.current, {
                    x: -scrollLength,
                    ease: "none",
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        pin: true,
                        scrub: 1.5,
                        snap: {
                            snapTo: 1 / (projects.length - 1),
                            duration: { min: 0.2, max: 0.8 },
                            delay: 0.1,
                            ease: "power2.inOut"
                        },
                        end: () => "+=" + Math.max(3000, totalWidth),
                        invalidateOnRefresh: true,
                        anticipatePin: 1
                    }
                });
            });

            // Mobile: Vertical Fade In
            mm.add("(max-width: 767px)", () => {
                gsap.utils.toArray<HTMLElement>('.project-card-item').forEach((card, i) => {
                    gsap.fromTo(card,
                        { opacity: 0, y: 50 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            scrollTrigger: {
                                trigger: card,
                                start: "top 85%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                });
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={wrapperRef} className="animate-fade-in w-full overflow-x-hidden">
            <SectionHeader title="Projects" subtitle="Engineering experience and technical implementations." className="px-4 md:px-12 pt-8" />

            {/* 
              Desktop: horizontal scrolling container pinned by ScrollTrigger 
              Mobile: standard vertical flex container
            */}
            <div
                ref={triggerRef}
                className="w-full h-auto md:h-screen flex items-start md:items-center overflow-hidden py-8 md:py-0 perspective-[1000px]"
            >
                <div
                    ref={cardsRef}
                    className="flex flex-col md:flex-row gap-8 px-4 md:px-12 w-full md:w-auto transform-style-3d"
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card-item w-full md:w-[600px] flex-shrink-0"
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                    {/* Spacer for right padding on desktop horizontal scroll */}
                    <div className="hidden md:block w-12 flex-shrink-0" />
                </div>
            </div>

            <div className="md:hidden h-24" /> {/* Bottom spacer for mobile */}
        </div>
    );
};

export default Projects;
