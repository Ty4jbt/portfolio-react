import React from 'react';
import '../AboutMe/AboutMe.css';
import headShot from '../../images/HeadShot1.jpg';

const AboutMe = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className='headshot' src={headShot} alt="Headshot" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className='about-heading'>About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nobis voluptate ut nostrum ex aperiam, debitis quae itaque quos a dolore libero fuga deserunt adipisci accusamus veniam vel sunt sed.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
