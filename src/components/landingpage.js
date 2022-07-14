import React, { Component } from 'react';
import Footer from './footer/footer'
import Resume from './resume';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
            <div className="banner-text">
              <h1>Clinton Rizzo</h1>
              <hr style={{width:'75%', color:'red'}}></hr>
              <center>
              <h3 className='fullStack'>Full Stack Web Developer</h3>
              <p className='landingStory' style={{color:'white'}}>Web Developer with a background in Customer Service. Recognized as proactive, resourceful, and persistent problem-solver. Excellent communicator with effective client relationship building skills. Earned a Certificate in Full-Stack Web Development from the University of CA-Irvine with the goal of becoming a skilled Web Developer. 
              </p>
              </center>
              <h5 className='title'>HTML/CSS | Bootstrap | JavaScript | MySQL | NodeJS | Express | MongoDB | React</h5>
              <hr/>
              <br></br>
                <div className="social-links">
                  {/* Github */}
                  <a href="https://github.com/clintrizzo" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                    <div className='hiddenText0'>Github</div>
                  </a>
                  {/* Youtube */}
                  <a href="https://www.youtube.com/channel/UCpARYFoliOIr-UGpIT-4ibQ/videos" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-youtube-square" aria-hidden="true" />
                    <div className='hiddenText1'>Youtube</div>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/clinton-rizzo/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    <div className='hiddenText2'>Linkedin</div>
                  </a>
                  {/* Instagram */}
                  <a href="https://www.instagram.com/clintrizzo/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-instagram" aria-hidden="true" />
                    <div className='hiddenText3'>Instagram</div>
                  </a>
                  {/*resume*/}
                  <a href="https://docs.google.com/document/d/1qoSVfiUBKsaPGNi_9KM9QEsKNl-7HqC2UACmeYMM2XQ/edit?usp=sharing" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-folder-open" aria-hidden="true" />
                    <div className='hiddenText4'>Resume</div>
                  </a>
                </div>
            </div>
        </Grid>
        <Resume></Resume>
        <br></br>
        <Footer />
      </div>
    )
  }
}


export default Landing;
