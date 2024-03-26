import React from 'react';
import experienceData from './experienceData.json';
import './Experience.scss';

const Experience = () => {
  return (
    <section className='experience'>
      {experienceData.map((experience, index) => (
        <div className='job-info' key={index}>
          <div className='dates'>{experience.dates}</div>
          <div className='info'>
            <h3 className='position'>{experience.position}</h3>
            <h3 className='company'>{experience.company}</h3>
            <div className='tasks'>
              <ul>
                {experience.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
            {experience.clients && <h4 className='clients'>Clientes: {experience.clients.join(', ')}</h4>}
            <div className='skills'>
            {experience.skills.map((skill, idx) => (
              <h4 key={idx}>{skill}</h4>
            ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
