"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./slide";
 
const Banner = () => {
    var settings = {
    dots:true,
    infinite:true,
    slideToShow:1,
    slidesToScroll:1,
    autoplay:true,
    pauseOnHover:false,
    }

    const slideData = [
        {
        id:0,
        img:'/banner2.jpg',
        title:'',
        mainTitle:'Crea tu remera personalizada.',
        price:'$500'
    },
]

return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

 
 export default Banner;