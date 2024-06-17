import React, { useState } from 'react';

import githubIcon from './resources/github.svg';
import linkedinIcon from './resources/linkedin.svg';
import githubHoverIcon from './resources/hover/github.svg';
import linkedinHoverIcon from './resources/hover/linkedin.svg';

import './Contact.scss';

const Contact = () => {
    const [githubHover, setGithubHover] = useState(false);
    const [linkedinHover, setLinkedinHover] = useState(false);

    const handleButtonClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <section className='contact'>
            <div className='social'>
                <button
                    onClick={() => handleButtonClick("https://github.com/chelseajoint")}
                    onMouseEnter={() => setGithubHover(true)}
                    onMouseLeave={() => setGithubHover(false)}
                >
                    <img
                        src={githubHover ? githubHoverIcon : githubIcon}
                        alt="GitHub"
                        className={`icon ${githubHover ? 'github-hover' : ''}`}
                    />
                </button>
                <button
                    onClick={() => handleButtonClick("https://www.linkedin.com/in/chelseajoint/")}
                    onMouseEnter={() => setLinkedinHover(true)}
                    onMouseLeave={() => setLinkedinHover(false)}
                >
                    <img
                        src={linkedinHover ? linkedinHoverIcon : linkedinIcon}
                        alt="LinkedIn"
                        className={`icon ${linkedinHover ? 'linkedin-hover' : ''}`}
                    />
                </button>
            </div>
            <div className='contacts'>
                <a href="mailto:mariia.koikonova@gmail.com">mariia.koikonova@gmail.com</a>
                <a href="tel:+34658971100">+34 658 97 11 00</a>
            </div>
        </section>
    );
}

export default Contact;
