import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };

  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={10} style={{minWidth: '450', marginRight:'75px'}}>
            <CardTitle style={{color: '#fff', height: '180px', marginTop:"5px", background: 'url(./images/javascript/calendar.jpg) center / cover'}}></CardTitle>
            <CardText>
              <h6><strong>Busy Parent Scheduler</strong></h6>
              We built this app for the intention of parents who have a busy life style that they could schedule their work week, personal life, and childrens schedule all in one place. For families that like to plan in advance the app allows you to select days weeks away and still be able to put in a "to do" item. The user will also have updated weather depending on the location they are at when they open the calendar.
            </CardText>
            <CardActions border>
              <center>
              <Button><a href="https://github.com/clintrizzo/BusyParentScheduler" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>GITHUB</a></Button>
              <Button><a href="https://kjwallac.github.io/BusyParentScheduler/calendar.html" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <br></br>
          {/* Project 2 */}
          <Card shadow={10} style={{minWidth: '450', marginRight:'75px'}}>
            <CardTitle style={{color: '#fff', height: '180px', marginTop:"5px", background: 'url(./images/javascript/2d.jpg) center / cover'}} ></CardTitle>
            <CardText>
            <h6><strong>Brick Breaker</strong></h6>
            Using the left and right directional pad you can move the bottom paddle to redirect the ball back to hitting the blocks. Goal of the game is to detroy all the paddles at the top to win the game. User has three lives if the ball hits below the bottom paddle the user loses a life. Future updates for this game is to add multpile levels to the game. Have the ball be launched when the user hits the enter button.
            </CardText>
            <CardActions border>
              <center>
              <Button colored><a href="https://github.com/clintrizzo/2D-game" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>GITHUB</a></Button>
              <Button colored><a href="https://www.youtube.com/watch?v=P7NGOYOvt8Y" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <br></br>
          {/* Project 3 */}
          <Card shadow={10} style={{minWidth: '450', marginRight:'75px'}}>
            <CardTitle style={{color: '#fff', height: '180px', marginTop:"5px", background: 'url(./images/javascript/weatherBoard.jpg) center / cover'}} ></CardTitle>
            <CardText>
            <h6><strong>Weather Board</strong></h6>
            I built this project to display the weather for a city. Setting the current forecast to a card from boot strap and adding the five day projected weather on another card from bootstrap. In the current weather display it shows the current weather conditions with an appended image. I also appened the temp, humidity, and wind speed. In the search bar it will display the previous cities that you have searched.
            </CardText>
            <CardActions border>
              <center>
              <Button colored><a href="https://github.com/clintrizzo/Weatherboard" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>GITHUB</a></Button>
              <Button colored><a href="https://clintrizzo.github.io/Weatherboard/" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <br></br>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={10} style={{minWidth: '450', marginRight:'75x'}}>
            <CardTitle style={{color: '#fff', height: '180px', background: 'url(./images/mySQL/readMe.jpg) center / cover'}} ></CardTitle>
            <CardText>
            <h6><strong>ReadMe Generator</strong></h6>
              Application was built to create a readme file. User can start program by running the terminal with "node server.js" then they will be prompted to answer a few questions. Once questions are answered a readme file will be created
            </CardText>
            <CardActions border>
              <center>
              <Button colored><a href="https://github.com/clintrizzo/READme-generator" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>GITHUB</a></Button>
              <Button colored><a href="https://www.youtube.com/watch?v=7fdDhJHIG8s" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <br></br>
          {/* Project 2 */}
          <Card shadow={10} style={{minWidth: '450', marginRight:'75px'}}>
            <CardTitle style={{color: '#fff', height: '180px', background: 'url(./images/mySQL/employeeTracker.jpg) center / cover'}} ></CardTitle>
            <CardText>
            <h6><strong>Employee Tracker</strong></h6>
              Application was built so user can update an employee field, an active department, and include salaries. To run this program user needs to go into the terminal and run "node server.js". 
            </CardText>
            <CardActions border>
              <center>
              <Button colored><a href="https://github.com/clintrizzo/employee-tracker-database" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>GITHUB</a></Button>
              <Button colored><a href="https://www.youtube.com/watch?v=ahixbcV90wQ" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        <br></br>
          {/* Project 3 */}
          <Card shadow={10} style={{minWidth: '450', marginRight:'75px'}}>
            <CardTitle style={{color: '#fff', height: '180px', background: 'url(./images/mySQL/teamProfile.jpg) center / cover'}} ></CardTitle>
            <CardText>
            <h6><strong>Team Profile</strong></h6>
            This application was built using node.js, user can start the program with "node index.js". The user will then be prompted to answer questions based on an employee that is working at their place of business.
            </CardText>
            <CardActions border>
              <center>
              <Button colored><a href="https://github.com/clintrizzo/teamprofile" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>GITHUB</a></Button>
              <Button colored><a href="https://www.youtube.com/watch?v=7WysBxSLzec" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <br></br>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={10} style={{minWidth: '450', marginRight:'75px'}}>
            <CardTitle style={{color: '#fff', height: '180px', background: 'url(./images/react/userDirectory.jpg) center / cover'}} ></CardTitle>
            <CardText>
            <h6><strong>User Directory</strong></h6>
            This is a employee directory created with React. The application's UI is broken up into components, manages component state, and responds to user events.            </CardText>
            <CardActions border>
              <center>
              <Button colored><a href="https://github.com/clintrizzo/user-directory2" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>GITHUB</a></Button>
              <Button colored><a href="https://user--directory2.herokuapp.com/" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        <br></br>
          {/* Project 2 */}
          <Card shadow={10} style={{minWidth: '450', marginRight:'75px'}}>
            <CardTitle style={{color: '#fff', height: '180px', background: 'url(./images/react/googleSearch.jpg) center / cover'}} ></CardTitle>
            <CardText>
            <h6><strong>Google Book Search</strong></h6>
            This app construction used React components, helper/util functions, and utilized React lifecycle methods to query and display books based on user searches.

            </CardText>
            <CardActions border>
              <center>
              <Button colored><a href="https://github.com/clintrizzo/google-book-search" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>GITHUB</a></Button>
              <Button colored><a href="https://booksearchgooglesssss.herokuapp.com/" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <br></br>
          {/* Project 3 */}
          <Card shadow={10} style={{minWidth: '450', marginRight:'75px'}}>
            <CardTitle style={{color: '#fff', height: '180px', background: 'url(./images/react/joyHunter.jpg) center / cover'}} ></CardTitle>
            <CardText>
            <h6><strong>Joy Hunter</strong></h6>
            Using react and mySQL we created this website to help the user find different paintball and airsoft games. For this project I did the frontend work for the pages.
            </CardText>
            <CardActions border>
              <center>
              <Button colored><a href="https://github.com/clintrizzo/joyhunter" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>GITHUB</a></Button>
              <Button colored><a href="https://joyhunter2.herokuapp.com/" rel="noopener noreferrer" target="_blank" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <br></br>
        </div>
      )
    } 
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple style={{paddingLeft:'20px', marginLeft:'-15px', marginTop:'5px'}}>
          <Tab>Javascript</Tab>
          <Tab>NodeJS</Tab>
          <Tab>React</Tab>
        </Tabs>


          <Grid>
            <Cell col={8}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
