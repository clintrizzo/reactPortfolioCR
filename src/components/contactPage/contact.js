import React from "react";
import emailjs from 'emailjs-com';
import '../App.css';
import Footer from '../footer/footer'

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
                            <center>
                            <legend className='contact-title' style={{color:'black', paddingTop: '20px', paddingBottom:'40px', fontSize:'25px'}}>Contact me via email</legend>
                            </center>
                            <div className='form-group'>
                                <label for='name' style={{color:'black'}}>Name:</label>
                                    <div>
                                        <input id='name' name='name' type="text" placeholder="Your name" class="form-control" />
                                    </div>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label for="email" style={{color:"black"}}>E-mail:</label>
                                    <div>
                                        <input id="email" name="email" type="text" placeholder="Your email" class="form-control" />
                                    </div>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label for="message" style={{color: "black"}}>Message:</label>
                                    <div>                                        
                                        <textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="4"></textarea>
                                    </div>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <div>
                                    <button type="submit" className="button">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>)
}

export default Contact;
