import { useState } from 'react'
import Bell from '../assests/bell.png'
import Discord from '../assests/logos_discord-icon.svg'
import Twitter from '../assests/logos_twitter.svg'
import Insta from '../assests/ph_instagram-logo-fill.svg'
import Hero from '../assests/kiras.png'
const Navbar = () => {
// const[size, setSize] = useState();

    const[drop, setDrop] = useState(false);
// const[responsive, isresponive] = useState(false);

    return ( 
        <div className='header'>
        <div className="Navbar">
        <div className="logo">
        <h1>KIRA </h1>
        <p>MMORPG + P2E</p>
        </div>
      
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
        <img src={Hero} alt="" />
        <p>KIRA</p>
        </div>
        </div>
        </div>
        
     );
}
 
export default Navbar;