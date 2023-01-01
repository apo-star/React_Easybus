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
import { useState } from "react";
import Spinner from "../../components/Spinner";
import {
  useDeleteUser,
  useMakeAdminUser,
  useUsersData,
} from "../../hooks/useUsersData";

function createData(name, email) {
  return { name, email };
}
const AllAdmin = () => {
  const { data: admins, isLoading } = useUsersData("admin");
  const { mutate: mutateDelete } = useDeleteUser("admin");

  if (isLoading) {
    return <Spinner />;
  }

  const handleRemove = (id) => {
    mutateDelete(id);
  };
  console.log(admins);
  return (
    <div>
      <TableContainer sx={{ width: "80%", position: "absolute", top: 120 }}>
        <Table sx={{ width: "70%", margin: "auto" }} aria-label="caption table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#212529" }}>
              <TableCell sx={{ color: "white" }}>User Name</TableCell>
              <TableCell sx={{ color: "white" }}>User Email</TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Remove
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admins.map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
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

export default AllAdmin;
