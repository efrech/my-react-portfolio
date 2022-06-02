import React from 'react';
// import projects from src

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Project(props) {
  return (
    <div className="card">
      <div className="project-img">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
            <h3 className="project-title">{props.name}</h3>
            <p className="project-description">{props.description}</p>
            <div className="project-icons">
              <a className='icon' href="https://www.linkedin.com/evelyn.frech">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
            </div>
            {props.skills}
      </div>
    </div>
  );
}


export default Project;