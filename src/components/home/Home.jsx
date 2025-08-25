import React from 'react';
import { FaFacebook, FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
import { IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import TypedText from './typetext';
import './home.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      id="home"
      className='pt-5 mb-2'
      style={{ overflowX: 'hidden' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className='w-100 d-flex justify-content-center align-items-center flex-column'
        style={{}}
      >
        <h1 className='hello'>HELLO</h1>
        <p className='fs-4 other p-0 m-0'>
          My name is <strong className='name'>Pallab Kumar Mondal</strong>
        </p>

        <div className='text-start'>
          <h1 className='fs-5 text-start other fw-bold' style={{ width: '250px' }}>
            I am a <TypedText />
          </h1>
        </div>

        <div className='d-flex justify-content-center align-items-sm-center gap-3 tranparent py-3'>
          <motion.div
            className='position-relative clicp-path social-link '
            style={{ background: "#67BE78" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://www.linkedin.com/in/pallab-mondal-635906281/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className='m-3 fs-5 ' style={{ color: "#FAE586" }} />
            </a>
          </motion.div>
          <motion.div
            style={{ background: "#67BE78" }}

            className='position-relative clicp-path social-link'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://github.com/pallabmondal27112004" target="_blank" rel="noopener noreferrer">
              <FaGithub className='m-3 fs-5 ' style={{ color: "#FAE586" }} />
            </a>
          </motion.div>
          <motion.div
            style={{ background: "#67BE78" }}

            className='position-relative clicp-path social-link'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFacebook className='m-3 fs-5 ' style={{ color: "#FAE586" }} />
          </motion.div>
          <motion.div
            style={{ background: "#67BE78" }}

            className='position-relative clicp-path social-link'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoLogoYoutube className='m-3 fs-5  ' style={{ color: "#FAE586" }} />
          </motion.div>
        </div>

        {/* Professional Resume Download Button */}
        <motion.div
          className='mt-4'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="/resume.pdf"
            download="Pallab_Kumar_Mondal_Resume.pdf"
            className='resume-btn d-inline-flex align-items-center gap-2 px-4 py-2 text-decoration-none'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            Download Resume
          </motion.a>
        </motion.div>

        <div className='d-flex justify-content-center align-items-center flex-column my-4 gap-2'>
          <img src="./images/animated_dots_top_to_bottom.gif" alt="" style={{ width: '20px', backgroundColor: 'white' }} />
          <img src="./images/animated_dots_top_to_bottom.gif" alt="" style={{ width: '20px', backgroundColor: 'white' }} />
          <img src="./images/animated_dots_top_to_bottom.gif" alt="" style={{ width: '20px', backgroundColor: 'white' }} />
        </div>
      </div>
    </motion.div >
  );
};

export default Home;
