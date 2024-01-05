import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img  src={images.chef} alt='chef'/>
    </div>
    <div className='app__chef-content app__wrapper_info'>
      <div>
        <SubHeading title='Chef’s Word' />
        <p className='headtext__cormorant'>What we believe in</p>
      </div>
      <div className='app__chef-content-content app__wrapper_info '>
        <div className='app__chef-content-quote'>
          <img  src={images.quote} alt='chef-quote'/>
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className='p__opensans'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img  src={images.sign} alt='chef-sign'/>
      </div>
    </div>
  </div>
);

export default Chef;
