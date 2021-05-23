import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body" style={{backgroundColor:"rgb(219, 227, 231)"}}>
        <Grid className="contact-grid" style={{backgroundColor:"rgb(219, 227, 231)"}}>
          <Cell col={6}>
            <h2>Clinton Rizzo</h2>
            <img
              src="images/me.jpg"
              alt="avatar"
              className="contactImage"
              style={{height: '280px', width: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hello! I have just finished my boot camp journey for full stack web development. My primary interests are in frontend and database using mySQL. The things I enjoy outside of coding is painting, reading, and doing paintball competitions.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (951)-288-2247
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    clint.rizzo92@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i class="fa fa-microphone" style={{paddingLeft:"15px"}} aria-hidden="true"/>
                    Clint-Rizzo
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
