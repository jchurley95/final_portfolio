import React, { Component } from 'react';
import SocialMedia from './SocialMedia';

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <a name="Contact"></a>
                <h1>Contact Me</h1>
                    <h3>Phone: 404-285-6677</h3>
                    <h3>Email: jchurley95@gmail.com</h3>
                <SocialMedia />
            </div>
        );
    }
}

export default Contact;