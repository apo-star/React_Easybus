import { Box, Stack } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LanguageIcon from '@mui/icons-material/Language';
import React from 'react'
import CountUp from 'react-countup';

import './counter.css';

const Destination = () => {
  return (
    <Box sx={{ bgcolor: "#672A4B" }}>
      <Stack maxWidth={"90%"} mx={"auto"}>
        <h3>OFFER DEALS</h3>
        <h4>Your Destination awaits for you!</h4>
        <p>The journey of a thousand miles begins with a single step.</p>

        <Box maxWidth={"60%"} display="flex" justifyContent="space-between" spacing={2} >

          <Box width={210} height={60} sx={{ bgcolor: "#fff" }} className="counter">

            <Box margin={1} display="flex" justifyContent="space-between" >
              <div>
                <CountUp start={1} duration={0.5} end={20} />
                <span>+</span>
              </div>
              <PeopleAltIcon />
            </Box>

          </Box>

          <Box margin={1} width={210} height={60} sx={{ bgcolor: "#fff" }} className="counter">
            <CountUp start={1} duration={-.5} end={20}></CountUp>
            <LanguageIcon />
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default Destination