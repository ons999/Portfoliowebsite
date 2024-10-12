import React from 'react';
import './HomePage.css'; // Ensure you have the CSS for styles and animations
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <section className="hero text-center fade-in">
        <div className="container">
          <h1 className="display-4">Welcome to My Portfolio</h1>
          <p className="lead">I am a passionate web developer.</p>
          <Link to="/projects" className="btn btn-outline-dark " style={{ textDecoration: 'none' }}>
  View Projects
</Link>

        </div>
      </section>

      <section className="about my-5 fade-in">
        <div className="container">
          <h2 className="text-center">About Me</h2>
          <p>
            I am a web developer with experience in creating responsive and user-friendly websites. 
            I love to work with modern technologies and continuously improve my skills. 
            My goal is to build scalable and efficient applications that provide a great user experience.
          </p>
        </div>
      </section>

      <section className="skills my-5 fade-in">
        <div className="container">
          <h2 className="text-center">My Skills</h2>
          <ul className="list-inline text-center">
            <li className="list-inline-item">JavaScript</li>
            <li className="list-inline-item">React</li>
            <li className="list-inline-item">Django</li>
            <li className="list-inline-item">HTML & CSS</li>
            <li className="list-inline-item">Bootstrap</li>
          </ul>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="container">
          <h2 className="text-center">Projects</h2>
          <p className="text-center">
            Check out some of my latest projects below!
          </p>
          <div className="project-list">
            {/* Example project card */}
            <div className="project-card zoom-in">
              <h3>Project Title</h3>
              <p>Short description of the project.</p>
              <a href="#" className="btn btn-secondary">View Project</a>
            </div>
            {/* Add more projects as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
