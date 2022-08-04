import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

// imports for project details
import BusyParent from './projectDetails/busyParent';
import BrickBreaker from './projectDetails/brickBreacker';
import WeatherDashboard from './projectDetails/weatherDashboard';
import EmployeeTracker from './projectDetails/employeeTracker';
import ReadmeGenerator from './projectDetails/readMeGenerator';
import TeamProfile from './projectDetails/teamProfile';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div className='codingProjects'>
          <CardGroup id='fullCard'>
            {/* {Project: 1} */}
            <Card style={{marginRight: '5px', marginLeft: '5px', backgroundColor: 'black', borderRadius: '35px', opacity: '.9', height: '700px'}}>
                <center>
              <Card.Title style={{color: 'white', marginTop:'30px'}}><h3 className='title' id='projectName'>Calendar Planner</h3></Card.Title>
                </center>
              <Card.Title style={{color: '#fff', height: '225px', marginTop:'10px', marginRight:"15px", marginLeft: '15px'}} id='photoCalendar' className="card-text"></Card.Title>
              <center>
              <hr style={{width:'93%', backgroundColor:'red', marginTop: '15px'}}></hr>
              </center>              
              <BusyParent></BusyParent>
            </Card>

            {/* {Project: 2} */}
            <Card style={{marginRight: '5px', marginLeft: '5px', backgroundColor: 'black', borderRadius: '35px', opacity: '.9', height: '700px'}}>
                <center>
              <Card.Title style={{color: 'white', marginTop:'30px'}}><h3 className='title' id='projectName'>Brick Breaker</h3></Card.Title>
                </center>
              <Card.Title style={{color: '#fff', height: '225px', marginTop:'10px', marginRight:"35px", marginLeft: '35px'}} id='brickBreaker' className="card-text"></Card.Title>
              <center>
              <hr style={{width:'93%', backgroundColor:'red', marginTop: '15px'}}></hr>
              </center>
              <BrickBreaker></BrickBreaker>
            </Card>

            {/* {Project: 3} */}
            <Card style={{marginRight: '5px', marginLeft: '5px', backgroundColor: 'black', borderRadius: '35px', opacity: '.9', height: '700px'}}>
                <center>
              <Card.Title style={{color: 'white', marginTop:'30px'}}><h3 className='title' id='projectName'>Weather Board</h3></Card.Title>
                </center>
              <Card.Title style={{color: '#fff', height: '225px', marginTop:'10px', marginRight:"35px", marginLeft: '35px'}} id='weather' className="card-text"></Card.Title>
              <center>
              <hr style={{width:'93%', backgroundColor:'red', marginTop: '15px'}}></hr>
              </center>              <WeatherDashboard></WeatherDashboard>
            </Card>
          </CardGroup>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className='codingProjects'>
          <CardGroup id='fullCard'>
            {/* {Project: 1} */}
            <Card style={{marginRight: '5px', marginLeft: '5px', backgroundColor: 'black', borderRadius: '35px', opacity: '.9', height: '700px'}}>
                <center>
              <Card.Title style={{color: 'white', marginTop:'30px'}}><h3 className='title' id='projectName'>Employee Tracker</h3></Card.Title>
                </center>
              <Card.Title style={{color: '#fff', height: '225px', marginTop:'10px', marginRight:"35px", marginLeft: '35px'}} id='employeeTracker' className="card-text"></Card.Title>
              <center>
              <hr style={{width:'93%', backgroundColor:'red', marginTop: '15px'}}></hr>
              </center>              
              <EmployeeTracker></EmployeeTracker>
            </Card>

            {/* {Project: 2} */}
            <Card style={{marginRight: '5px', marginLeft: '5px', backgroundColor: 'black', borderRadius: '35px', opacity: '.9', height: '700px'}}>
                <center>
              <Card.Title style={{color: 'white', marginTop:'30px'}}><h3 className='title' id='projectName'>Readme Generator</h3></Card.Title>
                </center>
              <Card.Title style={{color: '#fff', height: '225px', marginTop:'10px', marginRight:"35px", marginLeft: '35px'}} id='readMe' className="card-text"></Card.Title>
              <center>
              <hr style={{width:'93%', backgroundColor:'red', marginTop: '15px'}}></hr>
              </center>
              <ReadmeGenerator></ReadmeGenerator>
            </Card>

            {/* {Project: 3} */}
            <Card style={{marginRight: '5px', marginLeft: '5px', backgroundColor: 'black', borderRadius: '35px', opacity: '.9', height: '700px'}}>
                <center>
              <Card.Title style={{color: 'white', marginTop:'30px'}}><h3 className='title' id='projectName'>Team Profile</h3></Card.Title>
                </center>
              <Card.Title style={{color: '#fff', height: '225px', marginTop:'10px', marginRight:"35px", marginLeft: '35px'}} id='teamProfile' className="card-text"></Card.Title>
              <center>
              <hr style={{width:'93%', backgroundColor:'red', marginTop: '15px'}}></hr>
              </center>              
              <TeamProfile></TeamProfile>
            </Card>
          </CardGroup>
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




