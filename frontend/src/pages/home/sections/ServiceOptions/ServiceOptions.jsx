import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Box, Stack } from "@mui/system";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import style from "./ServiceOptions.module.css";

const options = [
  {
    img: "https://themehut.co/html/geair/assets/img/icon/service_icon03.png",
    serviceName: "Enjoy stress free travel",
    description:
      "Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.",
  },
  {
    img: "https://themehut.co/html/geair/assets/img/icon/service_icon01.png",
    serviceName: "Enjoy stress free travel",
    description:
      "Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.",
  },

  {
    img: "https://themehut.co/html/geair/assets/img/icon/service_icon02.png",
    serviceName: "Enjoy stress free travel",
    description:
      "Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.",
  },
  {
    img: "https://themehut.co/html/geair/assets/img/icon/service_icon01.png",
    serviceName: "Enjoy stress free travel",
    description:
      "Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.",
  },
];

const ServiceOptions = () => {
  return (
    <div>
      <Box py={10} sx={{ bgcolor: "#FBF9F2" }}>
        <Stack maxWidth={"90%"} mx={"auto"}>
          <Typography variant="h6" fontSize={18} color={"#FFA903"}>
            WHY AIR GEAIR
          </Typography>
          <Typography variant="h4" fontWeight={600} marginBottom={4}>
            Our Great Flight Options
          </Typography>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={style.serviceSwiper}
          >
            {options.map((option) => (
              <SwiperSlide key={Math.random()} className={style.optionSlide}>
                <Box>
                  <Card
                    sx={{
                      paddingTop: "20px",
                      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.05)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        textAlign: "left",
                        marginX: "15px",
                      }}
                      image={option.img}
                      alt="Paella dish"
                    />
                    <CardContent sx={{ marginBottom: "0" }}>
                      <Typography
                        variant="h6"
                        color={"#763F5B"}
                        fontWeight={600}
                        textAlign={"left"}
                        paddingY={1}
                      >
                        {option.serviceName}
                      </Typography>
                      <Typography
                        paragraph
                        color="text.secondary"
                        textAlign={"left"}
                      >
                        {option.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Box>
    </div>
  );
};

export default ServiceOptions;
