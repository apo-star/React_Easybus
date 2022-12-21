import { Box, Button, Slider, Typography } from "@mui/material";
import ToggleTable from "./ToggleTable";
import * as React from 'react';
import HeroSlider from "./HeroSlider";


const Hero = () => {
  
  return <div>
      <HeroSlider></HeroSlider>
      <Box sx={{position: 'absolute', top:'7%', paddingLeft: '10%',background:
            ' linear-gradient(to top, rgba(106, 90, 205,0.5), rgba(0, 0, 255,0.9) )',width: '100%',
          height:'94vh', zIndex:1000, display:'flex',alignItems:'center'}}>
        <Box>
          <Typography variant="h3" component="h1" sx={{color:'white'}}>
          10% Winter Sale Is Going On!
        </Typography>
        <Typography variant="p" component="p" sx={{color:'white'}}>
          Book and Grab Your Ticket ASAP
        </Typography>
        <Button variant="contained" size="large" sx={{mt:5, ":hover":{backgroundColor:'#622243'},color:'white'}} >
          Register/Sign In
        </Button>
        </Box>
      </Box>
      <ToggleTable></ToggleTable>
  </div>
};

export default Hero;
