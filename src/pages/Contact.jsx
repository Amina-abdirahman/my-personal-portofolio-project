import React from "react";
import '../Global.css';

function Contact (){
    return(
        
           <div id="Contact" className="contact-container">
      <div className="contact-form">
        <h2>Get In Touch</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    
        </div>
    )
}

export default Contact;