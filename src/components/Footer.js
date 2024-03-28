import React from 'react'

import link from './images/link.png'
import twit from './images/twit.png'
import insta from './images/insta.png'
import face from './images/face.png'
import you from './images/you.png'

export default function () {
  return (
   <>
    <div className="container-fluid hero hero-top" style={{ backgroundColor: 'black' }}>
     <div className="container">
      <div className='row' style={{marginLeft:'150px'}}>
       <div className="col-lg-4">
        <h2 style={{ marginTop: '100px', fontWeight: '', fontSize: '40px', fontFamily: '"Merriweather", serif', color: 'white' }}>IServer</h2>
        
      </div>
      <div className="col-lg-7">
      <h1 style={{ marginTop: '100px', fontWeight: '1000', fontSize: '35px', fontFamily: '"Merriweather", serif', color: 'white' }}>
        We are a software development company that creates and transforms business solutions, products, and enterprises to drive growth today and into the future</h1>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid hero hero-top" style={{ backgroundColor: 'black' }}>
     <div className="container">
      <div className='row' style={{marginLeft:'150px'}}>
       <div className="col-lg-3">
        <h2 style={{ marginTop: '100px', fontSize: '25px', fontFamily: '"Merriweather", serif', color: 'white' }}>Offices:<span style={{color:'grey'}}> Pune, Mumbai, Bengaluru</span>  </h2>
        
      </div>
      <div className="col-lg-4">
      <h1 style={{ marginTop: '100px', fontSize: '20px', fontFamily: '"Merriweather", serif', color: 'white', marginLeft:'100px' }}>hello@iserver.com </h1>
      <p style={{  fontSize: '20px', fontFamily: '"Merriweather", serif', color: 'white', marginLeft:'100px' }}>+1 213 436 7785</p>

     

      <div className="col-lg-4">
          <div className='d-flex' style={{ marginTop: '20px', marginLeft:'100px'}}>
     
                <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px',}} >
                 <img src={link} alt="LinkedIn Icon" style={{ width: '20px', height: '20px' }}/>
                </a>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px',}}>
                 <img src={face} alt="face Icon" style={{ width: '20px', height: '20px' }}/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px',}} >
                 <img src={insta} alt="Instagram Icon" style={{ width: '20px', height: '20px' }}/>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px',}} >
                 <img src={twit} alt="Twitter Icon" style={{ width: '20px', height: '20px' }}/>
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px',}} >
                 <img src={you} alt="Youtube Icon" style={{ width: '20px', height: '20px' }}/>
                </a>
                
                 
             </div>
           </div>

           <div className="col-lg-8">
                 <div>
                  <p style={{color:'white', marginLeft:'100px' , marginTop:'20px'}}>Privacy Policy ©2024 IServer Group</p>
                </div>
               </div>
      </div>
    </div>
  </div>
</div>
   </>
  )
}
