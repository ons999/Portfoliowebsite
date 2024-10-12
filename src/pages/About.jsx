import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4">About Me</h1>
        <p className="lead">
          Hi, I'm Debasish Panda, a passionate Full Stack Web Developer with experience in both Frontend and Backend technologies. 
          I enjoy creating web applications that enhance user experiences and solve real-world problems.
        </p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h2>Professional Background</h2>
          <p>
            I graduated from XYZ University with a degree in Computer Science. 
            Over the past 3 years, I have worked at ABC Company as a Software Engineer, where I developed and maintained several web applications and collaborated with cross-functional teams.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Skills and Expertise</h2>
          <ul className="list-group">
            <li className="list-group-item">JavaScript (React, Node.js)</li>
            <li className="list-group-item">Python (Django, Flask)</li>
            <li className="list-group-item">HTML, CSS, Bootstrap</li>
            <li className="list-group-item">MySQL, MongoDB</li>
          </ul>
        </div>
      </div>

      <div className="my-5">
        <h2>Projects</h2>
        <p>Some of my notable projects include:</p>
        <ul className="list-group">
          <li className="list-group-item">
            <a href="https://github.com/ons999/Calculator_Project.git" target="_blank" rel="noopener noreferrer">
              Calculator Project
            </a>: A simple calculator built with React, demonstrating the use of state and component lifecycle methods.
          </li>
          <li className="list-group-item">
            <a href="https://github.com/ons999/firstgit.git" target="_blank" rel="noopener noreferrer">
              Portfolio Website
            </a>: A personal portfolio website showcasing my projects and skills.
          </li>
        </ul>
      </div>

      <div className="my-5">
        <h2>Personal Interests</h2>
        <p>
          In my free time, I enjoy hiking, reading tech blogs, and playing video games. 
          I believe these activities help me stay creative and inspired in my work.
        </p>
      </div>

      <div className="my-5">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me at <a href="mailto:ons0999666333@gmail.com">debasish.panda@example.com</a> 
          or connect with me on <a href="https://www.linkedin.com/in/debasish-panda/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
