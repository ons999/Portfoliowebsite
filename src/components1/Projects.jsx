import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2>Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="/src/assets/images/project1.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">Description of project 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/src/assets/images/project2.jpg" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">Description of project 2.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
