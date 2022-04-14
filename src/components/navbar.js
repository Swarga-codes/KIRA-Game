import { useState } from 'react'
import Bell from '../assests/bell.png'
import Discord from '../assests/logos_discord-icon.svg'
import Twitter from '../assests/logos_twitter.svg'
import Insta from '../assests/ph_instagram-logo-fill.svg'
// import Hero from '../assests/kiras.png'
import Hero1 from '../assests/Kira -01.png'
import Hero2 from '../assests/Kira - 02.png'
import Hero3 from '../assests/Kira -03.png'
import React from 'react';
import Popup from 'reactjs-popup';
import Country from '../assests/US - United States.png'
const Navbar = () => {
// const[size, setSize] = useState();

    const[drop, setDrop] = useState(false);
// const[responsive, isresponive] = useState(false);
const [pop,setPop]=useState(false);
 



window.addEventListener("load", function(){
  setTimeout(
      function open(){
          document.querySelector(".Popup").style.display = "block";
          document.querySelector(".popup-overlay").style.background="rgba(0,0,0,.5) ";
      },
      10000
  )
});


  

    return ( 
        <div className='header'>
        <div className="Navbar">
        <div className="logo">
        <h1 >KIRA </h1>
        <p>MMORPG + P2E</p>
        </div>
      
        <Popup defaultOpen modal nested id='Pop'>
          {pop===false?
        <div className="Popup" id='Popup1'>
            <h1>Kiraverse is coming...  Sign up to stay updated.</h1>
            <input type="text" placeholder="Your E-mail address" required />
            <br />
            <button onClick={()=>setPop(true) } >Continue</button>
            <p>You will recieve Information related to the Kira. No Bull Whatsoever.</p>
        </div>
      : 
      <div className="Popup" id='Popup1'>
      <h1>Kiraverse is coming...  Sign up to stay updated.</h1>
      <img src={Country} alt="" />
      <input type="tel"   placeholder=" +1   |   Mobile Number" required  className='mob'/>
      <br />
      <button>Submit</button>
      <p>You will recieve Information related to the Kira. No Bull Whatsoever.</p>
  </div> 
      }
        </Popup>
      
        <div className='socials'>
        <div className="social-container">
        <div>
        <img src={Bell} alt="" />
        </div>
        <div className='notified' onClick={() => setDrop(!drop)}>Get notified
      {drop && ( <>
        <div className='res'>
        <div>
     <a href="https://discord.com/invite/kiraverse" target="_blank">  <img src={Discord} alt="" /> </a>
       </div>
<div>    <a href="https://twitter.com/kiraversenft" target="_blank"> <img src={Twitter} alt="" /></a></div> 
      <div> <a href="https://www.instagram.com/kiraversenft/" target="_blank">  <img src={Insta} alt="" /></a></div>
        </div>
        </>)
    }
    </div>
      <div className='DC'><a href="https://discord.com/invite/kiraverse" target="_blank"> <img src={Discord} alt="" /></a></div> 
    <div className='TW'> <a href="https://twitter.com/kiraversenft" target="_blank"> <img src={Twitter} alt="" /></a> </div> 
    <div className='IN'>  <a href="https://www.instagram.com/kiraversenft/" target="_blank"> <img src={Insta} alt="" /></a> </div>
    
        </div>
        </div>
        <div>
       
       
               
    
        </div>
        </div>
        
 
    
        <div className='Hero'>
        <div className='content'>
          <img src={Hero1} alt="" />
          <img src={Hero2} alt="" />
          <img src={Hero3} alt="" />
        {/* <img src={Hero} alt="" /> */}
        <p>KIRA</p>
        </div>
        </div>
        </div>
        
     );
}
 
export default Navbar;