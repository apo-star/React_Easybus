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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("John Doe", "john@gmail.com", "Chittagong"),
  createData("John Doe", "john@gmail.com", "Chittagong"),
  createData("John Doe", "john@gmail.com", "Chittagong"),
];

const Dashboard = () => {
  return (
    <div>
      <TableContainer
        component={Paper}
        sx={{ width: "80%", margin: "auto", position: "absolute", top: 120 }}
      >
        <Table sx={{ width: "100%" }} aria-label="caption table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#212529" }}>
              <TableCell align="center" sx={{ color: "white" }}>
                User Name
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                User Email
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Location
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Update
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Remove
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">
                  <Button>
                    <Chip
                      label="Update"
                      color="primary"
                      sx={{ color: "white" }}
                    />
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button sx={{ color: "red" }}>
                    <DeleteIcon></DeleteIcon>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
