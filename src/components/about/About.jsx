import React from 'react'
import './about.css'
import '../nevbar/nevbar.css'
import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaHeart, FaRocket } from 'react-icons/fa';
const About = () => {
  return (

    <div className='w-100 pb-4 d-flex justify-content-center align-items-center mainabot' style={{ overflowX: 'hidden' }}>
      <motion.div
        className='background d-flex justify-content-center align-items-center flex-column'

        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h3
          className='nevitems fs-2 fw-bolder pt-4'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ABOUT
        </motion.h3>

        <motion.div
          className='d-flex justify-content-center gap-4 align-items-center about-responsive '
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src="./images/pallabPort-removebg-preview.png"
            alt=""
            className='responsive-image'
            style={{ width: '250px', height: '250px' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className='about-content '
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Introduction */}
            <motion.p
              className='about-intro other fw-bold fs-5 mb-3 '
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi there! 👋 I'm <span className='highlight-name'>Pallab Kumar Mondal</span>,
              a passionate <span className='highlight-role'>BCA student</span> on an exciting journey
              to become a <span className='highlight-role'>Full-Stack Developer</span>.
            </motion.p>

            {/* Skills Highlights */}
            <motion.div
              className='skills-highlights mb-3'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className='skill-category'>
                <FaCode className='skill-icon' />
                <span className='skill-text'>
                  <strong>Frontend:</strong> HTML, CSS, JavaScript, React, Redux, tailwind
                </span>
              </div>
              <div className='skill-category'>
                <FaRocket className='skill-icon' />
                <span className='skill-text'>
                  <strong>Backend:</strong> Django, Laravel, Database Management
                </span>
              </div>
              <div className='skill-category'>
                <FaGraduationCap className='skill-icon' />
                <span className='skill-text'>
                  <strong>Mobile:</strong> Flutter, GetX, Dart
                </span>
              </div>
            </motion.div>

            {/* Passion Statement */}
            <motion.p
              className='passion-text other fs-6'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <FaHeart className='heart-icon' />
              I'm passionate about creating <span className='highlight-text'>scalable</span>,
              <span className='highlight-text'> efficient applications</span> that solve real-world problems
              and make a positive impact on people's lives.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
