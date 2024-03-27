import React from 'react';
import experienceData from './experienceData.json';
import './Experience.scss';

const Experience = () => {
  const handleJobClick = (url) => {
    window.open(url, '_blank'); // Открывает ссылку в новой вкладке
    // Или можно использовать window.location.href = url; для перехода на новую страницу
  };

  return (
    <section className='experience' id='experience'>
      {experienceData.map((experience, index) => (
        <a
          className='job-info'
          key={index}
          href={experience.link}
          onClick={(e) => {
            e.preventDefault(); // Предотвращает стандартное поведение ссылки
            handleJobClick(experience.link);
          }}
        >
          <div className='dates'>{experience.dates}</div>
          <div className='info'>
            <h3 className='company'>{experience.company}</h3>
            <h4 className='position'>{experience.position}</h4>
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
        </a>
      ))}
    </section>
  );
};

export default Experience;
