import React from 'react';
import Content from '../../components/projects/content/Content';
import { projects } from '../../assets/projects/projects';

const Projects = () => {
  return (
    <div className="projects__list">
      {projects.map((project, index) => (
        <article key={index} className="project__card">
          <div className="project__header">
            <h2 className="project__name">{project.name}</h2>
            <span className="project__period">{project.productionPeriod}</span>
          </div>
          <div className="project__body">
            <Content content={project.mainContent} />
          </div>
        </article>
      ))}
    </div>
  );
};

export default Projects;
