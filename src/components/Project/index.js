import React from 'react';
// import projects from src

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

function Project(props) {
  return (
    <div className="card">
      <div>
        <img className="project-img" alt={props.name} src={props.image} />
      </div>
      <div className="content">
            <h4 className="project-title">{props.name}</h4>
            <p className="project-description">{props.description}</p>
            <div className="project-icons">
              <a className='icon' href={props.github}>
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
              <a className='icon' href={props.deploy}>
                <FontAwesomeIcon icon={faRocket} />
              </a>
            </div>
            {props.skills}
      </div>
    </div>
  );
}


export default Project;