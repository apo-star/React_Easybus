import { Box, Button, Slider, Typography } from "@mui/material";
import ToggleTable from "./ToggleTable";
import * as React from 'react';
import HeroSlider from "./HeroSlider";


const Hero = () => {
  
  return <Box backgroundColor={'#FBF9F2'} sx={{position:'relative'}}>
      <HeroSlider></HeroSlider>
      <Box sx={{position: 'absolute', top:'0%', bottom:'0%', paddingLeft: '10%',background:
            'linear-gradient(to top, rgb(0 0 0 / 58%), rgb(0 0 0 / 90%) )',width: '100%',
          height:'95vh', zIndex:1000, display:'flex',alignItems:'center'}}>
        <Box>
          <Typography variant="h3" component="h1" sx={{color:'white'}}>
          10% Winter Sale Is Going On!
        </Typography>
        <Typography variant="p" component="p" sx={{color:'white'}}>
          Book and Grab Your Ticket ASAP
        </Typography>
        <Button variant="contained" size="large" 
          sx={{mt:5 ,fontWeight:600, ":hover":{backgroundColor:'#622243',color:'#ffffff'},color:'#2a2a2a',paddingY:'12px'}} >
          Register / Sign In
        </Button>
        </Box>
      </Box>
      <ToggleTable></ToggleTable>
  </Box>
};

export default Hero;
