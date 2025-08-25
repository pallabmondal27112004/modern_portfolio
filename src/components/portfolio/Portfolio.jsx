
import ReactPaginate from 'react-paginate';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createProject, getProject } from '../../redux/projectapi/projectSlice';
import { getuser } from '../../redux/projectapi/adminSlice';
import './portfolio.css';
import '../nevbar/nevbar.css';

import { useState, useEffect } from 'react';

const Portfolio = () => {
  const dispatch = useDispatch();
  const projects = useSelector((store) => store.project);
  const admin = useSelector((store) => store.admin);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const [show, setShow] = useState(false);
  const [isadd, setAdd] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0); // Top-level in your component
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({ username: '', password: '' });

  const [formData2, setFormData2] = useState({
    name: '',
    decs: '',
    projecturl: '',
    image: null,
  });

  useEffect(() => {
    dispatch(getProject());
    dispatch(getuser());
  }, [dispatch]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = projects.project.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(projects.project.length / itemsPerPage);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = admin.user.find(
      (a) => a.username === formData.username && a.password === formData.password
    );
    if (found) {
      setAdd(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData2((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData2.name);
    data.append('projecturl', formData2.projecturl);
    data.append('decs', formData2.decs); // Corrected from `desc` to `decs`
    if (formData2.image) {
      data.append('image', formData2.image);
    }
    await dispatch(createProject(data));
    await dispatch(getProject());
    handleClose();
    setAdd(false);
    setRefreshKey((prevKey) => prevKey + 1); // trigger re-render
  };

  return (
    <div id="portfolio" className="d-flex justify-content-center align-items-center flex-column" style={{ overflowX: 'hidden' }}>
      <h1 className="nevitems fs-1 py-3">PORTFOLIO</h1>

      <div className="d-flex justify-content-center align-items-center gap-4 px-5 flex-wrap">
        {currentItems.map((item, index) => (
          <motion.div
            key={item.id || index}
            className="flex-fill borders position-relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
            animate="rest"
          >
            <div
              className="projectdiv position-relative overflow-hidden"
              style={{
                height: '200px',
                backgroundColor: '#f0f0f0',
                backgroundImage: item.image ? `url(${item.image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <motion.div
                variants={{
                  rest: { opacity: 0, y: 20 },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75"
              >
                <a onClick={() => handleClick(item.projecturl)} role="button">
                  <FaExternalLinkAlt color="white" size={24} />
                </a>
              </motion.div>
            </div>
            <p className="ps-4 text-start projectname mt-2">{item.name}</p>
            <p className="ps-3 text-secondary text-start">
              {item.decs?.length >= 70 ? item.decs.slice(0, 70) + '.....' : item.decs}
            </p>
          </motion.div>
        ))}
      </div>

      {projects.project.length > itemsPerPage && (
        <div className="mt-4">
          <ReactPaginate
            previousLabel={'← Previous'}
            nextLabel={'Next →'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
          />
        </div>
      )}

      <div className="mt-4">
        <Button
          className="btn fw-bold text-black"
          style={{ background: '#FAE586' }}
          onClick={handleShow}
        >
          Add project
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{isadd ? 'Add project' : 'Verify yourself'}</Modal.Title>
        </Modal.Header>

        {isadd ? (
          <Modal.Body>
            <form id="uploadForm">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData2.name}
                onChange={handleChange2}
              /><br />
              <textarea
                className="form-control"
                name="decs"
                placeholder="Description ..."
                value={formData2.decs}
                onChange={handleChange2}
              /><br />
              <input
                className="form-control"
                type="text"
                name="projecturl"
                placeholder="Enter your project url"
                value={formData2.projecturl}
                onChange={handleChange2}
              /><br />
              <input
                className="form-control"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
              />
            </form>
          </Modal.Body>
        ) : (
          <Modal.Body>
            <form
              id="projectform"
              className="d-flex w-100 justify-content-center align-items-center flex-column"
            >
              <input
                type="text"
                placeholder="Enter the username"
                className="form-control mb-2"
                value={formData.username}
                name="username"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Enter the Password"
                className="form-control mb-2"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </form>
          </Modal.Body>
        )}

        <Modal.Footer>
          {isadd ? (
            <Button
              onClick={handleSubmit2}
              type="submit"
              className="btn fw-bold text-black"
              style={{ background: '#FAE586' }}
              form="uploadForm"
            >
              Upload
            </Button>
          ) : (
            <>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                onClick={handleSubmit}
                className="btn fw-bold text-black"
                style={{ background: '#FAE586' }}
                form="projectform"
              >
                Submit
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Portfolio;
