import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormControl, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';



export default function BasicTable() {
  const [age, setAge] = useState('');
  const districts = [
  {
    value:"Please Select Location",
    label:"Please Select Location"
  },
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
  const [toLocation, setToLocation] = useState(districts);
  const handleSelect = (selectedvalue) =>{
    const remaining = districts.filter(district => district.value !== selectedvalue);
    setToLocation(remaining);
  }
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <TableContainer component={Paper} sx={{boxShadow:"0px 0px 0px 12px #0000000d" }}>
      <Table sx={{ minWidth: 750}} aria-label="simple table">
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" sx={{width:'20%'}}>
                <TextField
              id="from"
              select
              label="From"
              defaultValue="Please Select Location"
              variant="standard" 
              onChange={(e) => handleSelect(e.target.value)}
            >
          {districts.map((option,i) => (
            <MenuItem key={i} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
                </TextField>
              </TableCell>
              <TableCell align="right" sx={{width:'20%'}}>
                <TextField
              id="to"
              select
              label="To"
              defaultValue="Please Select Location"
              variant="standard" 
            >
          {toLocation.map((option,i) => (
            <MenuItem key={i} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
                </TextField>
              </TableCell>
              <TableCell align="right" sx={{width:'20%'}}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                  variant="standard"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Adventure'}>Adventure</MenuItem>
                  <MenuItem value={'Family Tour'}>Family Tour</MenuItem>
                </Select>
              </FormControl>
              </TableCell>
              <TableCell align="right" sx={{width:'20%'}}>
                <TextField id="filled-basic" label="Passengers"variant="standard"/>
              </TableCell>
              <TableCell align="right" sx={{width:'20%'}}>
                <Input id="filled-basic" label="Filled" variant="filled" type='date' />
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}