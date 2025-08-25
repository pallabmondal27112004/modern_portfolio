import React from 'react';
import { IoMdCall } from "react-icons/io";
import './footer.css';
import { MdMarkEmailRead } from "react-icons/md";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      className='footer'
      style={{ padding: '0 12rem', overflowX: 'hidden' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* <hr className='fw-bold' style={{ border: '2px solid red', width: '100%'}} /> */}
      <div
        className='d-flex justify-content-between align-items-center fw-bold pt-3 flex-wrap py-3'
        style={{ borderTop: '3px solid black' }}
      >
        <div className='d-flex justify-content-center align-items-center'>
          <p className='p-0 m-0'>All Rights Sererved. powered by <span style={{ color: '#FAE586' }}>PALLAB MONDAL</span></p>
        </div>
        <div className='d-flex justify-content-between align-items-center gap-3'>
          <div>
            <IoMdCall /><span className='ps-2'>7439894395</span>
          </div>
          <div>
            <MdMarkEmailRead /><span className='ps-2'>pallabmondal1000000@gmail.com</span>
          </div>
        </div>
        <div>
          {/* <a download href="./resume.pdf"><button className='btn fw-bold' style={{ background: '#FAE586', }}>
            Downlode Resume
          </button></a> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
