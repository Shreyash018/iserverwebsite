import React from 'react'

import girl from './images/girl.png'
import office from './images/office.png'

export default function () {

    const bodyStyle = {
        // Set background image using the 'url()' function and the path to your image
          backgroundImage: "url('https://t3.ftcdn.net/jpg/05/79/48/52/360_F_579485255_hzHox0stuQmBx5QViwnQqQjk7RD2AJza.jpg')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          minHeight: '100vh',  
          color: 'Black', 
          padding: '20px',
        };

  return (
  <>
    <div className='lhhpGw fZhawX scrolled' style={{backgroundColor:'#ffdb3b'}}>
    <div className='row'>
    <div className='col-lg-9'>
    <div style={{marginLeft:'60px', marginTop:'200px'}}>
        <h1 style={{color: 'black', fontWeight: '1000', fontSize: '100px', fontFamily: '"Merriweather", serif',}}>Your innovation partner</h1>
        <p style={{fontSize:'30px', marginTop:'40px', marginBottom:'100px'}}>We get a buzz out of unlocking the power of emerging tech for both <br/> big-name enterprises and ambitious startups.</p>
    </div>
   </div>
  </div>
 </div>

 <div className='lhhpGw fZhawX scrolled' style={{backgroundColor:'black'}}>
    
    
    <div className='col-lg-8'>
    <div style={{marginLeft:'60px', }}>
        <h1 style={{color: '#ffdb3b', fontWeight: '1000', fontSize: '100px', fontFamily: '"Merriweather", serif',}}>Key facts <span style={{color:'white'}}>about us </span> </h1>
    </div>
    </div>
    <div className='row' style={{marginLeft:'50px'}}>
    <div className='col-lg-8'>
    <div>
        <h1 style={{color:'#ffdb3b', fontSize:'100px', fontWeight:'bold'}}>2009</h1>
        <p style={{fontSize:'23px', color:'white'}}>the year of foundation</p>
    </div>
    <div>
        <h1 style={{color:'#ffdb3b', fontSize:'100px', fontWeight:'bold'}}>600+</h1>
        <p style={{fontSize:'23px', color:'white'}}>solutions delivered</p>
        </div>

        <div>
        <h1 style={{color:'#ffdb3b', fontSize:'100px', fontWeight:'bold'}}>300+</h1>
        <p style={{fontSize:'23px', color:'white' , marginBottom:'100px'}}>professionals and growing</p>
        </div>
        
    </div>
    </div>
   
   </div>
  
   <div className='lhhpGw fZhawX scrolled' style={bodyStyle}>
    <div className='row'>
    <div className='col-lg-9 offset-sm-2 text-center'>
    <div style={{ marginTop:'150px'}}>
        <h1 style={{color: 'black', fontWeight: '1000', fontSize: '100px', fontFamily: '"Merriweather", serif',}}>Build things you’re proud of</h1>
        <p style={{fontSize:'30px', marginTop:'40px', marginBottom:'100px', color:'white',}}>We get a buzz out of unlocking the power of emerging tech for both <br/> big-name enterprises and ambitious startups.</p>
    </div>
   </div>
  </div>
 </div>

 <div>
    <div className='container' >
    <div className='row'>
      <div className="col-sm-6">
      <div style={{ marginTop: '100px', marginLeft:'80px', }}>

      <h1 style={{ color: 'black', fontWeight: '1000', fontSize: '50px', fontFamily: '"Merriweather", serif' }}>Who we are</h1>
      <p style={{ marginTop: '10px', fontSize: '20px' }}>We solve problems and drive growth for our clients. They’ve included big names like Walmart, Take a Swing at Cancer, Procter & Gamble, Dun & Bradstreet, Warner Bros., 21st Century Fox, and the Dollar Shave Club.</p>
      <p style={{ marginTop: '70px', fontSize: '20px' }}>We strive always to be honest with each other and the client. That’s more than being truthful, it’s about not dodging responsibility or concealing important things.</p>
    </div>
    </div>
 
 
    <div className="col-sm-5">
    <div style={{ marginTop: '120px', marginLeft:'100px'}}>
     <img src={girl} alt="" style={{ width: '600px', height:'400px', marginBottom:'100px' }} />
    </div>
   </div>
 </div>
 </div>
 </div>

 <div>
    <div className='container' >
    <div className='row'>
    <div className="col-sm-5">
    <div style={{ marginTop: '120px', marginLeft:'100px'}}>
     <img src={office} alt="" style={{ width: '500px', height:'400px', marginBottom:'100px' }} />
    </div>
   </div>
 
   <div className="col-sm-7">
      <div style={{ marginTop: '120px', marginLeft:'220px', }}>

      <h1 style={{ color: 'black', fontWeight: '1000', fontSize: '50px', fontFamily: '"Merriweather", serif' }}>Who should apply</h1>
      <p style={{ marginTop: '10px', fontSize: '20px' }}>If you only want a salary and don’t much care about how good your projects are, you’ll probably hate it here.</p>
      <p style={{ marginTop: '70px', fontSize: '20px' }}>If you hide behind policies and processes because, secretly, you’re terrified of owning ideas or decisions, you too will think it sucks..</p>
    </div>
    </div>
 </div>
 </div>
 </div>

  




    </>
  )
}
