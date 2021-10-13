import React from 'react';
import '../Footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithub, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <a 
                href='https://www.facebook.com/tyler.boe.52'
                target='_blank'
                rel="noreferrer"
                className='footer-icon'><FontAwesomeIcon 
                className='icon' 
                icon={faFacebookSquare} 
                size='2x'/></a>
                <a 
                href='https://www.instagram.com/ty4jbt/' 
                target='_blank'
                rel="noreferrer"
                className='footer-icon'><FontAwesomeIcon 
                className='icon' 
                icon={faInstagram} 
                size='2x'/></a>
                <a 
                href='https://twitter.com/tyler_boe' 
                target='_blank'
                rel="noreferrer"
                className='footer-icon'><FontAwesomeIcon className='icon' 
                icon={faTwitterSquare} size='2x'/></a>
                <a 
                href='https://github.com/Ty4jbt' 
                target='_blank'
                rel="noreferrer"
                className='footer-icon'><FontAwesomeIcon 
                className='icon' 
                icon={faGithub} 
                size='2x'/></a>
                <p className='copyright'>©Copyright 2021 Tyler Boe</p>
            </div>
        </div>
    )
}

export default Footer
