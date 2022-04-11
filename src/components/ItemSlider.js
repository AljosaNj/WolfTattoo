import React,{useState} from 'react';
import Slider from 'react-slick';

//import icons
import {BsArrowLeft,BsArrowRight,} from 'react-icons/bs';

// import images
import img1 from '../pictures/tattoo1.jpg';
import img2 from '../pictures/tattoo11.jpg';
import img3 from '../pictures/tattoo3.jpg';
import img4 from '../pictures/tattoo4.jpg';
import img5 from '../pictures/tattoo12.jpg';
import img6 from '../pictures/tattoo6.jpg';
import img7 from '../pictures/tattoo7.jpg';
import img8 from '../pictures/tattoo8.jpg';
import img9 from '../pictures/tattoo9.jpg';

const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9];

function SampleNextArrrow({onClick}) {
 return (
<div className='arrow arrow-right' onClick={onClick}>
 <BsArrowRight/>
</div>
 );
}

function SamplePrevArrow({onClick}) {
 return(
  <div className='arrow arrow-left' onClick={onClick}>
   <BsArrowLeft/>
  </div>
 );
}

function EmptyArrow({onClick}) {
 return (
  <div></div>
 );
}




const ItemSlider = () => {

 const [slideIndex,setSlideIndex] = useState(0);

  const settings = {
   dots:true,
   infinite:true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   // autoplaySpeed: 1000,
   beforeChange: (current,next) =>setSlideIndex(next),
   centerMode: true,
   nextArrow: <SampleNextArrrow/>,
   prevArrow: <SamplePrevArrow/>,
   appendDots: (dots) => (
     <div>
      <ul style={{margin: "0px"}}>{dots}</ul>
     </div>
   ),
   customPaging: (current, next) => (
   <div className={current === slideIndex ? 'dot dot-active' : 'dot'}></div>
   ),
  responsive: [
   {
    breakpoint: 768,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     dots: false,
     nextArrow: <EmptyArrow/>,
     prevArrow: <EmptyArrow/>,
    }
   }]
 };

  return (
    <div className='backgroundpic'>
   <div  className='container'>
    <h2 className='headerslider'>Tattoo Gallery</h2>
     <div className='slider'>
      <Slider {...settings}>
       {
        images.map((img,index) => (
         <div className={index === slideIndex ? 'slide slide-active' : 'slide'} key={index}>
            <img src={img} alt="" />
         </div>
        ))
       }

      </Slider>
    </div>
   </div>
  </div>
  )
}

export default ItemSlider