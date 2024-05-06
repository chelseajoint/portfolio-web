//components/Info/Nav/Nav.js
import React, { useState, useEffect } from 'react';

import './Nav.scss';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let scrollPosition = window.scrollY;

      sections.forEach(section => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section.id);
        }
      });
    };

    handleScroll();

    const scrollListener = () => {
      handleScroll();
    };

    document.addEventListener('scroll', scrollListener);

    return () => {
      document.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <nav className='nav'>
      <div className='shadow'></div>
      <ul>
        <li><a href="#about" onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>Quien soy</a></li>
        <li><a href="#experience" onClick={() => setActiveSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experiencia</a></li>
        <li><a href="#projects" onClick={() => setActiveSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Proyectos</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
