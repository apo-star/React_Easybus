import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Box, Stack } from "@mui/system";
import style from "./Brands.module.css";

const brands = [
  "https://themehut.co/html/geair/assets/img/brand/brand_img01.png",
  "https://themehut.co/html/geair/assets/img/brand/brand_img05.png",
  "https://themehut.co/html/geair/assets/img/brand/brand_img03.png",
  "https://themehut.co/html/geair/assets/img/brand/brand_img06.png",
  "https://themehut.co/html/geair/assets/img/brand/brand_img04.png",
  "https://themehut.co/html/geair/assets/img/brand/brand_img02.png",
  "https://themehut.co/html/geair/assets/img/brand/brand_img04.png",
  "https://themehut.co/html/geair/assets/img/brand/brand_img01.png",
  "https://themehut.co/html/geair/assets/img/brand/brand_img05.png",
  "https://themehut.co/html/geair/assets/img/brand/brand_img06.png",
];
const Brands = () => {
  return (
    <Box sx={{ bgcolor: "#672A4B" }}>
      <Stack maxWidth={"90%"} mx={"auto"}>
        <Swiper
          slidesPerView={2}
          slidesPerGroup={2}
          spaceBetween={10}
          loop={true}
          speed={1500}
          loopFillGroupWithBlank={true}
          className={style.brandSwiper}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
        >
          {brands.map((brand, index) => (
            <SwiperSlide className={style.brandSlide} key={index}>
              <Box
                sx={{
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <img src={brand}></img>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Box>
  );
};

export default Brands;
