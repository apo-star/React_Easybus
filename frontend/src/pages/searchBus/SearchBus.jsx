import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { FormControl, Input, InputAdornment, InputLabel, MenuItem, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const currencies = [
  {
    value: 'Dhaka',
    label: 'Dhaka',
  },
  {
    value: 'Chittagong',
    label: 'Chittagong',
  },
  {
    value: 'Sylhet',
    label: 'Sylhet',
  },
  {
    value: 'Rajshahi',
    label: 'Rajshahi',
  },
  {
    value: 'Khulna',
    label: 'Khulna',
  },
  {
    value: 'Barishal',
    label: 'Barishal',
  },
];

export default function SearchBus() {
  const handleSearch = event =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const from = data.get("from");
    const to = data.get("to");
    console.log(data);
  }
  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
    <Box sx={{ width: '80%', margin:'7% auto' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} lg={6} md={12} sx={{margin: 'auto', }}>
            <Box
            component="img"
            sx={{width: "90%", height: '75vh'}}
            alt="The house from the offer."
            src="https://i.ibb.co/z4BW7vL/photo-1564694202883-46e7448c1b26-ixlib-rb-4-0.jpg"
          />  
        </Grid>
        <Grid item xs={12} lg={6} md={12} sx={{display:'flex', alignItems:'center', margin:'auto'}}>
          <Box component="form" noValidate
            autoComplete="off" sx={{maxWidth: '100%',}}
            onSubmit={handleSearch}>
            <TextField
              id="from"
              select
              label="From"
              defaultValue="Dhaka"
              variant="standard" 
            >
          {currencies.map((option) => (
            <MenuItem key={option.value} name='from' value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>
            <TextField
              id="to"
              select
              label="To"
              defaultValue="Dhaka"
              variant="standard"
              
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} name='to' value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <FormControl sx={{ m: 1 ,margin:'5% 0',width:'90%' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Date</InputLabel>
              <Input
                id="standard-adornment-amount"
                startAdornment={<InputAdornment position="start"></InputAdornment>}
                type='date'
              />
            </FormControl>
          <Box>
            <Button type='submit' variant="contained" endIcon={<SearchIcon />} sx={{ color: 'white',width:'90%'}}>
              Search
            </Button>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
}
