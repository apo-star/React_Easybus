import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Chip } from "@mui/material";
import Spinner from "../../components/Spinner";
import { useBusesData, useDeleteBus } from "../../hooks/useBusesData";

function createData(name, fare, seat) {
  return { name, fare, seat };
}

const AllBus = () => {
  const { data: buses, isLoading } = useBusesData();
  const { mutate } = useDeleteBus();

  if (isLoading) {
    return <Spinner />;
  }

  const handleRemove = (id) => {
    mutate(id);
  };
  return (
    <div>
      <TableContainer sx={{ width: "80%", position: "absolute", top: 120 }}>
        <Table sx={{ width: "60%", margin: "auto" }} aria-label="caption table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#212529" }}>
              <TableCell align="center" sx={{ color: "white" }}>
                Bus Name
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Bus Fare
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Total Seat
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Remove
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {buses.map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.fare}</TableCell>
                <TableCell align="center">{row.totalSeats}</TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => handleRemove(row._id)}
                    sx={{ color: "red" }}
                  >
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

export default AllBus;
