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
          <p className='description' id="projectText">A complete frontend project where the user can create a chat area with their friends. I used this project to practice bringing in React hooks and using reasting API's. Inside the chat the admininstrator for that conversation can organize the users to whichever chat area they would like.</p>   
        </Card.Text>
          <hr style={{width:'100%', backgroundColor:'red'}}></hr>
        <Card.Footer style={{paddingBottom: '25px'}}>
          <center>
          <Button variant="primary" size="md" active className="links">
          <a href="https://chat-box-4rcklawlr-clintrizzo.vercel.app/" rel="noopener noreferrer" target="_blank" style={{color: 'white'}} id='linkText'><p className="linkText">Deployment</p></a>
          </Button>{' '}
          <Button variant="secondary" size="md" active className="links">
          <a href="https://github.com/clintrizzo/frontend-chat-repo" rel="noopener noreferrer" target="_blank" style={{color: 'white'}} id='linkText'><p className="linkText">GITHUB</p></a>                
          </Button>    
          </center>    
        </Card.Footer>        
          </div>
      </div>
    </div>
  );
}