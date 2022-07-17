import React, { Component } from 'react';

import '../src/components/navbar/navbar.css';
import './App.css'
import {Link} from 'react-scroll'
import Landing from './components/landingpage';
import Resume from './components/resume';
import Projects from './components/projects';

// import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>

          <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
          <a><Link activeclass="active" to="about" spy={true} smooth={true}>Home</Link></a>
          <a><Link  to="resume" spy={true} smooth={true}>About</Link></a>
          <a><Link  to="projects" spy={true} smooth={true}>Contact</Link></a>
          <a><Link  to="contactMe" spy={true} smooth={true}>Service</Link></a>
          </ul>

          </nav>
        </header>
        <div id="about"><Landing></Landing></div>
        <div id="resume"><Resume></Resume></div>
        <div id="projects"><Projects></Projects></div>
        <div id="contactMe">Test1</div>
      </div>
    );
  }
}

export default App;