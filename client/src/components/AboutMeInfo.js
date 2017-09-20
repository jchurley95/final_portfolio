import React, { Component } from 'react';

class AboutMeInfo extends Component {

    render() {
        return (
            <div className="about-me-transitioning-info">
                <p className={this.props.aboutMeData.className}>{this.props.aboutMeData.info}</p>
            </div>
        );
    }
}

export default AboutMeInfo