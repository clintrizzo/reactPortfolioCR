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
          id="header"
          class="header"
          onClick={() => {
            // handleClick(() => {
            // })
            setToggle(prev => {
              return !prev;
            });
          }}
        >
          <center>
            <h3 style={{cursor:'pointer'}} className='dropdownInfo' ><CardOption></CardOption></h3>
          </center>
        </div>
        <div
          class="content"
          style={{
            height: toggle ? "100%" : "0px",
            backgroundColor: 'black'

          }}
        >
        <Card.Text>
          <br></br>
          <p className='description' id="projectText">Application was built so user can update an employee field, an active department, and include salaries. To run this program user needs to go into the terminal and run "node server.js". They will then be able to navigate between options and update roles, employees, departments, ect.</p>   
        </Card.Text>
          <hr style={{width:'100%', backgroundColor:'red'}}></hr>
        <Card.Footer style={{paddingBottom: '25px'}}>
          <center>
          <Button variant="primary" size="md" active className="links">
          <a href="https://www.youtube.com/watch?v=ahixbcV90wQ" rel="noopener noreferrer" target="_blank" style={{color: 'white'}} id='linkText'><p className="linkText">Deployment</p></a>
          </Button>{' '}
          <Button variant="secondary" size="md" active className="links">
          <a href="https://github.com/clintrizzo/employee-tracker-database" rel="noopener noreferrer" target="_blank" style={{color: 'white'}} id='linkText'><p className="linkText">GITHUB</p></a>                
          </Button>    
          </center>    
        </Card.Footer>        
          </div>
      </div>
    </div>
  );
}