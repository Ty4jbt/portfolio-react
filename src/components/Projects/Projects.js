/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Projects/Projects.css';
import pokedex from '../../images/pokedex_app.JPG';
import movieAPI from '../../images/movie_api_backend.JPG';
import meetApp from '../../images/meet_app.JPG';
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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
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
                    <div className="portfolio-image-box" onClick={openPopupboxMeetApp}>
                        <img src={meetApp} alt="Meet App" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigPokedex} />
            <PopupboxContainer {...popupboxConfigMovieAPI} />
            <PopupboxContainer {...popupboxConfigMeetApp} />
        </div>
    )
}

export default Projects
