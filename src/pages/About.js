import React from 'react';
import BioPic from '../assets/images/bio_pic.png'

function About() {
    return (
        <section>
            <div class="flex-container">
                <div class="flex-left">
                    <img class="bio-image" src={BioPic} alt="bio picture"/>
                </div>
                <div class="flex-right">
                    <p>I'm Evelyn Frech, full stack web developer 
                        <br />
                        In my free time I like to spend time with my family, read books (currently reading Dune by Frank Herbert) and enjoy the sun during an afternoon walk.</p>
                </div>
            </div>
        </section>
    )
}

export default About;