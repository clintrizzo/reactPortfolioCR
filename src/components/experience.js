import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={8}>
          <p className="startTime">{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 className='jobName' style={{marginTop:'0px', fontSize:'25px'}}>{this.props.jobName}</h4>
          <p className="jobDescription">{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
