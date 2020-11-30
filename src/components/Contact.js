import React from 'react';
import './style.css';

function Contact() {
    return (
        <div className="head-contact">
            <div className="row">
                <div>
                    <h2 className="contact-title">Get in Touch</h2>
                    <hr class="hr-1" />
                </div>

                <div>
                    <div>
                        <div>
                            <textarea className="contact-message" name="message" cols="120" rows="9" placeholder="Enter Message"></textarea>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div>
                            <input className="info-name" name="name" id="name" type="text" placeholder="Enter your name" />
                        </div>
                        <div>
                            <input className="info-email" name="email" id="email" type="email" placeholder="Enter email address" />
                        </div>
                    </div>
                    <div className="contact-sub">
                        <div>
                            <input className="sub-input" name="subject" id="subject" type="text" placeholder="Enter Subject" />
                        </div>
                    </div>
                </div>
                <button className="contact-btn" type="submit">Send</button>

            </div>
        </div>
    )
}

export default Contact;
