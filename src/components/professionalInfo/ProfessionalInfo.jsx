import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaCalendarAlt, FaDownload } from 'react-icons/fa';
import './professionalInfo.css';

const ProfessionalInfo = () => {
    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'pallabmondal1000000@gmail.com',
            link: 'mailto:pallab.mondal@example.com'
        },
        {
            icon: <FaPhone />,
            label: 'Phone',
            value: '+91 7439894935',
            link: null
        },
        {
            icon: <FaMapMarkerAlt />,
            label: 'Location',
            value: 'West Bengal, India',
            link: null
        },
        {
            icon: <FaCalendarAlt />,
            label: 'Available',
            value: 'Open to Opportunities',
            link: null
        }
    ];

    const socialLinks = [
        {
            icon: <FaLinkedinIn />,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/pallab-mondal-635906281/',
            color: '#0077B5'
        },
        {
            icon: <FaGithub />,
            name: 'GitHub',
            url: 'https://github.com/pallabmondal27112004',
            color: '#333'
        }
    ];

    return (
        <motion.section
            className='professional-info-section py-5'
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
                    <h2 className='section-title'>Let's Connect</h2>
                    <p className='section-subtitle'>Ready to bring your ideas to life</p>
                </motion.div>

                <div className='row g-4'>
                    <div className='col-lg-8'>
                        <div className='contact-info-grid'>
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className='contact-info-item'
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className='contact-icon'>
                                        {info.icon}
                                    </div>
                                    <div className='contact-details'>
                                        <h4 className='contact-label'>{info.label}</h4>
                                        {info.link ? (
                                            <a href={info.link} className='contact-value'>{info.value}</a>
                                        ) : (
                                            <p className='contact-value'>{info.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <motion.div
                            className='professional-card'
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className='card-header'>
                                <h3>Pallab Kumar Mondal</h3>
                                <p>Full Stack Developer</p>
                            </div>

                            <div className='card-body'>
                                <p className='availability-status'>
                                    <span className='status-dot'></span>
                                    Available for new opportunities
                                </p>

                                <div className='social-links'>
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='social-link'
                                            style={{ '--social-color': social.color }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {social.icon}
                                            <span>{social.name}</span>
                                        </motion.a>
                                    ))}
                                </div>

                                <motion.a
                                    href="/resume.pdf"
                                    download="Pallab_Kumar_Mondal_Resume.pdf"
                                    className='download-cv-btn'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaDownload />
                                    Download CV
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ProfessionalInfo;