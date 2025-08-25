import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode, FaMobile } from 'react-icons/fa';
import './experience.css';

const Experience = () => {
    const experiences = [
        {
            type: 'work',
            title: 'Full Stack Developer',
            company: 'Tech Solutions Inc.',
            period: '2023 - Present',
            description: 'Developing modern web applications using Laravel, Django, and React. Building dynamic interfaces with Livewire and styling with Tailwind CSS.',
            icon: <FaBriefcase />,
            skills: ['Laravel', 'Django', 'React', 'Livewire', 'Tailwind']
        },
        {
            type: 'mobile',
            title: 'Mobile Developer',
            company: 'Mobile App Development',
            period: '2023 - Present',
            description: 'Creating cross-platform mobile applications using Flutter with state management solutions like GetX and Provider for efficient app development.',
            icon: <FaMobile />,
            skills: ['Flutter', 'GetX', 'Provider', 'Dart']
        },
        {
            type: 'education',
            title: 'Bachelor of Computer Applications',
            company: 'BCA - Computer Applications',
            period: '2023 - Present',
            description: 'Pursuing BCA with focus on computer applications, programming languages, and modern software development practices.',
            icon: <FaGraduationCap />,
            skills: ['Programming', 'Web Development', 'Database Management']
        },
        {
            type: 'project',
            title: 'Open Source Contributor',
            company: 'GitHub Projects',
            period: '2022 - Present',
            description: 'Contributing to various open-source projects and maintaining personal repositories with innovative solutions.',
            icon: <FaCode />,
            skills: ['Git', 'Open Source', 'Collaboration']
        }
    ];

    return (
        <motion.section
            id="experience"
            className='experience-section py-5'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className='container'>
                <motion.div
                    className='text-center mb-5'
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className='section-title'>Professional Journey</h2>
                    <p className='section-subtitle'>My path in technology and development</p>
                </motion.div>

                <div className='timeline-container'>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className='timeline-content'>
                                <div className='timeline-icon'>
                                    {exp.icon}
                                </div>
                                <div className='timeline-details'>
                                    <h4 className='timeline-title'>{exp.title}</h4>
                                    <h5 className='timeline-company'>{exp.company}</h5>
                                    <span className='timeline-period'>{exp.period}</span>
                                    <p className='timeline-description'>{exp.description}</p>
                                    <div className='timeline-skills'>
                                        {exp.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className='skill-tag'>{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Experience;