import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination,Autoplay } from "swiper";
import { Box } from "@mui/system";

export default function HeroSlider() {
  const images = [
    'https://i.ibb.co/jyxGVJf/flor-najera-q-LU1wz9nq-BI-unsplash.jpg',
    'https://i.ibb.co/sJjgKRp/valentyn-chernetskyi-zko-CS4u3-Co-unsplash.jpg',
    'https://i.ibb.co/kBfdB3y/chuttersnap-Da-Lstmw0r9-Y-unsplash.jpg'
  ];
  return (
    <>
      <Swiper pagination={false} modules={[Pagination,Autoplay]} className="mySwiper"
      autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        
      >{
        images.map(image => <SwiperSlide><Box
        component="img"
        sx={{
          width: '100%',
          height:'85vh',
          
        }}
        alt="The house from the offer."
        src={image}
      />  </SwiperSlide>)
      }
        
      </Swiper>
    </>
  );
}
