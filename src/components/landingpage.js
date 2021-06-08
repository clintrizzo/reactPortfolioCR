import React, { Component } from 'react';
import { Grid} from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '500px', margin: 'auto'}}>
        <Grid className="landing-grid">
            <div className="banner-text">
              <img src="./images/me.jpg" alt ="me" className="clint"></img> <br></br>
              <h2> Full Stack Web Developer</h2>
              <hr/>
            <p className="languages">HTML/CSS | Bootstrap | JavaScript | mySQL | NodeJS | Express | MongoDB | React</p>
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
          <a href="https://www.youtube.com/channel/UCpARYFoliOIr-UGpIT-4ibQ/videos" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>
        </div>
        <br></br>
        <br></br>
            </div>
        </Grid>
      </div>
    )
  }
}

export default Landing;
