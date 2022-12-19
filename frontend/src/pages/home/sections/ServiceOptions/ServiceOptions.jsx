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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import DiscountIcon from "@mui/icons-material/Discount";
import { IconButton } from "@mui/material";

const options = [
  {
    icon: DepartureBoardIcon,
    serviceName: "Enjoy stress free travel",
    description:
      "If the goal is for stress-free travel, you can make use of various techniques both before and during your trip. Some of these require anticipating what factors might trigger your travel stress.",
  },
  {
    icon: HealthAndSafetyIcon,
    serviceName: "Safety Guarantee!",
    description:
      "Travelling with Easy Bus means having a reliable partner you can count on to take care of things that are truly important from planning to returning.",
  },

  {
    icon: AccessTimeIcon,
    serviceName: "Schedule On Time",
    description:
      "Get bus time table and bus route with bus times on arrival, departure & halt timings. Number of stops before bus reaches your destination. Get bus average delay, halt bus times and plan your trip accordingly",
  },
  {
    icon: DiscountIcon,
    serviceName: "Discount & Promo",
    description:
      "“Apply 5% Discount For Your ticket”. The same principle of urgency applies, however, the effectiveness now becomes relative because of the customer’s perception.",
  },
];

const ServiceOptions = () => {
  return (
    <div>
      <Box py={10} sx={{ bgcolor: "#FBF9F2" }}>
        <Stack maxWidth={"90%"} mx={"auto"}>
          <Typography variant="h6" fontSize={18} color={"#FFA903"}>
            WHY EASY BUS
          </Typography>
          <Typography variant="h4" fontWeight={600} marginBottom={4}>
            Our Great Service Options
          </Typography>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
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
                      ":hover": {
                        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.25)",
                        cursor: "pointer",
                        "& .service-icon": {
                          rotate: "360deg",
                          transition: "all 1s",
                        },
                      },
                    }}
                  >
                    <IconButton
                      aria-label="add to favorites"
                      sx={{
                        display: "flex",
                        paddingX: "12px",
                        paddingBottom: 0,
                        ":hover": {
                          background: "transparent",
                        },
                      }}
                    >
                      <option.icon
                        sx={{ fontSize: "2.5em", color: "#763F5B" }}
                        className="service-icon"
                      />
                    </IconButton>
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
