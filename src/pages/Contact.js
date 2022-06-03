import React from 'react';

function Contact() {
    return (
        <section>
            <div class="flex-container">
                <div class="flex-left" id="contact">
                    CONTACT ME
                </div>
                <div className="flex-right contact-form">
                    <form>
                        <ul>
                            <li className='half'>
                                <input className='contact-input' type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input className='contact-input' type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input className='contact-input' placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default Contact;