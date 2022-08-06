import React, { Component } from 'react';
import './App.css'
import './components/navbar/navbar.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

// import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;