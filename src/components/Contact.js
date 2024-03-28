import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import linkedin from './images/linkedin.png'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'
import github from './images/github-sign.png'

export default function Contact() {

    const [hover, setHover] = useState(false);

    const handleHover = () => {
      setHover(!hover);
    };
  
   
    const [state, handleSubmit] = useForm("https://formspree.io/f/xvoeqvea");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    const formStyles = {
        maxWidth: '600px',
        marginLeft:'20px',
        marginTop:'10px'
      };
  
      const inputStyles = {
        width: '100%',
        padding: '10px ',
        margin: '16px 0',
        boxSizing: 'border-box',
        border: 'none',
        borderBottom: '2px solid #636363', // Underline style
        outline:'none', 
        backgroundColor:'transparent'
      };
      
      const linkStyle = {
        position: 'relative',
        display: 'inline-block',
        textDecoration: 'none',
        color: 'inherit',
        padding: '2px 100px',
        marginLeft:'350px',
        marginBottom:'30px',
        transition: 'color 0.3s, background-color 0.3s',
        backgroundColor: hover ? '#FEDCDC' : 'transparent'
      };
    
      const hoverEffectStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '500px',
        height: hover ? '500px' : '0%',
        transition: 'height 0.3s'
      };

    const bodyStyle = {
        // Set background image using the 'url()' function and the path to your image
          backgroundImage: "url('https://img.freepik.com/free-photo/top-view-chat-bubbles-with-telephone-receiver-copy-space_23-2148796078.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710460800&semt=ais')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          minHeight: '100vh',  
          color: 'Black', 
          padding: '20px',
        };

  return (
    <>
    <div style={bodyStyle}>
    <section className="lhhpGw fZhawX scrolled" style={{ marginLeft:'20px'}} >
        <div className="row">     
          <div className='col-lg-6'>
          <div>
          <h4 style={{ fontSize: '1.9333rem', fontFamily: 'poppins', fontWeight: '1000', color: 'black' , marginTop:'190px' , marginLeft:'20px'}}>Get In Touch</h4>
          <p style={{fontSize:'15px',  fontFamily: '"Merriweather", serif', color: 'black',marginLeft:'20px'}}>We will process your personal information in accordance with our Privacy Policy.</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="contact-form hYlwmr"
            method="POST"
            target="_blank"
            action="https://formspree.io/f/xvoeqvea"
            id="home-contact"
            style={formStyles}
          >
          <div className="cWhpWP input-group" data-id="name" >
                <input
                  id="name"
                  placeholder="Name"
                  type="name"
                  name="_replyto"
                  required="required"
                  style={inputStyles}
                />
                 <ValidationError  prefix="message"  field="name" errors={state.errors} />
              </div>
           <input type="hidden" name="_subject" value="Message from olaolu.dev!" />
            <div className="form-row">
              <div className="cWhpWP input-group" data-id="email" >
                <input
                  id="full-name"
                  placeholder="Email"
                  type="text"
                  name="name"
                  required="required"
                  style={inputStyles}
                />
                <ValidationError  prefix="email"  field="email" errors={state.errors} />
              </div>
              <div className="cWhpWP input-group" data-id="number" >
                <input
                  id="number"
                  placeholder="Phone"
                  type="number"
                  name="_replyto"
                  required="required"
                  style={inputStyles}
                />
                 <ValidationError  prefix="message"  field="number" errors={state.errors} />
              </div>
              <div className="cWhpWP input-group" data-id="message" >
                <input
                  id="message"
                  placeholder="Write a message and press ENTER"
                  type="email"
                  name="_replyto"
                  required="required"
                  style={inputStyles}
                />
                 <ValidationError  prefix="message"  field="message" errors={state.errors} />
              </div>
            </div>
            <button type="submit" id="submit-button" class="btn btn-outline-dark" style={{ padding:'10px 20px', cursor:'pointer', borderRadius:'none', width: '150px', height:'auto', marginTop:'25px'}}> Send Message </button>
          </form>  
        </div>
    </div>
  </section>

     <div className ="container-fluid hero mbc-loc">
       <div className="container" style={{marginTop:'70px' , marginLeft:'20px'}}>
         <div className="col-sm-4">
          <div className='d-flex' style={{ marginTop: '20px'}}>
     
                <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '40px',}} >
                 <img src={linkedin} alt="LinkedIn Icon" style={{ width: '20px', height: '20px' }}/>
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '40px',}}>
                 <img src={github} alt="Github Icon" style={{ width: '20px', height: '20px' }}/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '40px',}} >
                 <img src={instagram} alt="Instagram Icon" style={{ width: '20px', height: '20px' }}/>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '40px',}} >
                 <img src={twitter} alt="Twitter Icon" style={{ width: '20px', height: '20px' }}/>
                </a>

           </div>

           <h2 style={{fontSize: '2.9333rem' ,fontWeight: 'bold', fontFamily:'poppins', fontWeight: '1000', color:'', marginTop:'30px', marginBottom:'100px'}}>Let's work together </h2>
         
         </div>
       </div>
    </div>
</div>
    </>
  )
}
