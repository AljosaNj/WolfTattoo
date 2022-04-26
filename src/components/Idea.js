import React from 'react';
import {service} from '../components/services';

const Idea = () => {
  return (
    <div className='ideacon'>

   {service.map((serv)=> {
    const {id,icon,title} = serv;
    return (
<article key={id} className='ideaart'>
 <span className='icons'>{icon}</span>
 <h4 className='titleprog'> {title}</h4>
</article>
    )
   })}


    </div>
  )
}

export default Idea