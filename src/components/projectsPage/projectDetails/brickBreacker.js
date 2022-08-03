import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardOption from '../button'
export default function App() {
  const [toggle, setToggle] = useState(false);
  // const initialText = 'Click';
  // const [buttonText, setButtonText] = useState(initialText);
  // function handleClick() {
  //   setButtonText('Click To Collapse');
  // }

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
            <h3 style={{cursor:'pointer'}} className='busyParentScheduler' ><CardOption></CardOption></h3>
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
          <p className='description'>Using the left and right directional pad you can move the bottom paddle to redirect the ball back to hitting the blocks. Goal of the game is to detroy all the paddles at the top to win the game. User has three lives if the ball hits below the bottom paddle the user loses a life. </p>   
        </Card.Text>
          <hr style={{width:'100%', backgroundColor:'red'}}></hr>
        <Card.Footer style={{paddingBottom: '25px'}}>
          <center>
          <Button variant="primary" size="lg" active>
          <a href="https://www.youtube.com/watch?v=P7NGOYOvt8Y" rel="noopener noreferrer" target="_blank" style={{color: 'white'}}>Deployment</a>
          </Button>{' '}
          <Button variant="secondary" size="lg" active>
          <a href="https://github.com/clintrizzo/2D-game" rel="noopener noreferrer" target="_blank" style={{color: 'white'}} >GITHUB</a>                
          </Button>    
          </center>    
        </Card.Footer>        
          </div>
      </div>
    </div>
  );
}