import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { useState } from 'react'

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8azmzuu', 'template_2093cym', form.current, 'cfhSxYMvMSenQ3pBI')
      .then((result) => {
        console.log(result.text);
        setIsMessageSent(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact' className='contact-content'>
      <h5 id='emer'>If this is an emergency,<span> CALL 911!</span></h5>
      <h2>Submit a Crime Tip</h2>
      <div className="container contact-container">        

        
        <form ref={form} onSubmit={sendEmail} >
        <input type="text" name="name" placeholder="Address or location" required />
        <input type="text" name="city" placeholder="City" required />
        <input type="text" name="state" placeholder="State" required />
        <textarea name="crime_tip" rows="7" placeholder="What's your tip ? Please include details like location, date, time, and descriptions of people involved." required></textarea>    
        <textarea name="message" rows="7" placeholder="Would you like to provide personal information?" required></textarea>    
        <button type="submit" className="btn btn-primary">
          Submit Tip
        </button>        
        {isMessageSent && <p className="success-message">Message sent successfully!</p>}
      </form>            
      </div>
    </section>
  )
}

export default Contact