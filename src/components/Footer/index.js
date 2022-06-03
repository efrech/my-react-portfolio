import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {   
    return (
        <footer>
        <hr/>
        <a className='icon' href="https://www.facebook.com/evelyn.frech">
        <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a className='icon' href="https://www.linkedin.com/in/evelynfrech/">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className='icon' href="https://github.com/efrech">
        <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </footer>
    )
}

export default Footer;