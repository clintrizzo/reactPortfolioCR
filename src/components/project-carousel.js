import React, { Component, useId } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };

  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
      <CarouselProvider
        naturalSlideWidth
        naturalSlideHeight
        totalSlides={3}
      >
        <Slider style={{ width: '600px', height: '600px', marginTop: '-25px'}}s>
          <Slide index={0} className='projects'>
          <img src="./images/javascript/calendar.jpg" style={{ height: '350px', width: '500px', margin: '10px'}}></img>
          <p className='description' id='text'>We built this app for the intention of parents who have a busy life style that they could schedule their work week, personal life, and childrens schedule all in one place. For families that like to plan in advance the app allows you to select days weeks away and still be able to put in a "to do" item. The user will also have updated weather depending on the location they are at when they open the calendar.</p>
          </Slide>
          <Slide index={1} className='projects'>Test for javascript</Slide>
          <Slide index={2} className='projects'>Test for javascript</Slide>
        </Slider>

      </CarouselProvider>
          {/* Project 1 */}

          {/* Project 2 */}

          {/* Project 3 */}

        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
                <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>Test for node</Slide>
          <Slide index={1}>Test for node</Slide>
          <Slide index={2}>Test for node</Slide>
        </Slider>
        {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>
          {/* Project 1 */}

          {/* Project 2 */}

          {/* Project 3 */}

        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
                <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>Test for react</Slide>
          <Slide index={1}>Test for react</Slide>
          <Slide index={2}>Test for react</Slide>
        </Slider>
        {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>
          {/* Project 1 */}

          {/* Project 2 */}

          {/* Project 3 */}

        </div>
      )
    } 
  }


  render() {
    return(
      <div className = 'menuItems' style={{ paddingTop: '75px' }}>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple style={{ backgroundColor: '#333', height: '75px' }}>
          <Tab style={{ color: 'white', display: 'block' }}>Javascript</Tab>
          <Tab style={{ color: 'white', display: 'block' }}>NodeJS</Tab>
          <Tab style={{ color: 'white', display: 'block' }}>React</Tab>
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
