import React from 'react';
import { MenuItem, SubHeading } from '../../components';
import { data, images } from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu section__padding ' id='menu'>
    
    <div className='app__specialMenu-subheading'>
      <SubHeading  title='Menu that fits you palatte'/>
      <h1>Today’s Special</h1>
    </div>

    <div className='app__specialMenu-content'>
     
      <div className='app__specialMenu-content-wine'>
          <h3>Wine & Beer</h3>
        <div className='app__specialMenu-content-wine-menu'>
          {data.wines.map((wine,index) => (
          <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />))}
        </div>
      </div>

      <div className='app__specialMenu-content-image'>
        <img  src={images.menu} alt='menu-img' />
      </div>

      <div className='app__specialMenu-content-cocktails'>
          <h3>Cocktails</h3>
        <div className='app__specialMenu-content-cocktails-menu'>
          {data.cocktails.map((cocktail,index) => (<MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />))}
        </div>
      </div>
    </div>
    <div className='app__specialMenu-btn'>
      <button>View More</button>
    </div>

  </div>
);

export default SpecialMenu;
