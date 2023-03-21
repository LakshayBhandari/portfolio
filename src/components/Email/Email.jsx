import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './Email.css'
import MapChart from '../MapChart'


const Email = () => {

  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mretkrs",
        "template_lsxdjn1",
        ref.current,
        "KLuFPIWYg5415xYL8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );

  }


  return (
    <div className='emailc'>
      
        <div className='econtainer'>
          <div className='eleft'>
            <form id="contact-form" ref={ref} className='form' onSubmit={handleSubmit}>
              <h2 className='fheading'>Contact US</h2>
              <input className='name' placeholder='Name' name="name"/>
              <input className='email' placeholder='Email'name="email" />
              <textarea className='message' placeholder='Write your message...' name="message" rows={10}/>
              <button type='submit' className='send'>Send</button>
              {success && <>
                <div>
                 <span><h1>Your message has been sent, i'll get back to you soon</h1><img src="https://media0.giphy.com/media/who1srhjq76r0yTwfy/giphy.gif?cid=ecf05e47e043c474aea25345910d43d9fad147c053ecffd0&rid=giphy.gif&ct=s" alt=""/></span> 
                </div>
              </>}
            </form>
          </div>
          <div className='eright' >
          <MapChart className="mapchart" style={{ height: '100%', width: '100%' }}/>
          </div>
        </div>
         
          </div>
           

  )
}

export default Email