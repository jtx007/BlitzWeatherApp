import React, { Component } from 'react';
import WeatherPanel from './components/weatherPanel'
import githubIcon from './assets/githubicon.png'
import mediumIcon from './assets/mediumicon.png'
import linkedinIcon from './assets/linkedinicon.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <p className='logo'>BLITZ</p>
        <WeatherPanel/>
        <div className="header-navbar">
          <a href="https://github.com/jtx007/weatherApp"><img className="navbar-icon" alt="github" src={githubIcon} /></a>
          <a href="https://medium.com/@jamesjacobthomas7"><img className="navbar-icon" alt="medium" src={mediumIcon} /></a>
          <a href="https://www.linkedin.com/in/james-thomas007/"><img className="navbar-icon" alt="linkedin" src={linkedinIcon}/></a>
          
        </div>

      </div>
    );
  }
}

export default App;
