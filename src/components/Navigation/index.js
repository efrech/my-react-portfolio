import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoName from '../../assets/images/E.png';


function Navigation() {   
    return (
        <div className="navbar">
          <img className="logo" src={LogoName} alt="logo"/>
        <nav className='nav-list'>
          <NavLink exact="true" activeclassname="active" to="/" className="list-item">About Me
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/portfolio" className="list-item"> Portfolio
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/contact" className="list-item"> Contact 
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/resume" className="list-item"> Resume
          </NavLink>
        </nav>
      </div>
    )
}

export default Navigation;