import React from 'react';
import artist from '../pictures/artistpic.jpg';

const MyBio = () => {
  return (
    <div  className='mybio'>
      <article className='namebio'>
       <h2>My Bio</h2>
      </article>
      <article className='bio'>
        <figure className='biohead'>
           
         <img  src={artist} className='imgart' alt='' />
       <h3 className='nameart'>John Johnson</h3>
        </figure>
         <p className='paragaph'>I got my first tattoo in my friends house in Hungary. When the needle first hit my skin, it swept me off my feet. I knew I found my calling. So, I started to explore options for practicing tattooing, and I found a guy who sold me his homemade tattoo machine along with a two hours tutorial. </p>

          <p className='paragaph'>I made my first tattoo around 1993 on a stoned guy in a smoky, shady pub in Budapest. After that, I screwed up the skin of those who volunteered and wanted a tattoo for free. </p>
           <p className='paragaph'>Around 1996 I was able to place my first professional tattoo equipment order from that time big name Spaulding  Roger, USA. This was the first time I have seen and hold a professional tattoo machine in my hand. So we started to learn and teach each other. </p>
            <p className='paragaph'>I spend my corporate job saving on my passion and slowly I had a fully equipped tattoo room to keep learning and improving. </p>
             <p className='paragaph'>At the beginning of my tattooing journey, there was no one who could share his professional knowledge with me, so I learned as I went. I relied on careful observation, trial, error, and experimenting. The truth is that in tattooing you are the only one you can blame for your mistakes. But hey… Youre free. Nobody will force you to tattoo in his way. You set up your rules. Your improvement is only up to you… </p>
              <p className='paragaph'>In the past 25+ years, I managed to create my own art. I tattooed signature pieces on unique individuals and traveled the world to attend tattoo conventions from Ecuador to New Zealand, both as an artist and as a judge. Between 2010 and 2011, I was featured in tattoo magazines worldwide. I was honored to be featured in Black  Grey Tattoo  3 Volume Set  From Street Art to Fine Art. Marisa Kakoulas gave 29 pages to my artwork in the book which had already been ready to go into print, but she saw my portfolio and put a stop on the already printing book production to squezze my work in. </p>
            
      </article>
      </div>
  )
}

export default MyBio