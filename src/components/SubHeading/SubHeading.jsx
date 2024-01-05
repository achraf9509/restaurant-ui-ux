import React from 'react';
import {images} from '../../constants'
import './SubHeading.css' 


const SubHeading = ({title}) => (
  <div className='app__subheading'>
    <p>{title}</p>
    <img  src={images.spoon}  alt='subheading' />
  </div>
);

export default SubHeading;
