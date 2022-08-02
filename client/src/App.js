import React, { Component } from 'react';
import './App.css'
import './components/navbar/navbar.css';
import {Link} from 'react-scroll'
import Landing from './components/landingPage/landingpage';
import Resume from './components/resumePage/resume';
import Projects from './components/projectsPage/project-carousel';
// import Contact from './components/contact';
import Footer from './components/footer/footer'

// import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>

          <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
          <li><Link  to="about"  smooth={true} style={{color: 'white'}}>Clint Rizzo</Link></li>
          <li><Link  to="resume"  smooth={true}>Resume</Link></li>
          <li><Link  to="projects"  smooth={true}>Projects</Link></li>
          {/* <li><Link  to="contactMe" spy={true} smooth={true}>Contact Me</Link></li> */}

          </ul>

          </nav>
        </header>
        <div id="about"><Landing></Landing></div>
        <div id="resume"><Resume></Resume></div>
        <div id="projects"><Projects></Projects></div>
        {/* <div id="contactMe"><Contact></Contact></div> */}
        <Footer />
      </div>
    );
  }
}

export default App;