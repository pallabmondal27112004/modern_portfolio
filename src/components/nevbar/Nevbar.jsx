import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './nevbar.css';

const Nevbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledtext, setScrolledtext] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setScrolledtext(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <motion.div
      className={`nav-wrapper position-sticky top-0 start-0 py-2 ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Desktop Navbar */}
      <div className="d-none d-md-flex justify-content-center align-items-center gap-4 py-2">
        <img src="./images/nevbarrectangle.png" alt="" style={{ width: '150px' }} />
        {['HOME', 'ABOUT', 'EXPERIENCE', 'PORTFOLIO', 'SKILLS', 'ACHIEVEMENTS', 'CONTACT'].map((item, i) => (
          <React.Fragment key={i}>
            <motion.p
              className={`nevitems ${scrolledtext ? 'scrolledtext' : ''}`}
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              style={{ cursor: 'pointer' }}
            >
              {item}
            </motion.p>
            {item !== 'CONTACT' && (
              <img src="./images/nevbardesign.png" alt="" style={{ width: '10px' }} />
            )}
          </React.Fragment>
        ))}
        <img src="./images/nevbarrectangle.png" alt="" style={{ width: '150px' }} />
      </div>

      {/* Mobile Navbar Toggle */}
      <div className="d-flex d-md-none justify-content-end align-items-center px-3">
        <img
          src="./images/menu.png"
          alt="Menu"
          className="menu-icon"
          style={{ width: '35px' }}
          onClick={toggleMobileMenu}
        />
      </div>

      {/* Mobile Dropdown Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="d-md-none mobile-menu text-center py-3"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ background: '#67BE78' }}
          >
            {['HOME', 'ABOUT', 'EXPERIENCE', 'PORTFOLIO', 'SKILLS', 'ACHIEVEMENTS', 'CONTACT'].map((item, i) => (
              <motion.p
                key={i}
                className="nevitems"
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{ cursor: 'pointer' }}
              >
                {item}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Nevbar;
