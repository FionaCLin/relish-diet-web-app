import React from 'react';
import bg1 from './images/bg1.jpg';
import bg2 from './images/bg2.jpg';
import bg3 from './images/bg3.jpg';

const Background = (props) => {
  return (
    <div id="background-carousel">
      <div id="myCarouseldiv" className="carousel slide" data-ride="carousel">
        <div className="myCarouselsubdiv carousel-inner" >
          <div className="item active">
           <img src={bg1}  alt="bg1.jpg" />
        </div>
          <div className="item">
           <img src={bg2}  alt="bg2.jpg" />
        </div>
          <div className="item">
           <img src={bg3}  alt="bg3.jpg" />
        </div>
      </div>
    </div>
    </div >
  )
}

export default Background;
