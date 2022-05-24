import React from 'react'
import {ImPhone} from 'react-icons/im'


const Header = () => {
  return (
   
     <article className='textandlogo'>
      <div className='container'>
       <h1 className='title'>WELCOME</h1>
       <p className='textpar'>Wolf Tattoo Studio -Street Green 21</p>
            <a href="tel: +363636/333-444"
       className="phone">
        <ImPhone/>
      +363636/333-444
      </a>
      </div>
     </article>

    
  )
}

export default Header