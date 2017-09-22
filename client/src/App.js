import React, { Component } from 'react';
import './App.css';
import Splash from './components/Splash';
import AboutMe from './components/AboutMe';
import ProjectList from './components/ProjectList';
import GlobalNav from './components/GlobalNav';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';

class App extends Component {
  render() {
    return (
      <div className="app-body">
        <GlobalNav />
        <Splash />
        <AboutMe />
        <ProjectList />
        <Contact />
      </div>
    );
  }
}

export default App;
