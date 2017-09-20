import React, { Component } from 'react';
import SocialMedia from './SocialMedia';

class Splash extends Component {
    render() {
        return (
            <div className="splash-container">
                <div className="splash-container-circle">
                    <div className="splash-container-content">
                        <h1>Joey Hurley</h1>
                        <div className="splash-container-content-full-stack">
                            <h2>Full-Stack Web Developer</h2>
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Splash;