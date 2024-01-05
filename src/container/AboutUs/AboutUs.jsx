import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus section__padding' id='aboutus'>
   
    <div className='app__aboutus-overlay'>
      <img src={images.G} alt='G-overlay' />
    </div>
   
    <div className='app__aboutus-content'>
     
      <div className='app__aboutus-content-about'>
        <h1>About Us</h1>
        <img src={images.spoon} alt='spoon' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='p__btn'> Know More</button>
      </div>
     
      <div className='app__aboutus-content-knife'>
        <img src={images.knife} alt='knife' />
      </div>
     
      <div className='app__aboutus-content-history'>
        <h1>Our History</h1>
        <img src={images.spoon} alt='spoon' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='p__btn'> Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
