import React, { Component } from 'react';
import { Grid } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
            <div className="banner-text">
              <h1>Clinton Rizzo</h1>
              <hr style={{width:'50%'}}></hr>
              <h2 className='title'>Full Stack Web Developer</h2>
              <hr/>
              <p className='languages'>HTML/CSS | Bootstrap | JavaScript | MySQL | NodeJS | Express | MongoDB | React</p>
              <hr style={{paddingBottom:'20px', width:'50%'}}/>
                <div className="social-links">
                {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/clinton-rizzo-79b67b1b6/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                {/* Github */}
                  <a href="https://github.com/clintrizzo" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>
                {/* Instagram */}
                  <a href="https://www.instagram.com/clintrizzo/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                {/* Youtube */}
                  <a href="https://www.youtube.com/channel/UCpARYFoliOIr-UGpIT-4ibQ" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-youtube-square" aria-hidden="true" />
                  </a>

                </div>
            </div>
        </Grid>
      </div>
    )
  }
}

export default Landing;
