import React from "react";
import emailjs from 'emailjs-com';
import '../App.css';
import { List, ListItem, ListItemContent } from 'react-mdl';

function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();
        
            emailjs.sendForm('service_xr2b3to', 'template_7mdw816', e.target, 'user_hAC4qDkDBFsqKIalb7U6r')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()
    }
    return (
        <div className="container">
            <div>
                <div>
                    <div>
                        <center>
                        <div className="contact-list">
                            <h1>Contact Me</h1>
                            <center>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (951)288-2247
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', color: 'black', fontFamily: 'Anton'}}>
                                    <a href="https://github.com/clintrizzo" rel="noopener noreferrer" target="_blank" style={{color:'black'}}>
                                        <i className="fa fa-github-square" aria-hidden="true" style={{color:'black'}}/>
                                        github.com/clintrizzo
                                    </a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        clint.rizzo92@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                            </center>
                        </div>
                        </center>
                        <hr></hr>
                        <form onSubmit={sendEmail}>
                            <legend className="text-left" style={{color:"black", paddingTop: "150px", paddingLeft: "15px"}}>Send me a message</legend>
                            <div className="form-group">
                                <label for="name" style={{color:"black", marginTop:"15px"}}>Name</label>
                                <div>
                                    <input id="name" name="name" type="text" placeholder="Your name" class="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="email" style={{color:"black"}}>Your E-mail</label>
                                <div>
                                    <input id="email" name="email" type="text" placeholder="Your email" class="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="message" style={{color: "black"}}>Your message</label>
                                <div>
                                    <textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="12"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <button type="submit" className="button">Submit</button>
                                </div>
                                <br></br>
                                <br></br>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>)
}

export default Contact;
