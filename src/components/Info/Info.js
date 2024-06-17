import React, { useState } from 'react';
import Nav from './Nav/Nav';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';

import './Info.scss';

const Info = () => {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [experienceOpen, setExperienceOpen] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);

    const toggleAbout = () => {
        setAboutOpen(!aboutOpen);
        setExperienceOpen(false);
        setProjectsOpen(false);
    };

    const toggleExperience = () => {
        setExperienceOpen(!experienceOpen);
        setAboutOpen(false);
        setProjectsOpen(false);
    };

    const toggleProjects = () => {
        setProjectsOpen(!projectsOpen);
        setAboutOpen(false);
        setExperienceOpen(false);
    };

    return (
        <selection className='info'>
            <Nav />
            <About isOpen={aboutOpen} toggle={toggleAbout} />
            <Experience isOpen={experienceOpen} toggle={toggleExperience} />
            <Projects isOpen={projectsOpen} toggle={toggleProjects} />
        </selection>
    )
}

export default Info;
