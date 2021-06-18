import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Footer from './footer/footer'

class Resume extends Component {
  render() {
    return(
      <div className="resumeBack">
        <Grid>
          <Cell col={4}>
            <h2 className='resumeName' style={{paddingTop: '15px'}}>Clinton Rizzo</h2>
            <img src="./images/me.jpg" alt="clintRizzo" className='me'></img>
            <h3 style={{color: 'black'}}>Full Stack Web Developer</h3>
            <hr style={{borderTop: '3px solid #e22947', width: '65%'}}/>
            <p className='developerStory'>Web Developer with a background in Customer Service. Recognized as proactive, resourceful,
                and persistent problem-solver. Excellent communicator with effective client relationship
                building skills. Graduate of (Trilogy) through (University of California Irvine).
            </p>
            <hr style={{borderTop: '3px solid #e22947', width: '65%'}}/>
            <h5 className='info'>Address:</h5>
            <p className='answer'>Corona, California</p>
            <h5 className='info'>Phone:</h5>
            <p className='answer'>(951) 288-2247</p>
            <h5 className='info'>Email:</h5>
            <p className='answer'>clint.rizzo92@gmail.com</p>
          </Cell>
          <Cell className="resume-right-col" col={8} style={{borderRadius:"50px"}}>
            <h2>Languages:</h2>
            <p className='languages'>HTML/CSS | Bootstrap | JavaScript | MySQL | NodeJS | Express | MongoDB | React</p>

            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Education:</h2>
            <Education
              startYear={2007}
              endYear={2011}
              schoolName="Santiago High School"
              schoolDescription="High School Diploma"
            />
            <Education
                 startYear={2020}
                 endYear={2021}
                 schoolName="Trilogy @ University of California Irvince"
                 schoolDescription="This was a six month boot camp where I learned MERN Full Stack Web Development. Languages learned HTML/CSS, NodeJS, Express, MySQL, MongoDB, React"
            />

              <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Experience:</h2>
            <Experience
              startYear={2019}
              endYear={"Present"}
              jobName="Hajoca Corona (Warehouse Associate)"
              jobDescription="Currently work for Hajoca plumbing in the warehouse doing receiving. My main duties are
              inspecting incoming material, counting that material, and putting the material onto the
              shelves. I also do returns and cancellations from customers. I have trained two people while
              working for hajoca. One I trained for the shipping team and another I trained on eclipse to do
              the returns and cancelations. To help train both individuals I created a PDF file of how to help
              them with the specific job duties."
            />
            <Experience
              startYear={2013}
              endYear={2019}
              jobName="Orange County Sheriffs Department (Correctional Service Assistant)"
              jobDescription="While working for the Orange County Sheriff's Department I was assigned to multiple facilities where I conducted important duties. Some of my duties
              were to maintain the security of inmates and staff. Other duties included to maintain detailed security logs, documenting security checks, documenting all incidents, and assist with emergency activations.
              While working for the Orange County Sheriffs Department I was given the oppurtunity to train three academy graduates. My job as a training officer
              was to observe the new hires and assist them with any questions or concerns they may have had while also observing their work to make sure they would be able
              to assist the deputies in their duties."
            />

              <hr style={{borderTop: '3px solid #e22947'}} />
          </Cell>
        </Grid>
        <br></br>
        <Footer />
      </div>
    )
  }
}

export default Resume;
