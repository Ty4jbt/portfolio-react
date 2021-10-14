import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faDatabase, faServer, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div id='services' className='services'>
            <h1 className="py-5">My Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className='icon' icon={faDesktop} size='2x' />
                            </div>
                            <h3>Front-end Frameworks</h3>
                            <p>JavaScript frameworks React and Angular.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className='icon' icon={faDatabase} size='2x' />
                            </div>
                            <h3>Databases</h3>
                            <p>Can build both relational and non-relational databases such as MongoDB and SQL.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className='icon' icon={faServer} size='2x' />
                            </div>
                            <h3>Servers & APIs</h3>
                            <p>Knowledge of API server calls using CRUD.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className='icon' icon={faMobileAlt} size='2x' />
                            </div>
                            <h3>Mobile Apps</h3>
                            <p>Ability to build mobile apps with React Native.</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Services
