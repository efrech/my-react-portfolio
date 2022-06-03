import React from 'react';
import AboutImage from '../components/AboutImage';

function About() {
    return (
        <section>
            <div class="flex-container">
                <div class="flex-left">
                    <AboutImage />
                </div>
                <div class="flex-right">
                    <h2>Evelyn Frech</h2>
                    <h3>Full stack web developer</h3>
                    <br></br>
                    <p>Hi! I'm Evelyn and I recently graduated from a coding bootcamp. Before becoming a full stack web developer, I worked as a marketing manager in the healthcare industry. I decided to shift gears in my carreer because web development allows me to continually develop and bring amazing applications to life. It challenges my creativity in ways I didn't imagine before.</p>
                    <p>In my free time I like reading books, spend time with my family and enjoy the sun during an afternoon walk.</p>
                </div>
            </div>
        </section>
    )
}

export default About;