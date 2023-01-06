import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import Spinner from "../../components/Spinner";
import { useContactsData, useDeleteContact } from "../../hooks/useContactsData";
import { Button } from "@mui/material";

const AllContacts = () => {
  const { data: contacts, isLoading: isContactDataLoading } = useContactsData();
  const { mutate, isLoading } = useDeleteContact();

  if ((isContactDataLoading, isLoading)) {
    <Spinner />;
  }
  const handleRemove = (id) => {
    mutate(id);
  };
  return (
    <div>
      <TableContainer sx={{ width: "80%", position: "absolute", top: 120 }}>
        <Table sx={{ width: "70%", margin: "auto" }} aria-label="caption table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#212529" }}>
              <TableCell sx={{ color: "white" }}>User Name</TableCell>
              <TableCell sx={{ color: "white" }}>User Email</TableCell>
              <TableCell sx={{ color: "white" }}>Message</TableCell>
              <TableCell sx={{ color: "white" }}>Phone No.</TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Remove
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts?.map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.message}</TableCell>
                <TableCell>{row.phoneNo}</TableCell>
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

export default AllContacts;
