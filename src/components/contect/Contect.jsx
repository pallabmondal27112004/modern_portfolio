
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../nevbar/nevbar.css';
import './contect.css';

const Contect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    emailjs
      .sendForm('service_r7rc69g', 'template_g5s4iga', form.current, {
        publicKey: '6uhq4dG-DI_a8ArC8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert(' Message sent!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert(' Failed to send message.');
        }
      );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      id="contact"
      className='d-flex justify-content-center align-items-center flex-column'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      style={{ overflowX: 'hidden' }}
    >
      <h1 className='nevitems fs-1 text-centers'>CONTECT</h1>

      <motion.div
        className='d-flex justify-content-center align-items-sm-center gap-3 tranparent py-3'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className='position-relative clicp-path'><FaFacebook className='m-3 fs-5' /></div>
        <div className='position-relative clicp-path'><FaLinkedinIn className='m-3 fs-5' /></div>
        <div className='position-relative clicp-path'><IoLogoTwitter className='m-3 fs-5' /></div>
        <div className='position-relative clicp-path'><IoLogoYoutube className='m-3 fs-5' /></div>
      </motion.div>

      <motion.div
        className='d-flex justify-content-center align-items-sm-center gap-4 tranparent flex-column py-4'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <form
          className='d-flex justify-content-center align-items-sm-center gap-3 tranparent flex-column py-4'
          ref={form}
          onSubmit={sendEmail}
        >
          <div className='position-relative'>
            <img src="./images/input.png" alt="" style={{ width: '500px', zIndex: '-10', left: '0', top: '30%' }} className='position-absolute contect-responsive' />
            <label className='label'>Name</label><br />
            <input type="text" name="name" className='contect_input' required />
          </div>

          <div className='position-relative'>
            <label className='label'>Email</label><br />
            <input type="email" name="email" className='contect_input ' required />
            <img src="./images/input.png" alt="" style={{ width: '500px', zIndex: '-10', left: '0', top: '30%' }} className='position-absolute contect-responsive' />
          </div>

          <div className='position-relative'>
            <label className='label'>Message</label><br />
            <textarea
              name="message"
              className='contect_input text-input '
              style={{ maxHeight: '115px', minHeight: '115px', padding: '.8rem 1.5rem' }}
              required
            ></textarea>
            <img src="./images/textarea.png" alt="" style={{ width: '500px', zIndex: '-10', left: '0', top: '20%' }} className='position-absolute contect-responsive' />
          </div>

          <div className='position-relative sibmit-div' style={{ marginLeft: "52%" }}>
            <button type='submit' className='submit ps-4 pt-3'>Submit</button>
            <IoMdArrowDropright />
            <img
              src="./images/submit.png"
              alt=""
              style={{ cursor: "pointer", width: '150px', zIndex: '-10', left: '0', top: '17%' }}
              className='position-absolute submit-DIV'
            />
          </div>
        </form>
      </motion.div>

      <motion.button
        onClick={scrollToTop}
        className="scroll-to-top"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <FaArrowUp />
      </motion.button>
    </motion.div>
  );
};

export default Contect;
