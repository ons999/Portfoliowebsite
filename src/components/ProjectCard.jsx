import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={project.image} className="card-img-top" alt={project.title} />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
