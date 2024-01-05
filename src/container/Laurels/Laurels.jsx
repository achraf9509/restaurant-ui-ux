import React from 'react';
import { SubHeading} from '../../components';
import { data, images } from '../../constants';

import './Laurels.css';

const AwardCards = ({award:{imgUrl,title,subtitle}}) => (
  <div className='app__laurels-awardcards'>
    <img src={imgUrl} alt='award-cards'/>
    <div className='app__laurels-awardcard-content'>
      <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
      <p className='p__opensans'>{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className='app__laurels app__bg section__padding '>
    <div className='app__laurels-content'>
        <SubHeading title='Awards & recognition' />
        <p className='headtext__cormorant'>Our Laurels</p>
      
      <div className='app__laurels-content-awards'>
        {data.awards.map((award) => <AwardCards award={award} key={award.title} />)}
      
      </div>
    </div>
    
    <div className='app__laurels-image'>
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
