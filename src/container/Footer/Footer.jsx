import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import {FiFacebook,FiInstagram,FiTwitter} from 'react-icons/fi'
import './Footer.css';

const Footer = () => (
  <div className='app__globalfooter'>
    <FooterOverlay />
    <Newsletter />
    <div className='app__footer section__padding '>
      <div className='app__footer-contact'>
        <p className='p__cormorant'style={{marginBottom:'1rem'}}>Contact Us</p>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>
      <div className='app__footer-logo'>
        <img src={images.gericht}  alt="logo" />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} style={{marginTop:'0.75rem'}} alt='logo-spoon' />
        <div className='app__footer-rs'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-workinghours'>
        <p className='p__cormorant'style={{marginBottom:'1rem'}}>Monday-Friday:</p>
        <p className='p__opensans'>08:00 am -12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>07:00am -11:00 pm</p>
      </div>
    </div>
    <div className='app__footer-copyright flex__center'>
      <p className='p__opensans'>2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
