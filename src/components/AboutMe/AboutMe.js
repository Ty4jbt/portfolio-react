import React from 'react';
import '../AboutMe/AboutMe.css';
import headShot from '../../images/HeadShot1.jpg';

const AboutMe = () => {
    return (
        <div id='about-me' className='container py-5'>
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className='headshot' src={headShot} alt="Headshot" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className='about-heading'>About Me</h1>
                    <p className='elevator-pitch'>Hi, I'm Tyler Boe and I'm a web developer. My passion for learning and logically solving problems, lead me to change careers and pursue web development. Applying my problem solving strategies and desire to learn in order to provide an enjoyable experience for those who use the website I build, drives me. I hope to take my skills and help grow a startup.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
