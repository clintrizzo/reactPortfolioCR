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
          <p className='description' id="projectText">This is a employee directory created with React. The application's UI is broken up into components, manages component state, and responds to user events. You are able to filter by name or email and have an individual name displayed.</p>   
        </Card.Text>
          <hr style={{width:'100%', backgroundColor:'red'}}></hr>
        <Card.Footer style={{paddingBottom: '25px'}}>
          <center>
          <Button variant="primary" size="md" active className="links">
          <a href="https://user--directory2.herokuapp.com/" rel="noopener noreferrer" target="_blank" style={{color: 'white'}} id='linkText'><p className="linkText">Deployment</p></a>
          </Button>{' '}
          <Button variant="secondary" size="md" active className="links">
          <a href="https://github.com/clintrizzo/user-directory2" rel="noopener noreferrer" target="_blank" style={{color: 'white'}} id='linkText'><p className="linkText">GITHUB</p></a>                
          </Button>    
          </center>    
        </Card.Footer>        
          </div>
      </div>
    </div>
  );
}