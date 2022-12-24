import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 
import InputTable from './InputTable';
import { Button } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ 
      width: '70%',
      m: 'auto',
      position:"relative",
      top:"-85px",
      backgroundColor: 'white',
      boxShadow:"0 5px 10px 2px #0000002e", 
      borderRadius: 5, 
      padding: "20px",
      zIndex:1000 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="Ticket Booking" {...a11yProps(0)} />
          <Tab label="My Trip" {...a11yProps(1)} />
          <Tab label="Check In" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <InputTable></InputTable>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InputTable></InputTable>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InputTable></InputTable>
      </TabPanel>
      <Button variant="contained" sx={{":hover":{backgroundColor:'#622243',color:'#ffffff'}}}>Book Now</Button>
    </Box>
  );
}