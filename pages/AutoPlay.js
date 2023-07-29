

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";




export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className="mx-auto">
        <Slider {...settings}>
          <div className="miantext w-full h-[300px] md:h-[500px] lg:h-[500px]">
            <img src="./slilder01.jpg" className="w-full h-[300px] md:h-[500px] lg:h-[500px]" />
            <div class="center">
              <button class="w-[180px] p-5 md:mr-4 lg:mr-4 mb-5 rounded" style={{background:'#60a5fa'}}>About Us</button>
              <button class="w-[180px] p-5 mr-4 rounded" style={{background:'#06b6d4'}}>Admission</button>
            </div>
          </div>
          <div className="w-full h-[300px] md:h-[500px] lg:h-[500px] bg-red-300">
            <img src="./slilder02.jpg" className="w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          </div>
          <div className="w-full h-[300px] md:h-[500px] lg:h-[500px] bg-red-300">
          <img src="./slilder03.jpg" className="w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          </div>
          <div className="w-full h-[300px] md:h-[500px] lg:h-[500px] bg-red-300">
          <img src="./slilder04.jpg" className="w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          </div>
          <div className="w-full h-[300px] md:h-[500px] lg:h-[500px] bg-red-300">
          <img src="./slilder01.jpg" className="w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          </div>
          <div className="w-full h-[300px] md:h-[500px] lg:h-[500px] bg-red-300">
          <img src="./slilder03.jpg" className="w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          </div>
        </Slider>
      </div>
    );
  }
}