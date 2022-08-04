import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardOption from '../projectDetails'

export default function App() {
  const [toggle, setToggle] = useState(false);

  return (
    
    <div className="App">
      <div class="collapsible-card">
        <div
          id="dropdownText"
          class="header"
          onClick={() => {
            setToggle(prev => {
              return !prev;
            });
          }}
        >
          <center>
            <h3 style={{cursor:'pointer'}} className='dropdownInfo'><CardOption></CardOption></h3>
          </center>
        </div>
        <div
          class="content"
          style={{
            height: toggle ? "10%" : "0px",
          }}
        >
        <Card.Text>
          <br></br>
          <p className='description' id="projectText">We built this app for the intention of parents who have a busy life style that they could schedule their work week, personal life, and childrens schedule all in one place. For families that like to plan in advance the app allows you to select days weeks away and still be able to put in a "to do" item.</p>   
        </Card.Text>
          <hr style={{width:'100%', backgroundColor:'red'}}></hr>
        <Card.Footer style={{paddingBottom: '25px'}}>
          <center>
          <Button variant="primary" size="lg" active className="links">
          <a href="https://kjwallac.github.io/BusyParentScheduler/calendar.html" rel="noopener noreferrer" target="_blank" style={{color: 'white'}}>Deployment</a>
          </Button>{' '}
          <Button variant="secondary" size="lg" active className="links">
          <a href="https://github.com/clintrizzo/BusyParentScheduler" rel="noopener noreferrer" target="_blank" style={{color: 'white'}} >GITHUB</a>                
          </Button>    
          </center>    
        </Card.Footer>        
          </div>
      </div>
    </div>
  );
}