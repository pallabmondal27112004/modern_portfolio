import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './testimonials.css';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: 'Dabanjan Sharma',
            position: 'Student of the makaut univercity',
            company: 'College student',
            image: './images/testimonial1.jpg',
            rating: 5,
            text: 'Pallab consistently demonstrated exceptional academic performance, achieving the highest marks in school. His dedication to learning and problem-solving abilities are truly remarkable.'
        },
        {
            name: 'Team Lead',
            position: 'Hackathon Judge',
            company: 'Intra College Competition',
            image: './images/testimonial2.jpg',
            rating: 5,
            text: 'Pallab and his team delivered an outstanding solution in our hackathon. Their innovative approach and technical execution earned them the first prize. Impressive work!'
        },
        {
            name: 'Leanrer',
            position: 'Full stack Developer',
            company: 'Open Source Community',
            image: './images/testimonial3.jpg',
            rating: 5,
            text: 'Pallab is a dedicated developer who actively contributes to open source projects. His code quality and collaborative spirit make him a valuable team member.'
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <motion.section
            id="testimonials"
            className='testimonials-section py-5'
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
                    <h2 className='section-title'>What People Say</h2>
                    <p className='section-subtitle'>Testimonials from colleagues and mentors</p>
                </motion.div>

                <div className='testimonial-container'>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className='testimonial-card'
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className='quote-icon'>
                                <FaQuoteLeft />
                            </div>

                            <div className='testimonial-content'>
                                <div className='stars'>
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <FaStar key={i} className='star' />
                                    ))}
                                </div>

                                <p className='testimonial-text'>
                                    "{testimonials[currentIndex].text}"
                                </p>

                                <div className='testimonial-author'>
                                    <div className='author-image'>
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            onError={(e) => {
                                                e.target.src = `https://ui-avatars.com/api/?name=${testimonials[currentIndex].name}&background=67BE78&color=fff&size=80`;
                                            }}
                                        />
                                    </div>
                                    <div className='author-info'>
                                        <h4 className='author-name'>{testimonials[currentIndex].name}</h4>
                                        <p className='author-position'>{testimonials[currentIndex].position}</p>
                                        <p className='author-company'>{testimonials[currentIndex].company}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className='testimonial-navigation'>
                        <motion.button
                            className='nav-btn prev-btn'
                            onClick={prevTestimonial}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaChevronLeft />
                        </motion.button>

                        <div className='testimonial-dots'>
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>

                        <motion.button
                            className='nav-btn next-btn'
                            onClick={nextTestimonial}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaChevronRight />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Testimonials;