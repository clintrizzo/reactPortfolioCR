import React from "react";
import emailjs from 'emailjs-com';
import '../App.css';

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
