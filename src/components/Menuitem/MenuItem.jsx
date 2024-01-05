import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price,tags}) => (
  <div className='app__menuItem'>
    <div className='app__menuItem-heading'>
      <div className='app__menuItem-title'>
         <p>{title}</p>
      </div>
      <div className='app__menuItem-dash'/>
      <div className='app__menuItem-price'>
        <p>{price}</p>
      </div>
    </div>
    <div className='app__menuItem-tags'>
      <p>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
