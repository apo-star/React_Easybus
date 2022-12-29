import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { Box } from "@mui/system";

export default function HeroSlider() {
  const images = [
    "https://i.ibb.co/jyxGVJf/flor-najera-q-LU1wz9nq-BI-unsplash.jpg",
    "https://i.ibb.co/sJjgKRp/valentyn-chernetskyi-zko-CS4u3-Co-unsplash.jpg",
    "https://i.ibb.co/GQ7KZV6/jonathan-borba-T5jzp-RTVF1-U-unsplash.jpg",
  ];
  return (
    <Box
      sx={{
        width: "100%",
        height: "95vh",
      }}
    >
      <Swiper
        pagination={false}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={false}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box component="img" alt="The house from the offer." src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
