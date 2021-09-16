import React from 'react';
import logo from '../../images/tyler-boe-logo.svg';
import '../Navbar/Navbar.css';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#header">
                    <img className='logo' src={logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{ color: 'dark-grey' }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#header">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#about-me'>About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#services'>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#experience'>Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#projects'>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
