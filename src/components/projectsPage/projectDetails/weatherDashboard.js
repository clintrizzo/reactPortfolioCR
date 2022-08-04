import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardOption from '../projectDetails'
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
            <h3 style={{cursor:'pointer'}} className='dropdownInfo' ><CardOption></CardOption></h3>
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
          <p className='description' id="projectText">I built this project to display the weather for a city. Setting the current forecast to a card from boot strap and adding the five day projected weather on another card. In the current weather display it shows the current weather conditions, temp, humidity, and wind speed.</p>   
        </Card.Text>
          <hr style={{width:'100%', backgroundColor:'red'}}></hr>
        <Card.Footer style={{paddingBottom: '25px'}}>
          <center>
          <Button variant="primary" size="lg" active className="links">
          <a href="https://clintrizzo.github.io/Weatherboard/" rel="noopener noreferrer" target="_blank" style={{color: 'white'}}>Deployment</a>
          </Button>{' '}
          <Button variant="secondary" size="lg" active className="links">
          <a href="https://github.com/clintrizzo/Weatherboard" rel="noopener noreferrer" target="_blank" style={{color: 'white'}} >GITHUB</a>                
          </Button>    
          </center>    
        </Card.Footer>        
          </div>
      </div>
    </div>
  );
}