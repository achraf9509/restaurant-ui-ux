import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { BsInstagram,BsArrowRight,BsArrowLeft} from 'react-icons/bs';

import './Gallery.css';

const Gallery = () => {
  const scrollRef=React.useRef(null);
  
  const galleryImage =[images.gallery01,images.gallery02,images.gallery03,images.gallery04];

  const handleSide = (direction) => {
    const {current}=scrollRef ;
   
    if(direction === 'left'){
        current.scrollLeft -=300
    }else {
      current.scrollLeft +=300
    }
  }


return (


  <div className='app__gallery app__bg section__padding flex__center '>
    
    <div className='app__gallery-content'>
      <SubHeading title='Instagram' />
      <p className='headtext__cormorant'>Photo Gallery</p>
      <p className='p__opensans' style={{marginTop:'1.5rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <button type='button' className='custom__button' style={{background:'#DCCA87', marginTop:'1.5rem'}} >View More</button>
    </div>
    
    <div className='app__gallery-image '>
      <div className='app__gallery-image-container' ref={scrollRef}>
        {galleryImage.map((image,index) => (
        <div className='app__gallery-image-card' key={`gallery-image ${index+1}`}>
          <img src={image} alt='card' />
          <BsInstagram  className='app__gallery-image-card-icon'/>
        </div>
          ))}
      </div>
      <div className='app__gallery-image-arrow'>
        <BsArrowLeft className='image-arrow'  onClick={() => handleSide('left')}/>
        <BsArrowRight className='image-arrow'  onClick={() => handleSide('right')}/>
      </div>
    </div>
  </div>
);
};

export default Gallery;
