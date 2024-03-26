import React from 'react';

import './Nav.scss';

const Nav = () => {
    return (
      <nav className='nav'>
        <div className='shadow'></div>
        <ul>
          <li>Quien soy</li>
          <li>Experiencia</li>
          <li>Proyectos</li>
        </ul>
      </nav>
    )
}

export default Nav;
