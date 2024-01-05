import React from 'react';

import './Newsletter.css';
import { images } from '../../constants';

const Newsletter = () => (
  <div className='app__newsletter section__padding'>
    <div className='app_newsletter-content'>
      <p className='p__cormorant'>Newsletter</p>
      <img  src={images.spoon} alt='spoon'/>
      <p className='headtext__cormorant'>Subscribe to Our Newsletter</p>
      <p className='p__opensans'>And never miss latest Updates!</p>
    </div>
    <div className='app__newsletter-input'>
      <input type='email' placeholder='Email Address'/>
      <button type='button' className='custom__button' style={{marginLeft:'32px',background:'#DCCA87'}}>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
