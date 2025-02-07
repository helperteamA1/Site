import React from 'react'
import './About.css'
import Ashutosh from '../../Images/IMG_20250206_010143.jpg'

const About = () => {
  return (
    <>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

    <div className="about-container">
      
      <h1 className="about-heading">About Us</h1>
      <p className="about-description">
        Helper Team is dedicated to helping students access academic resources with ease. We aim to simplify the process of sharing previous semester papers, providing PYQs, and fostering a collaborative learning environment for students.
      </p>

      
      <div className="vision-mission-section">
        <div className="vision-box">
          <h2>Our Vision</h2>
          <p>
            To become the leading platform for academic material sharing, empowering students by providing the right resources at the right time.
          </p>
        </div>
        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>
            To foster a collaborative community where students can easily access and exchange academic resources, making learning more efficient and accessible.
          </p>
        </div>
      </div>
    
    <div className="founder-section">
        <img
          src={Ashutosh}
          alt="Ashutosh Sahu"
          className="founder-image"
        />
        <div className="founder-info">
          <h2>Ashutosh Sahu</h2>
          <p>Founder, Helper Team</p>
          <p>
            Hi, I'm Ashutosh, the Founder of Helper Team. I'm passionate about simplifying access to academic resources and creating a collaborative space for students.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ashutosh-sahu-iitm" target="_blank" rel="noopener noreferrer" className="social-item">
              <i className='bx bxl-linkedin'></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/ashu2627_/" target="_blank" rel="noopener noreferrer" className="social-item">
              <i className='bx bxl-instagram'></i>
              <span>Instagram</span>
            </a>
            <a href="https://www.youtube.com/@vlogsbyashu_iitian" target="_blank" rel="noopener noreferrer" className="social-item">
              <i className='bx bxl-youtube'></i>
              <span>YouTube</span>
            </a>
            <a href="mailto:juetunofficial@gmail.com" target="_blank" rel="noopener noreferrer" className="social-item">
              <i className='bx bx-envelope'></i>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default About
