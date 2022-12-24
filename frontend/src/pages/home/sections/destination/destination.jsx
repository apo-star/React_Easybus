import { Box, Button, Stack, Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LanguageIcon from '@mui/icons-material/Language';
import React from 'react'
import { useCountUp } from 'react-countup';

import './counter.css';
import { useNavigate } from 'react-router-dom';



const Destination = () => {
  useCountUp({
    ref: 'customerCounter',
    start: 5000,
    end: 5500,
    duration: 0.9,
    suffix: "+",
    enableScrollSpy: true,
  });
  useCountUp({
    ref: 'percentageCounter',
    start: 1,
    end: 100,
    suffix: "%",
    duration: 0.9,
    enableScrollSpy: true,
  });
  const navigate = useNavigate()
  return (
    <Box className="destination-bg" sx={{marginY:"30px"}}>
      <Stack maxWidth={"90%"} mx={"auto"} paddingTop={4} paddingY={'70px'}>
        <Box marginBottom={1}>
          <Typography marginBottom={1} variant="p"
           sx={{ backgroundColor: "#cd7e0f",borderRadius:"30px",px:'10px',py:"8px",color:'#ffffff',fontSize:"15px" }}>OFFER DEALS</Typography>
          <Typography marginBottom={3} variant="h4" sx={{ color: "#FFF", fontWeight: "bold",mt:"10px" }}>Your Destination awaits for you!</Typography>
          <Typography marginBottom={3} variant="p" sx={{ color: "#FFF" }}>The journey of a thousand miles begins with a single step.</Typography>
        </Box>
        <Box marginTop={3} maxWidth={"50%"} display="flex" justifyContent="space-between" sx={{ flexDirection: { xs: "column", lg: "row" }, }} >

          <Box width={280} height={85} sx={{ bgcolor: "#fff", marginBottom: { xs: "10px", lg: "0" } }} className="counter">

            <Box margin={1} display="flex" sx={{ flexDirection: 'row' }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "5px", flexDirection: 'column', width: "100%" }} >
                <strong><Typography variant="p" id="customerCounter" /></strong>
                <Typography variant='p' sx={{ marginTop: "5px", color: "#672a4b" }}>Happy Customer!</Typography>
              </Box>
              <Box>
                <PeopleAltIcon sx={{ color: "#672a4b" }} fontSize="large" />

              </Box>
            </Box>

          </Box>

          <Box width={280} height={85} sx={{ bgcolor: "#fff" }} className="counter">

            <Box margin={1} display="flex" sx={{ flexDirection: 'row' }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "5px", flexDirection: 'column', width: "100%" }} >
                <strong><Typography variant="p" id="percentageCounter" /></strong>
                <Typography variant='p' sx={{ marginTop: "5px", color: "#672a4b" }}>Client Setisfied</Typography>
              </Box>
              <Box>
                <LanguageIcon sx={{ color: "#672a4b" }} fontSize="large" />
              </Box>
            </Box>

          </Box>
        </Box>
        <Box marginTop={5}>
          <Typography variant="p" sx={{ fontWeight: "bold", color: "#fff" }}>Discover the latest offers & news and start planning <Button onClick={() => navigate("/contact")}>Contact Us</Button></Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default Destination