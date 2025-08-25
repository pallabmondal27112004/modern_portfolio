import React, { useState } from 'react';
import './blog.css';
import { MdArrowDropDown } from "react-icons/md";
import { motion } from 'framer-motion';

const BlogGrid = () => {
  // Function to toggle 'Read More' functionality
  const [expanded, setExpanded] = useState({
    post1: false,
    post2: false,
    post3: false,
    post4: false,
  });

  const toggleExpand = (postId) => {
    setExpanded((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  return (
    <div className="container blog-container" style={{ padding: '2rem 15rem', overflowX:'hidden' }}>
      <h1 className="text-center blog-title nevitems fs-1 py-3">BLOG</h1>
      <div className="row">
        
        {/* Blog 1 */}
        <motion.div
          className="border-end border-bottom border-black col-md-6 rightborder"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="blog-card p-4 h-100">
            <h5 className="fw-bold text-uppercase">
              My Smart India Hackathon Journey: From Idea to Impactful Solution
            </h5>
            <p className="blog-author fst-italic mb-2">
              By pallab mondal on April 30, 2025
            </p>
            <p>
              {expanded.post1 ? (
                <>
                  I participated in the Smart India Hackathon with my team, and we developed a solution that addressed a real-world problem. It was a highly engaging experience that allowed me to work under pressure while delivering innovative solutions. We faced challenges but learned a lot about teamwork and using technology to solve complex issues.
                </>
              ) : (
                <>
                  I participated in the Smart India Hackathon with my team, and we developed a solution that addressed a real-world problem...
                </>
              )}
            </p>
            <button
              className="fw-bold text-dark btn "
              onClick={() => toggleExpand('post1')}
            >
              {expanded.post1 ? 'Show Less' : <span>Continue Reading &rsaquo;</span>}
            </button>
          </div>
        </motion.div>

        {/* Blog 2 */}
        <motion.div
          className="col-md-6 border-start border-bottom border-black leftborder"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="blog-card p-4 h-100">
            <h5 className="fw-bold text-uppercase">
              How a College Hackathon Pushed Me to Think Creatively and Code Smartly
            </h5>
            <p className="blog-author fst-italic mb-2">
              By pallab mondal on April 30, 2025
            </p>
            <p>
              {expanded.post2 ? (
                <>
                  I also participated in an intra-college hackathon, which was a huge learning experience. My project involved building a web application using the latest tech stack. It pushed me to think creatively and work quickly while enhancing my coding skills. The competitive atmosphere taught me how to handle stress and deliver results efficiently.
                </>
              ) : (
                <>
                  I also participated in an intra-college hackathon, which was a huge learning experience...
                </>
              )}
            </p>
            <button
              className="fw-bold text-dark btn"
              onClick={() => toggleExpand('post2')}
            >
              {expanded.post2 ? 'Show Less' : 'Continue Reading &rsaquo;'}
            </button>
          </div>
        </motion.div>

        {/* Blog 3 */}
        <motion.div
          className="col-md-6 border-end border-top border-black rightborder"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="blog-card p-4 h-100">
            <h5 className="fw-bold text-uppercase">
              Maintaining a 9+ CGPA While Building Real Projects – Here's How I Did It
            </h5>
            <p className="blog-author fst-italic mb-2">
              By pallab mondal on April 30, 2025
            </p>
            <p>
              {expanded.post3 ? (
                <>
                  Balancing academics and programming can be challenging, but I managed to maintain a high CGPA in my semesters while working on real-world projects. My semester results speak for themselves:
                  - Semester 1: 9.09
                  - Semester 2: 9.05
                  - Semester 3: 8.64
                  Time management and consistency have been key to my success. Here are some study habits that helped me maintain my academic performance while working on personal projects.
                </>
              ) : (
                <>
                  Balancing academics and programming can be challenging, but I managed to maintain a high CGPA in my semesters...
                </>
              )}
            </p>
            <button
              className="fw-bold text-dark btn"
              onClick={() => toggleExpand('post3')}
            >
              {expanded.post3 ? 'Show Less' : 'Continue Reading &rsaquo;'}
            </button>
          </div>
        </motion.div>

        {/* Blog 4 */}
        <motion.div
          className="col-md-6 border-start border-top border-black leftborder"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="blog-card p-4 h-100">
            <h5 className="fw-bold text-uppercase">
              Taking the Leap: Joining My First Startup as a Student Developer
            </h5>
            <p className="blog-author fst-italic mb-2">
              By Palluppan on April 30, 2025
            </p>
            <p>
              {expanded.post4 ? (
                <>
                  Recently, I took a huge step in my career by joining a startup with a friend. It's a thrilling experience where I’m learning to build real-world products and solve practical problems. Balancing college with startup work is challenging, but the exposure to the real tech world is invaluable.
                </>
              ) : (
                <>
                  Recently, I took a huge step in my career by joining a startup with a friend. It's a thrilling experience...
                </>
              )}
            </p>
            <button
              className="fw-bold text-dark btn"
              onClick={() => toggleExpand('post4')}
            >
              {expanded.post4 ? 'Show Less' : 'Continue Reading &rsaquo;'}
            </button>
          </div>
        </motion.div>
      </div>

      {/* All Articles Button */}
      <motion.div
        className='d-flex justify-content-center align-items-center py-3'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className='position-relative'>
          <img
            src="./images/showallartical.png"
            alt=""
            style={{ width: '150px', zIndex: '10', left: '0', top: '30%' }}
            className='position-absolute'
          />
          <div className='ps-4 fw-bold pt-4 d-flex'>
            <p className='fw-bold p-0 m-0'>All Articles</p>
            <MdArrowDropDown className=' fs-4' />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogGrid;
