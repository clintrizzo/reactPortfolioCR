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
          <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', marginTop:"5px", background: 'url(./images/javascript/calendar.jpg) center / cover'}}></CardTitle>
            <CardText>
              <h6><strong>Busy Parent Scheduler</strong></h6>
              We built this app for the intention of parents who have a busy life style that they could schedule their work week, personal life, and childrens schedule all in one place. For families that like to plan in advance the app allows you to select days weeks away and still be able to put in a "to do" item. The user will also have updated weather depending on the location they are at when they open the calendar.
            </CardText>
            <CardActions border>
              <center>
              <Button><a href="https://github.com/clintrizzo/BusyParentScheduler" style={{color:"black"}}>GITHUB</a></Button>
              <Button><a href="https://kjwallac.github.io/BusyParentScheduler/calendar.html" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', marginTop:"5px", background: 'url(./images/javascript/2d.jpg) center / cover'}} ></CardTitle>
            <CardText>
            <h6><strong>Brick Breaker</strong></h6>
            Using the left and right directional pad you can move the bottom paddle to redirect the ball back to hitting the blocks. Goal of the game is to detroy all the paddles at the top to win the game. User has three lives if the ball hits below the bottom paddle the user loses a life. Future updates for this game is to add multpile levels to the game. Have the ball be launched when the user hits the enter button.
            </CardText>
            <CardActions border>
              <center>
              <Button colored><a href="https://github.com/clintrizzo/2D-game" style={{color:"black"}}>GITHUB</a></Button>
              <Button colored><a href="https://www.youtube.com/watch?v=P7NGOYOvt8Y" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', marginTop:"5px", background: 'url(./images/javascript/weatherBoard.jpg) center / cover'}} ></CardTitle>
            <CardText>
            <h6><strong>Weather Board</strong></h6>
            I built this project to display the weather for a city. Setting the current forecast to a card from boot strap and adding the five day projected weather on another card from bootstrap. In the current weather display it shows the current weather conditions with an appended image. I also appened the temp, humidity, and wind speed. In the search bar it will display the previous cities that you have searched.
            </CardText>
            <CardActions border>
              <center>
              <Button colored><a href="https://github.com/clintrizzo/Weatherboard" style={{color:"black"}}>GITHUB</a></Button>
              <Button colored><a href="https://clintrizzo.github.io/Weatherboard/" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(./images/mySQL/readMe.jpg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <center>
              <Button colored><a href="https://github.com/clintrizzo/Weatherboard" style={{color:"black"}}>GITHUB</a></Button>
              <Button colored><a href="https://clintrizzo.github.io/Weatherboard/" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <center>
              <Button colored><a href="https://github.com/clintrizzo/Weatherboard" style={{color:"black"}}>GITHUB</a></Button>
              <Button colored><a href="https://clintrizzo.github.io/Weatherboard/" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <center>
              <Button colored><a href="https://github.com/clintrizzo/Weatherboard" style={{color:"black"}}>GITHUB</a></Button>
              <Button colored><a href="https://clintrizzo.github.io/Weatherboard/" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <center>
              <Button colored><a href="https://github.com/clintrizzo/Weatherboard" style={{color:"black"}}>GITHUB</a></Button>
              <Button colored><a href="https://clintrizzo.github.io/Weatherboard/" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <center>
              <Button colored><a href="https://github.com/clintrizzo/Weatherboard" style={{color:"black"}}>GITHUB</a></Button>
              <Button colored><a href="https://clintrizzo.github.io/Weatherboard/" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <center>
              <Button colored><a href="https://github.com/clintrizzo/Weatherboard" style={{color:"black"}}>GITHUB</a></Button>
              <Button colored><a href="https://clintrizzo.github.io/Weatherboard/" style={{color:"black"}}>LIVE DEMO</a></Button>
              </center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } 
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Javascript</Tab>
          <Tab>mySQL/NodeJS</Tab>
          <Tab>React</Tab>
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
