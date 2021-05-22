import React, { Component } from 'react';
import { Grid} from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '500px', margin: 'auto'}}>
        <Grid className="landing-grid">
            <div className="banner-text">
              <h1>Clinton Rizzo <br></br> Full Stack Web Developer</h1>
              <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | mySQL | NodeJS | Express | MongoDB | React</p>

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
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="https://www.youtube.com/channel/UCpARYFoliOIr-UGpIT-4ibQ/videos" rel="noopener noreferrer" target="_blank">
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
