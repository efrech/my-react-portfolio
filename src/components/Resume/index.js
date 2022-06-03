import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Resume() {
    return (
        <section>
            <div className='center-item'><h3>bootcamp Experience:</h3></div>
            <div class='row'>
                <div class='column'>
                        <h4>
                            Browser Based Technologies
                        </h4>
                        <p>
                            HTML/CSS/Bootstrap
                        </p>
                        <p>
                            JavaScript/jQuery/React.js
                        </p>
                        <p>
                            Progressive Web Applications (PWAs)
                        </p>
                        <p>
                            Local Storage, Session Storage.
                        </p>
                </div>
                <div class='column'>
                    <p>
                        <h4>
                            API Design
                        </h4>
                        <p>
                            MVC
                        </p>
                        <p>
                            Rest
                        </p>
                        <p>
                            Json
                        </p>
                        <p>
                            GraphQL
                        </p>
                    </p>
                </div>
                <div class='column'>
                    <p>
                        <h4>
                            Databases
                        </h4>
                        <p>
                            MySQL
                        </p>
                        <p>
                            MongoDB
                        </p>
                    </p>
                </div>
            </div>
            <div>
                <a className='icon3' href="./Resume Evelyn_Frech.pdf">
                    <FontAwesomeIcon icon={faFileCircleCheck} />
                <h5>Download Resume</h5>
                </a>
            </div>
        </section>
    )
}

export default Resume;