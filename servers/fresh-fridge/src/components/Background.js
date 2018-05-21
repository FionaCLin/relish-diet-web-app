import React from 'react';
import bg1 from './images/bg1.jpg';
import bg2 from './images/bg2.jpg';
import bg3 from './images/bg3.jpg';

const bg_img = (img) => {
  return ({
    backgroundImage: 'url(' + img + ')'
  })
}

const Background = (props) => {
  return (
    <div id="background-carousel">
      <div id="myCarousel" className="carousel slide myCarouselDiv" data-ride="carousel">
        <div className="carousel-inner myCarouselDiv" >
          <div className="item active bg_login" style={ bg_img(bg1) }></div>
          <div className="item bg_login" style={ bg_img(bg2) }></div>
          <div className="item bg_login" style={ bg_img(bg3) }></div>
        </div>
      </div>
    </div >
  )
}

export default Background;
