import React, { Component } from 'react';

class GlobalNav extends Component {
    render () {
        return (
            <div className="GlobalNav-container">
                    <a href="#About">About Me</a>
                    <a href="#Projects">My Apps</a>
                    <a href="#Contact">Contact Me</a>

            </div>
        );
    }
}

export default GlobalNav;