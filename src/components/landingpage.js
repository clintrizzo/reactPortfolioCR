import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import Footer from './footer/footer'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
            <div className="banner-text">
              <h1>Clinton Rizzo</h1>
              <hr style={{width:'60%', color:'red'}}></hr>
              <h3 className='title'>Full Stack Web Developer</h3>
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
                  <a href="https://www.youtube.com/channel/UCpARYFoliOIr-UGpIT-4ibQ" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-youtube-square" aria-hidden="true" />
                    <div className='hiddenText1'>Youtube</div>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/clinton-rizzo-79b67b1b6/" rel="noopener noreferrer" target="_blank">
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
        <Footer />
      </div>
    )
  }
}

export default Landing;
