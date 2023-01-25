import React from 'react';
import logof from "../pictures/logohead.png";

const Footer = () => {
  return (
     <section>
   <div className='fotter'>
     <div className='rowf'>
       <img src={logof} className="logoF" alt="logo" />
     </div>
   
    <div className='rowt'>
      
      <h3 className='namef'>STAY IN TOUCH </h3>
       <hr/>
      <ul className='ull'>
        <li><a className='ali' href='https://www.facebook.com/'>facebook</a></li>
        <li><a className='ali'   href='https://www.instagram.com/'>instagram</a></li>
      </ul>
    </div>

      <div className='rowc' >
      <h3 className='namef' >CONTACT US NOW</h3>
      <hr/>
      <ul className='ull'>
        <li><a className='ali'  href='https://www.facebook.com/'>wolftattoo@gmail.com</a></li>
        <li><a className='ali'  href='https://www.facebook.com/'>+363636/333-444</a></li>
      </ul>
    </div>
  
  
   </div>
  
      <div className='end'>
          <h5>
      &copy; {new Date().getFullYear()}
      <span>WolfTattoo</span>
    </h5>
    <h5>All rights reserved</h5>
    </div>
    </section>
  )
}

export default Footer