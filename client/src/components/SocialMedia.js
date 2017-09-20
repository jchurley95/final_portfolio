import React, { Component } from 'react';
import ghub from '../Images/github_icon.png';
import insta from '../Images/instagram_icon.png';
import linked from '../Images/linkedin_icon.png';

class SocialMedia extends Component {
    render () {
        return (
            <div className="social-media-icons-container">
                <a href="https://github.com/jchurley95" target="_blank"><img className="icon github-icon" src={ghub} /></a>
                <a href="https://www.instagram.com/screwloosecarpentry/" target="_blank"><img className="icon instagram-icon" src={insta} /></a>
                <a href="https://www.linkedin.com/in/joey-hurley/" target="_blank"><img className="icon linkedin-icon" src={linked} /></a>
            </div>
        );
    }
}

export default SocialMedia;