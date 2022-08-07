import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
  render() {
    return(
      <div id="resumeBack">     
      <Grid style={{paddingTop: '30px'}}>
        <Cell className='resume-left-col' col={4} style={{borderRadius:"60px"}}>
          <center>
          <img src="./images/me.jpg" alt="clintRizzo" className='me' id='frontImage'></img>
          </center>
          <h3 className='position'>Full Stack Web Developer</h3>
          <center>
          <hr style={{borderTop: '3px solid #e22947',  width: '85%'}}/>
          </center>
          <p className='developerStory'>Web Developer with a background in Customer Service. Recognized as proactive, resourceful, and persistent problem-solver. Excellent communicator with effective client relationship building skills. Earned a Certificate in Full-Stack Web Development from the University of CA-Irvine with the goal of becoming a skilled Web Developer. Languages learned were HTML/CSS, Javascript, Node, Express, and React. Main goal in becoming a successful Web Developer is to continue learning as much as possible to become an essential asset to any team. Because of the skills learned through the bootcamp and personal background any task given will be completed. 	
          </p>
          <center>
          <hr style={{borderTop: '3px solid #e22947', width: '95%'}}/>
          </center>
          <br></br>
          <h3 className='info'>Coding Languages:</h3>
          <br></br>
          <h5 className='languageInfo'>HTML/CSS | Bootstrap | JavaScript | MySQL | NodeJS | Express | MongoDB | React</h5>
          <br></br>
          <center>
          <hr style={{borderTop: '3px solid #e22947', width: '95%'}}/>
          </center>
          <h5 className='info'>Address:</h5>
          <p className='answer'>Corona, California</p>
          <h5 className='info'>Phone:</h5>
          <p className='answer'>(951) 288-2247</p>
          <h5 className='info'>Email:</h5>
          <p className='answer'>clint.rizzo92@gmail.com</p>
          <center>
          <hr style={{borderTop: '3px solid #e22947', width: '95%'}}/>
          </center>
        </Cell>
        <Cell className="resume-right-col" col={8} style={{borderRadius:"50px"}}>
          <h2 className='resumeInfo'>Education:</h2>
          <Education
            startYear={2007}
            endYear={2011}
            schoolName="Santiago High School"
            schoolDescription="High School Diploma"
          />
          <Education
            startYear={2020}
            endYear={2021}
            schoolName="Trilogy @ University of California Irvine"
            schoolDescription="This was a six month boot camp where I learned MERN Full Stack Web Development. Languages learned HTML/CSS, NodeJS, Express, MySQL, MongoDB, React"
          />

          <hr style={{borderTop: '3px solid #e22947'}} />

          <h2 className='resumeInfo'>Experience:</h2>
          <Experience
            startYear={2021}
            endYear={"Present"}
            jobName="ServerFarm - InCommand (QA Tester)"
            jobDescription="Currently work for ServerFarm - InCommand as a QA Tester. I am currently working to update current test plans with cypress as well as creating new test plans. My other duties are to validate and test feature functionality for bug tickets and improvements to the applications. "
          />
          <center>
          <hr style={{borderTop: '2px solid #e22947', width: '85%'}}/>
          </center>
          <Experience
            startYear={2019}
            endYear={2021}
            jobName="Corona Hajoca (Warehouse Associate)"
            jobDescription="While working for Corona Hajoca plumbing company I had multiple roles. I first started as a shipping warehouse associate where I would pull orders and load trucks for the next day deliveries. My second job was as a receiving associate. During this role I received in plumbing material. Main duties for this position was to check material coming in to make sure it matched the PO. I also had to maintain my paperwork to allow purchasing to check if need be. My third job was as a warehouse associate. In this position I split my time between receiving and shipping. During this time I trained multiple individuals for both departments. I also created a PDF file on how to use eclipse for new users. My final position was shipping supervisor. My main duties was to route six trucks while making sure material was being loaded on the correct trucks. I was also responsible for quarterly evals of my team. "
          />
          <center>
          <hr style={{borderTop: '2px solid #e22947', width: '85%'}}/>
          </center>
          <Experience
            startYear={2013}
            endYear={2019}
            jobName="Orange County Sheriffs Department (Correctional Service Assistant)"
            jobDescription="While working for the Orange County Sheriff's Department I was assigned to multiple facilities where I conducted important duties. Some of my duties
            were to maintain the security of inmates and staff. Other duties included to maintain detailed security logs, documenting security checks, documenting all incidents, and assist with emergency activations.
            While working for the Orange County Sheriffs Department I was given the oppurtunity to train five academy graduates. My job as a training officer
            was to observe the new hires and assist them with any questions or concerns they may have had while also observing their work to make sure they would be able
            to assist the deputies in their duties."
          />
          <hr style={{borderTop: '3px solid #e22947'}} />
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Resume;
