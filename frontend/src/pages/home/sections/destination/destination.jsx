import { Box, Stack, Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LanguageIcon from '@mui/icons-material/Language';
import React from 'react'
import { useCountUp } from 'react-countup';

import './counter.css';
import { Container } from '@mui/system';

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
  return (
    <Box sx={{ bgcolor: "#672A4B" }} >
      <Stack maxWidth={"90%"} mx={"auto"} paddingTop={1}>
        <Box marginBottom={1}>
          <Typography variant="h4" sx={{ color: "#FFF" }}>OFFER DEALS</Typography>
          <Typography variant="h5" sx={{ color: "#FFF" }}>Your Destination awaits for you!</Typography>
          <Typography variant="p" sx={{ color: "#FFF" }}>The journey of a thousand miles begins with a single step.</Typography>
        </Box>
        <Box maxWidth={"60%"} display="flex" justifyContent="space-between" >

          <Box width={210} height={70} sx={{ bgcolor: "#fff" }} className="counter">

            <Box margin={1} display="flex" sx={{ flexDirection: 'column' }}>
              <Container sx={{display:"flex", justifyContent:"space-between",marginBottom:"5px"}} >
                <strong><Typography variant="p" id="customerCounter" /></strong>
                <PeopleAltIcon />
              </Container>
              <Container>
                <Typography variant='p' sx={{fontWeight:"bold",marginTop:"5px"}}>Happy Customer!</Typography>
              </Container>
            </Box>

          </Box>

          <Box width={210} height={70} sx={{ bgcolor: "#fff" }} className="counter">

            <Box margin={1} display="flex" sx={{ flexDirection: 'column' }}>
              <Container sx={{display:"flex", justifyContent:"space-between",marginBottom:"5px"}} >
                <strong><Typography variant="p" id="percentageCounter" /></strong>
                <LanguageIcon />
              </Container>
              <Container>
                <Typography variant='p' sx={{fontWeight:"bold",marginTop:"5px"}}>Client Setisfied</Typography>
              </Container>
            </Box>

          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default Destination