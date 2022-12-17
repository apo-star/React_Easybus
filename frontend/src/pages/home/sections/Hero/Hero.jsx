import { Box, Button } from "@mui/material";
import ToggleTable from "./ToggleTable";
import * as React from 'react';
// import Card from '@mui/joy/Card';
// import CardCover from '@mui/joy/CardCover';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';


const Hero = () => {
  return <div>
    <Box
        component="img"
        sx={{
          width: '100%',
          height:'85vh',
          
        }}
        alt="The house from the offer."
        src="https://i.ibb.co/kBfdB3y/chuttersnap-Da-Lstmw0r9-Y-unsplash.jpg"
      />
        <div style={{position: 'absolute', top:'40%', paddingLeft: '10%',background:
            ' linear-gradient(to top, rgba(106, 90, 205,0.8), rgba(0,0,0,0) )',width: '100%',
          height:'60vh',}}>
        <h1>10% Winter Discount Is Going On!</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus.</p>
        <Button variant="contained" size="large" sx={{mt:5}}>
          Register/Sign In
        </Button>
      </div>
       {/* <Card sx={{ minHeight: '280px', width: 320 }}>
      <CardCover>
        <img
          src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
          srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          Yosemite National Park
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          California, USA
        </Typography>
      </CardContent>
    </Card> */}
      <ToggleTable></ToggleTable>
  </div>
};

export default Hero;
