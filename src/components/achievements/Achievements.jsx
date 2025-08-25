import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaMedal, FaStar } from 'react-icons/fa';
import './achievements.css';

const Achievements = () => {
    const achievements = [
        {
            icon: <FaTrophy />,
            title: 'First Prize - Intra College Hackathon',
            description: 'Won first place with my team in college hackathon for developing an innovative solution',
            year: '2024',
            category: 'Competition'
        },
        {
            icon: <FaStar />,
            title: 'Highest Marks in School',
            description: 'Achieved the highest marks in my school, demonstrating academic excellence and dedication',
            year: '2021',
            category: 'Academic Excellence'
        },
        {
            icon: <FaMedal />,
            title: 'Open Source Contributor',
            description: 'Active contributor to various open source projects on GitHub with growing community impact',
            year: '2023-Present',
            category: 'Development'
        },
        {
            icon: <FaCertificate />,
            title: 'Technical Skills Mastery',
            description: 'Proficient in React, django, laravel, JavaScript, and modern web development technologies',
            year: '2022-Present',
            category: 'Technical'
        }
    ];

    return (
        <motion.section
            id="achievements"
            className='achievements-section py-5'
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
                    <h2 className='section-title'>Achievements & Recognition</h2>
                    <p className='section-subtitle'>Milestones that define my journey</p>
                </motion.div>

                <div className='row g-4'>
                    {achievements.map((achievement, index) => (
                        <div key={index} className='col-lg-6 col-md-6'>
                            <motion.div
                                className='achievement-card h-100'
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <div className='achievement-icon'>
                                    {achievement.icon}
                                </div>
                                <div className='achievement-content'>
                                    <div className='achievement-header'>
                                        <h4 className='achievement-title'>{achievement.title}</h4>
                                        <span className='achievement-year'>{achievement.year}</span>
                                    </div>
                                    <span className='achievement-category'>{achievement.category}</span>
                                    <p className='achievement-description'>{achievement.description}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    className='stats-section mt-5'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className='row text-center'>
                        <div className='col-md-3 col-6'>
                            <motion.div
                                className='stat-item'
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className='stat-number'>15+</h3>
                                <p className='stat-label'>Projects Completed</p>
                            </motion.div>
                        </div>
                        <div className='col-md-3 col-6'>
                            <motion.div
                                className='stat-item'
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className='stat-number'>5+</h3>
                                <p className='stat-label'>Technologies Mastered</p>
                            </motion.div>
                        </div>
                        <div className='col-md-3 col-6'>
                            <motion.div
                                className='stat-item'
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className='stat-number'>1st</h3>
                                <p className='stat-label'>Prize in Hackathon</p>
                            </motion.div>
                        </div>
                        <div className='col-md-3 col-6'>
                            <motion.div
                                className='stat-item'
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className='stat-number'>Top</h3>
                                <p className='stat-label'>School Performer</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Achievements;