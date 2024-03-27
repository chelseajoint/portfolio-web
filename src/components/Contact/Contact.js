import React from 'react';

import './Contact.scss';

const Contact = () => {
return (
    <section className='contact'>
        <div className='social'>
            <button className='github'></button>
            <button className='linkedin'></button>
        </div>
        <div className='contacts'>
            <a href="mailto:mariia.koikonova@gmail.com">mariia.koikonova@gmail.com</a>
            <a href="tel:+34658971100">+34 658 97 11 00</a>
        </div>
    </section>
)
}

export default Contact;
