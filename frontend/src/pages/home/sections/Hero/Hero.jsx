import { Box, Button, Slider, Typography } from "@mui/material";
import ToggleTable from "./ToggleTable";
import * as React from "react";
import HeroSlider from "./HeroSlider";
import { Link as RouterLink } from "react-router-dom";

const Hero = () => {
  return (
    <Box backgroundColor={"#FBF9F2"} sx={{ position: "relative" }}>
      <HeroSlider></HeroSlider>
      <Box
        sx={{
          position: "absolute",
          top: "0%",
          bottom: "0%",
          paddingLeft: {
            xs:'5%',
            sm:'5%',
            md:"4%",
            lg:'12%'
          },
          background:
            "linear-gradient(to top, rgb(0 0 0 / 58%), rgb(0 0 0 / 90%) )",
          width: "100%",
          height: "95vh",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h3" component="h1" sx={{ color: "white", fontSize: {
            xs: '45px',
            md: '55px',
          } }}>
            10% Winter Sale Is Going On!
          </Typography>
          <Typography variant="p" component="p" sx={{ color: "white" }}>
            Book and Grab Your Ticket ASAP
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/search-bus"
            size="large"
            sx={{
              mt: 5,
              fontWeight: 600,
              ":hover": { backgroundColor: "#622243", color: "#ffffff" },
              color: "#2a2a2a",
              paddingY: "12px",
            }}
          >
            Book Now
          </Button>
        </Box>
      </Box>
      <ToggleTable></ToggleTable>
    </Box>
  );
};

export default Hero;
