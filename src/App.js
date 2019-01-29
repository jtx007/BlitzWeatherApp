import React, { Component } from 'react';
import ForecastPanel from './components/forecastPanel'
import githubIcon from './githubicon.png'
import mediumIcon from './mediumicon.png'
import linkedinIcon from './linkedinicon.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <p className='logo'>BLITZ</p>
        <ForecastPanel/>
        <div className="header-navbar">
          <a href="https://github.com/jtx007/weatherApp"><img className="navbar-icon" alt="github" src={githubIcon} /></a>
          <a href="https://medium.com/@jamesjacobthomas7"><img className="navbar-icon" alt="medium" src={mediumIcon} /></a>
          <a href="https://www.linkedin.com/in/james-thomas007/"><img className="navbar-icon" alt="linkedin" src={linkedinIcon}/></a>
          <a href="https://github.com/jtx007/weatherApp">Github</a>
          <a href="https://medium.com/@jamesjacobthomas7">Medium</a>
          <a href="https://www.linkedin.com/in/james-thomas007/">Linkedin</a>
        </div>

      </div>
    );
  }
}

export default App;
