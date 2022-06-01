import React from 'react';
import LogoName from '../../assets/images/E.png'

function Navigation() {   
    return (
        <nav class="navbar">
        <div>
          <img class="logo" src={LogoName} alt="logo"/>
        </div>
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
    )
}

export default Navigation;