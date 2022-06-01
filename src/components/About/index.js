import React from 'react';

function About() {
    return (
        <section>
            <div class="flex-container">
                <div class="flex-left" id="about">
                    <img class="bio-image" src="./asset/images/bio_pic.png" alt="bio picture"/>
                </div>
                <div class="flex-right">
                    <p>I'm Evelyn Frech. Christian. Data driven marketer. Currently learning the amazing world of programming. Languages learned so far: HTML, CSS and Javascript.
                        <br />
                        In my free time I like to spend time with my family, read books (currently reading Dune by Frank Herbert) and enjoy the sun during an afternoon walk.</p>
                </div>
            </div>
        </section>
    )
}

export default About;