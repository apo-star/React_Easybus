import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';



export default function BasicTable() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell align="right">To</TableCell>
            <TableCell align="right">Depart</TableCell>
            <TableCell align="right">Return</TableCell>
            <TableCell align="right">Passenger</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <TextField id="filled-basic" label="From" variant="filled" />
              </TableCell>
              <TableCell align="right"><TextField id="filled-basic" label="To" variant="filled" /></TableCell>
              <TableCell align="right">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Adventure'}>Adventure</MenuItem>
          <MenuItem value={'Family Tour'}>Family Tour</MenuItem>
        </Select>
      </FormControl></TableCell>
              <TableCell align="right"><p>Depart-Return</p></TableCell>
              <TableCell align="right"><TextField id="filled-basic" label="Passengers" variant="filled" /></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}