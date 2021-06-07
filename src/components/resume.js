import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div style={{backgroundColor:"rgb(219, 227, 231)"}}>
        <Grid>
          <Cell col={4}>
            <h2 style={{paddingTop: '10px'}}>Clinton Rizzo</h2>
            <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Web Developer with a background in Customer Service. Recognized as proactive, resourceful,
                and persistent problem-solver. Excellent communicator with effective client relationship
                building skills. Graduate of (Trilogy) through (University of California Irvine).
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>8853 Lemonwood Drive Corona, California</p>
            <h5>Phone</h5>
            <p>(951) 288-2247</p>
            <h5>Email</h5>
            <p>clint.rizzo92@gmail.com</p>
            <h5>Copy of Resume</h5>
            <a href="./images/Clinton_Rizzo_Resume (1).PDF">Clint Rizzo</a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8} style={{borderRadius:"50px"}}>
            <h2>Education</h2>


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
                 schoolDescription="This was a six month boot camp where I learned MERN Full Stack Web Development. Languages learned HTML/CSS, NodeJS, mySQL, MongoDB, React"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

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

              <Experience
                startYear={2019}
                endYear={"Present"}
                jobName="Hajoca Corona (Receiving Associate"
                jobDescription="Currently work for Hajoca plumbing in the warehouse doing receiving. My main duties are
                inspecting incoming material, counting that material, and putting the material onto the
                shelves. I also do returns and cancellations from customers. I have trained two people while
                working for hajoca. One I trained for the shipping team and another I trained on eclipse to do
                the returns and cancelations. To help train both individuals I created a PDF file of how to help
                them with the specific job duties."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={50}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={70}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={45}
                    />
                    <Skills
                      skill="React"
                      progress={40}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
