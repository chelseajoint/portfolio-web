import React from 'react';
import experienceData from './resource/experienceData.json';
import cv from './resource/MariiaKoikonova_CV_FrontEnd.pdf';

import './Experience.scss';

const Experience = ({ isOpen, toggle }) => {
  const handleJobClick = (url) => {
    window.open(url, '_blank');
  };

  const handleDownloadCV = () => {
    window.open(cv, '_blank');
  };

  return (
    <section className='experience' id='experience'>
      <h3 className='title-experience' onClick={toggle}>Experiencia</h3>
      <div className={`mobile-dropdown ${isOpen ? 'open' : ''}`}>
      {experienceData.map((experience, index) => (
        <button
          className='job-info'
          key={index}
          href={experience.link}
          onClick={(e) => {
            e.preventDefault();
            handleJobClick(experience.link);
          }}
        >
          <h4 className='dates'>{experience.dates}</h4>
          <div className='info-position'>
            <h3 className='company'>{experience.company}</h3>
            <h4 className='position'>{experience.position}<span className='position-dates'> | {experience.dates}</span></h4>
            <div className='tasks'>
              <ul>
                {experience.tasks.map((task, idx) => (
                  <li key={idx}><h4>{task}</h4></li>
                ))}
              </ul>
            </div>
            <div className='skills'>
              {experience.skills.map((skill, idx) => (
                <h4 key={idx}>{skill}</h4>
              ))}
            </div>
          </div>
        </button>
      ))}
      <button className='resume' onClick={handleDownloadCV}><h4>Ver CV completo</h4></button>
      </div>
    </section>
  );
};

export default Experience;
