import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoName from '../../assets/images/E.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase, faEnvelope, faFileCircleCheck, faHome} from '@fortawesome/free-solid-svg-icons';

function Navigation() {   
    return (
        <div className="navbar">
        <Link to="/">
          <img className="logo" src={LogoName} alt="logo"/>
        </Link>
        <nav className='nav-list'>
          <NavLink exact="true" activeclassname="active" to="/" className="about-link">
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/portfolio" className="project-link">
            <FontAwesomeIcon icon={faBriefcase} />
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} />
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/resume" className="resume-link">
            <FontAwesomeIcon icon={faFileCircleCheck} />
          </NavLink>
          <ul class="nav-list">
          <li class="list-item">
            <a href="#about">About Me</a>
          </li>
          <li class="list-item">
            <a href="#work">Work</a>
          </li>
          <li class="list-item">
            <a href="#contact">Contact me</a>
          </li>
          <li class="list-item">
            <a href="asset/Resume Evelyn_Frech.pdf" target="_blank">Resume</a>
          </li>
        </ul>
        </nav>
      </div>
    )
}

export default Navigation;