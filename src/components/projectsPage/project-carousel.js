import React, { Component, useState } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import BusyParent from './projectDetails/busyParent';
import BrickBreaker from './projectDetails/brickBreacker';
import WeatherDashboard from './projectDetails/weatherDashboard';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div className='codingProjects'>
          <CardGroup>
            {/* {Project: 1} */}
            <Card style={{marginRight: '5px', marginLeft: '5px', backgroundColor: 'black', borderRadius: '35px', opacity: '.9', height: '700px'}}>
                <center>
              <Card.Title style={{color: 'white', marginTop:'30px'}}><h3 className='title'>Calendar Planner</h3></Card.Title>
                </center>
              <hr style={{width:'100%', backgroundColor:'red'}}></hr>
              <Card.Title style={{color: '#fff', height: '225px', marginTop:'10px', marginRight:"15px", marginLeft: '15px', background: 'url(./images/javascript/calendar.jpg) center / cover'}} className="card-text"></Card.Title>
              <hr style={{width:'100%', backgroundColor:'red', marginTop: '15px'}}></hr>
              <BusyParent></BusyParent>
            </Card>

            {/* {Project: 2} */}
            <Card style={{marginRight: '5px', marginLeft: '5px', backgroundColor: 'black', borderRadius: '35px', opacity: '.9', height: '700px'}}>
                <center>
              <Card.Title style={{color: 'white', marginTop:'30px'}}><h3 className='title'>Brick Breaker</h3></Card.Title>
                </center>
              <hr style={{width:'100%', backgroundColor:'red'}}></hr>
              <Card.Title style={{color: '#fff', height: '225px', marginTop:'10px', marginRight:"35px", marginLeft: '35px', background: 'url(./images/javascript/2d.jpg) center / cover'}} className="card-text"></Card.Title>
              <hr style={{width:'100%', backgroundColor:'red', marginTop: '15px'}}></hr>
              <BrickBreaker></BrickBreaker>
            </Card>

            {/* {Project: 3} */}
            <Card style={{marginRight: '5px', marginLeft: '5px', backgroundColor: 'black', borderRadius: '35px', opacity: '.9', height: '700px'}}>
                <center>
              <Card.Title style={{color: 'white', marginTop:'30px'}}><h3 className='title'>Weather Dashboard</h3></Card.Title>
                </center>
              <hr style={{width:'100%', backgroundColor:'red'}}></hr>
              <Card.Title style={{color: '#fff', height: '225px', marginTop:'10px', marginRight:"35px", marginLeft: '35px', background: 'url(./images/javascript/weatherBoard.jpg) center / cover'}} className="card-text"></Card.Title>
              <hr style={{width:'100%', backgroundColor:'red', marginTop: '15px'}}></hr>
              <WeatherDashboard></WeatherDashboard>
            </Card>
          </CardGroup>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className='codingProjects'>
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className='codingProjects'>
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      )
    } 
  }


  render() {
    return(
      <div className = 'menuItems' style={{ paddingTop: '85px' }}>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple style={{ backgroundColor: '#333', height: '75px' }}>
          <Tab style={{ color: 'white', display: 'block' }}>Javascript</Tab>
          <Tab style={{ color: 'white', display: 'block' }}>NodeJS</Tab>
          <Tab style={{ color: 'white', display: 'block' }}>React</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;




