import React from 'react';
import projectsData from './resource/projectsData.json';

import './Projects.scss';

const Projects = ({ isOpen, toggle }) => {
  const handleProjectClick = (url) => {
    window.open(url, '_blank');
  };

  const handleViewAll = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className='projects' id='projects'>
      <h3 className='title-projects' onClick={toggle}>Proyectos</h3>
      <div className={`mobile-dropdown ${isOpen ? 'open' : ''}`}>
      {projectsData.map((project, index) => (
        <button
          className='project-info'
          key={index}
          href={project.link}
          onClick={(e) => {
            e.preventDefault();
            handleProjectClick(project.link);
          }}
        >
            <h3 className='name'>{project.name}</h3>
            <div className='about-project'>
            <h4>{project.about}</h4>
            <div className='skills'>
              {project.skills.map((skill, idx) => (
                <h4 key={idx}>{skill}</h4>
              ))}
            </div>
          </div>
        </button>
      ))}
      <button className='view-all' onClick={handleViewAll}><h4>Ver github</h4></button>
      </div>
    </section>
  );
};

export default Projects;
