import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../utils/projects';

const Projects = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
