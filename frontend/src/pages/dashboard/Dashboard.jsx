import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Chip } from "@mui/material";

function createData(name, email) {
  return { name, email };
}

const rows = [
  createData('John Doe', 'john@gmail.com'),
  createData('John Doe', 'john@gmail.com'),
  createData('John Doe', 'john@gmail.com'),
];

const Dashboard = () => {

  return <div>
     <TableContainer  sx={{  width: '80%', position: 'absolute', top: 120 }}>
      <Table sx={{ width: '60%', margin:'auto' }} aria-label="caption table">
        <TableHead>
          <TableRow sx={{backgroundColor: '#212529', }}>
            <TableCell align="center" sx={{color: 'white'}}>User Name</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>User Email</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">
                <Button sx={{color:'red'}}>
                  <DeleteIcon></DeleteIcon>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>;
};

export default Dashboard;
