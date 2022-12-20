import { Box, Button, Slider, Typography } from "@mui/material";
import ToggleTable from "./ToggleTable";
import * as React from 'react';
import HeroSlider from "./HeroSlider";


const Hero = () => {
  
  return <div>
    {/* <Box
        component="img"
        sx={{
          width: '100%',
          height:'85vh',
        }}
        alt="The house from the offer."
        src="https://i.ibb.co/jyxGVJf/flor-najera-q-LU1wz9nq-BI-unsplash.jpg"
      /> */}
      <HeroSlider></HeroSlider>
      <Box sx={{position: 'absolute', top:'7%', paddingLeft: '10%',background:
            ' linear-gradient(to top, rgba(106, 90, 205,0.5), rgba(0, 0, 255,0.6) )',width: '100%',
          height:'94vh', zIndex:1000, display:'flex',alignItems:'center'}}>
        <Box>
          <Typography variant="h3" component="h1" sx={{color:'white'}}>
          10% Winter Sale Is Going On!
        </Typography>
        <Typography variant="p" component="p" sx={{color:'white'}}>
          Book and Grab Your Ticket ASAP
        </Typography>
        </Box>
      </Box>
        {/* <div style={{position: 'absolute', top:'40%', paddingLeft: '10%',background:
            ' linear-gradient(to top, rgba(106, 90, 205,0.8), rgba(0,0,0,0) )',width: '100%',
          height:'60vh', }}>
        <h1>10% Winter Discount Is Going On!</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus.</p>
        <Button variant="contained" size="large" sx={{mt:5}}>
          Register/Sign In
        </Button>
      </div> */}
      <ToggleTable></ToggleTable>
  </div>
};

export default Hero;
