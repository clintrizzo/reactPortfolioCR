import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Landing from '../landingPage/landingpage';
import Resume from '../resumePage/resume';
import Projects from '../projectsPage/project-carousel';
// import Contact from './components/contact';

function BasicExample() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand href="#resume">Clinton Rizzo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <NavDropdown title="Social Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://docs.google.com/document/d/1qoSVfiUBKsaPGNi_9KM9QEsKNl-7HqC2UACmeYMM2XQ/edit?usp=sharings" rel="noopener noreferrer" target="_blank"><i className="fa fa-folder-open" aria-hidden="true" /> Resume</NavDropdown.Item>

              <NavDropdown.Item href="https://github.com/clintrizzo" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square" aria-hidden="true"/> Github</NavDropdown.Item>

              <NavDropdown.Item href="https://www.youtube.com/channel/UCpARYFoliOIr-UGpIT-4ibQ/videos" rel="noopener noreferrer" target="_blank"><i className="fa fa-youtube-square" aria-hidden="true" /> YouTube</NavDropdown.Item>

              <NavDropdown.Item href="https://www.linkedin.com/in/clinton-rizzo/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true" /> LinkedIn</NavDropdown.Item>

              <NavDropdown.Item href="https://www.instagram.com/clintrizzo/" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram" aria-hidden="true" /> Instagram</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* <div id="about"><Landing></Landing></div> */}
    <div id="resume"><Resume></Resume></div>
    <div id="projects"><Projects></Projects></div>
    {/* <div id="contactMe"><Contact></Contact></div> */}
    </div>
  );
}

export default BasicExample;