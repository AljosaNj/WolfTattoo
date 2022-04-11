import React from 'react'
import logo from '../pictures/logohead.png'
import {ImPhone} from 'react-icons/im'


const Header = () => {
  return (
    <div className='header'>
     <article className='textandlogo'>
       <img src={logo} className="logoheader" alt="logo" />
       <h1 className='title'>WELCOME</h1>
       <p className='textpar'>Wolf Tattoo Studio -Street Green 21</p>
            <a href="tel: +363636/333-444"
       className="phone">
        <ImPhone/>
      +363636/333-444
      </a>
     </article>

    </div>
  )
}

export default Header