import React from 'react';

import bg_img from '../constants/globalFunctions';

const Background = (props) => {
  return (
    <div id='background-carousel'>
      <div id='myCarousel' className='carousel slide myCarouselDiv' data-ride='carousel'>
        <div className='carousel-inner myCarouselDiv' >
          <div className='item active bg_login' style={bg_img('images/bg1.jpg')} />
          <div className='item bg_login' style={bg_img('images/bg2.jpg')} />
          <div className='item bg_login' style={bg_img('images/bg3.jpg')} />
        </div>
      </div>
    </div >
  );
};

export default Background;
