import React from 'react';
import {SubHeading}  from '../../components';
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header section__padding' > 
    <div className='app__header-info'>
      <SubHeading title='Chase the new Flavour' />
      <h1>the key to fine dining</h1>
      <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button' className='p__btn'> Explore Menu</button>
    </div>
    <div className='app__header-image'>
      <img src={images.welcome} alt='images-welcom'/>
    </div>
  </div>
);

export default Header;
