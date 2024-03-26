import React from 'react';
import Nav from './Nav/Nav';
import About from './About/About';
import Experience from './Experience/Experience';

import './Info.scss';

const Info = () => {
    return (
        <div className='info'>
            <Nav />
            <About />
            <Experience />
        </div>
    )
}

export default Info;
