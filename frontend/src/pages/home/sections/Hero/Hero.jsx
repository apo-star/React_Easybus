import { Box } from "@mui/material";
import './Hero.css'

const Hero = () => {
  return <div className="bg-hero">
    <Box
        component="img"
        sx={{
          width: '100%',
          height:'85vh'
          
        }}
        alt="The house from the offer."
        src="https://i.ibb.co/kBfdB3y/chuttersnap-Da-Lstmw0r9-Y-unsplash.jpg"
      />
      <div style={{position: "absolute", top: 10,left: "50%",transform: "translateX(-50%)",}}> Some text</div>
  </div>
};

export default Hero;
