import React from 'react';
import '../Header/Header.css';
import ReactTyped from 'react-typed';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="main-info">
                <h1>Full-Stack Web Developer</h1>
                <ReactTyped
                    className='typed-text'
                    strings={[ 'Node.js', 'React.js', 'MongoDB', 'Bootstrap', 'SQL', 'PostgreSQL', 'Express.js' ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className='btn-main-offer'>Contact Me</a>
            </div>
        </div>
    )
}

export default Header
