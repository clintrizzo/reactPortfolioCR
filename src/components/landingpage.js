import React, { Component } from 'react';
import Footer from './footer/footer'
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
            <div className="banner-text">
              <h1>Clinton Rizzo</h1>
              <hr style={{width:'60%', color:'red'}}></hr>
              <h3 className='title'>Full Stack Web Developer</h3>
              <h5 className='title'>HTML/CSS | Bootstrap | JavaScript | MySQL | NodeJS | Express | MongoDB | React</h5>
              <hr/>
              <br></br>
                <div className="social-links">
                  {/* Github */}
                  <a href="https://github.com/clintrizzo" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                    <div className='hiddenText0'>Github</div>
                  </a>
                  {/* Youtube */}
                  <a href="https://www.youtube.com/channel/UCpARYFoliOIr-UGpIT-4ibQ/videos" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-youtube-square" aria-hidden="true" />
                    <div className='hiddenText1'>Youtube</div>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/clinton-rizzo-79b67b1b6/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    <div className='hiddenText2'>Linkedin</div>
                  </a>
                  {/* Instagram */}
                  <a href="https://www.instagram.com/clintrizzo/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-instagram" aria-hidden="true" />
                    <div className='hiddenText3'>Instagram</div>
                  </a>
                  {/*resume*/}
                  <a href="https://docs.google.com/document/d/1qoSVfiUBKsaPGNi_9KM9QEsKNl-7HqC2UACmeYMM2XQ/edit?usp=sharing" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-folder-open" aria-hidden="true" />
                    <div className='hiddenText4'>Resume</div>
                  </a>
                </div>
                <br></br>
            </div>
            <div className="resumeBack">     
              <Grid>
                <Cell className='resume-left-col' col={4}>
                  <img src="./images/me.jpg" alt="clintRizzo" className='me'></img>
                  <h3 className='hTags' style={{color: 'black', fontSize: '26px'}}>Full Stack Web Developer</h3>
                  <center>
                  <hr style={{borderTop: '3px solid #e22947',  width: '85%'}}/>
                  </center>
                  <p className='developerStory'>Web Developer with a background in Customer Service. Recognized as proactive, resourceful, and persistent problem-solver. Excellent communicator with effective client relationship building skills. Earned a Certificate in Full-Stack Web Development from the University of CA-Irvine with the goal of becoming a skilled Web Developer. Languages learned were HTML/CSS, Javascript, Node, Express, and React. Main goal in becoming a successful Web Developer is to continue learning as much as possible to become an essential asset to any team. Because of the skills learned through the bootcamp and personal background any task given will be completed. 	
                  </p>
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
                </Cell>
                <Cell className="resume-right-col" col={8} style={{borderRadius:"50px"}}>
                  <h2 className='hTag'>Education:</h2>
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

                  <h2 className='hTag'>Experience:</h2>
                  <center>
                  <Experience
                    startYear={2019}
                    endYear={"Present"}
                    jobName="Hajoca Corona (Warehouse Associate)"
                    jobDescription="Currently work for Hajoca plumbing in the warehouse as a warehouse associate. My main duties are to help both
                    receiving and shipping departments. The receiving deparment consists of maintaining material that is coming in and making sure the
                    correct material has been received. Shipping duties is to complete orders that have been ordered and complete those orders 
                    accurately. While working at Corona Hajoca I have trained six new employees. Five of those employees have been for the shipping
                    position and one of the employees was moved from shipping to receiving. The training for these policies consisted of having them learn 
                    the safety policies of the warehouse, testing them on heavy machinery, and conducting heavy machinery written exams. The main
                    goal for these employees to succeed was to give them as much knowledge as possible to allow them to succeeed."
                  />
                  </center>
                  <center>
                  <hr style={{borderTop: '2px solid #e22947', width: '85%'}}/>
                  </center>
                  <center>
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
                  </center>
                  <hr style={{borderTop: '3px solid #e22947'}} />
                </Cell>
              </Grid>
            </div>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    )
  }
}

export default Landing;
