/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Projects/Projects.css';
import pokedex from '../../images/pokedex_app.JPG';
import movieAPI from '../../images/movie_api_backend.JPG';
import meetApp from '../../images/meet_app.JPG';
import chatApp from '../../images/Chat_app.JPG';
import myflixReact from '../../images/myflix_react.JPG';
import myflixAngular from '../../images/myflix_angular.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Projects = () => {

    // Pokedex
    const openPopupboxPokedex = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={pokedex} alt="Pokedex app" />
            <p>A PokeDex, built using vanilla JavaScript and the Pokemon API</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Ty4jbt/simple-pokedex-app", "_blank")}>https://github.com/Ty4jbt/simple-pokedex-app</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                text: "PokeDex App",
                },
            },
        });
    }

    const popupboxConfigPokedex = {
        titleBar: {
        enable: true,
        text: "PokeDex App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // City Guide App
    const openPopupboxMovieAPI = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={movieAPI} alt="Movie API Backend code" />
            <p>Movie API along with a database of movies using Mongoose and MongoDB.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Ty4jbt/Movie_API", "_blank")}>https://github.com/Ty4jbt/Movie_API</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                text: "MyFlix API",
                },
            },
        });
    }

    const popupboxConfigMovieAPI = {
        titleBar: {
        enable: true,
        text: "Movie API Backend code"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Portfolio Project
    const openPopupboxMeetApp = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={meetApp} alt="Meet App" />
            <p>Meet App is a PWA that uses a the Google Calendar API and D3.js to populate events from around the world and visualize the data using a graph and pie chart.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Ty4jbt/Meet_app", "_blank")}>https://github.com/Ty4jbt/Meet_app</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                text: "Meet App",
                },
            },
        });
    }

    const popupboxConfigMeetApp = {
        titleBar: {
        enable: true,
        text: "Meet App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Chat App
    const openPopupboxChatApp = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox chat-app-popup" src={chatApp} alt="Chat app" />
            <p>Chat App is a React Native mobile app that incoporates Firebase cloud storage and the Gifted-Chat library.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Ty4jbt/chat-app", "_blank")}>https://github.com/Ty4jbt/chat-app</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                text: "Chat App",
                },
            },
        });
    }

    const popupboxConfigChatApp = {
        titleBar: {
        enable: true,
        text: "Chat App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // myFlix React
    const openPopupboxMyFlixReact = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={myflixReact} alt="myFlix React" />
            <p>Client side using React of the Movie API that I built.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Ty4jbt/myFlix-client", "_blank")}>https://github.com/Ty4jbt/myFlix-client</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                text: "myFlix React",
                },
            },
        });
    }

    const popupboxConfigMyFlixReact = {
        titleBar: {
        enable: true,
        text: "myFlix React"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // myFlix Angular
    const openPopupboxMyFlixAngular = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={myflixAngular} alt="myFlix Angular" />
            <p>Client side using Angular of the Movie API that I built.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Ty4jbt/myFlix-client-angular", "_blank")}>https://github.com/Ty4jbt/myFlix-client-angular</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                text: "myFlix Angular",
                },
            },
        });
    }

    const popupboxConfigMyFlixAngular = {
        titleBar: {
        enable: true,
        text: "myFlix Angular"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id='projects' className="portfolio-wrapper">
            <div className="container">
                <h1 className="projects-title text-uppercase text-center py-5">projects</h1>
                <div className="image-box-wrapper row row-cols-auto justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxPokedex}>
                        <img src={pokedex} alt="pokedex" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxMovieAPI}>
                        <img src={movieAPI} alt="API code" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxMyFlixReact}>
                        <img src={myflixReact} alt="API code" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxMeetApp}>
                        <img src={meetApp} alt="Meet App" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxChatApp}>
                        <img src={chatApp} alt="Chat App" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxMyFlixAngular}>
                        <img src={myflixAngular} alt="Meet App" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigPokedex} />
            <PopupboxContainer {...popupboxConfigMovieAPI} />
            <PopupboxContainer {...popupboxConfigMyFlixReact} />
            <PopupboxContainer {...popupboxConfigMeetApp} />
            <PopupboxContainer {...popupboxConfigChatApp} />
            <PopupboxContainer {...popupboxConfigMyFlixAngular} />
        </div>
    )
}

export default Projects
