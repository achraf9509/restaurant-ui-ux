import React, { useState } from 'react';
import { meal } from '../../constants';
import {BsFillPlayFill,BsFillPauseFill} from 'react-icons/bs'

import './Intro.css';

const Intro = () => {
  const [playVideo,setPlayVideo]=useState(false);
 
  const vidref=React.useRef();

 
 
  const handleVideo=() =>{
    setPlayVideo(prevPlayVideo => !prevPlayVideo);
   
    if(playVideo){vidref.current.pause()}
    else {
      vidref.current.play()
    }
  }

  return (
    <div className='app__video'>
      <video 
      ref={vidref}
      src={meal}
      type='video/mp4'
      loop
      controls={false}
      muted
      />
      <div className='app__video-overlay flex__center' >
        <div className='app__video-overlay-circle flex__center' onClick={handleVideo}>
           { playVideo ? (<BsFillPauseFill />) : (<BsFillPlayFill />) }
        </div>
      </div>
    </div>
  );
};
  
  


export default Intro;
