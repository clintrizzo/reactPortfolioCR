import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p className='schoolDate'>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h5 className='schoolName' style={{marginTop:'0px'}}>{this.props.schoolName}</h5>
          <p className='schoolInfo'>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
