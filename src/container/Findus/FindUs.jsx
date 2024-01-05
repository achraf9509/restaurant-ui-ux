import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <p className='headtext__cormorant' style={{marginTop:'1rem'}}>Find Us</p>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className='p__cormorant' style={{color:'#DCCA87',margin:'2rem 0'}}>Opening Hours</p>
        <p style={{color:'white',marginBottom:'1rem'}} >Mon - Fri: 10:00 am - 02:00 am</p>
        <p style={{color:'white'}} >Sat - Sun: 10:00 am - 03:00 am</p>
        <button type='button' className='custom__button' style={{background:'#DCCA87',marginTop:'2.5rem'}}> Visit Us</button>
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus' />
    </div>
  </div>
);

export default FindUs;
