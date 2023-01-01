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
import useDocTitle from "../../hooks/useDocTitle";

function createData(name, email) {
  return { name, email };
}
const Dashboard = () => {
  useDocTitle("All-Users");
  const [admin, setAdmin] = useState(false);
  const { data: users, isLoading } = useUsersData("user");
  const { mutate: mutateDelete } = useDeleteUser("user");
  const { mutate: mutateMakeAdmin } = useMakeAdminUser();

  if (isLoading) {
    return <Spinner />;
  }

  const handleRemove = (id) => {
    mutateDelete(id);
  };
  const handleAdmin = (id) => {
    mutateMakeAdmin(id);
  };

  return (
    <div>
      <TableContainer sx={{ width: "80%", position: "absolute", top: 120, 
    }}>
        <Table sx={{ width: "70%", margin: "auto" }} aria-label="caption table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#212529" }}>
              <TableCell sx={{ color: "white" }}>User Name</TableCell>
              <TableCell sx={{ color: "white" }}>User Email</TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Make Admin
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Remove
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell align="center">
                  {!admin ? (
                    <Chip
                      label="Make Admin"
                      onClick={() => handleAdmin(row._id)}
                    />
                  ) : (
                    <Chip
                      label="Make Admin"
                      onClick={() => handleAdmin(row._id)}
                      sx={{ backgroundColor: "blue" }}
                    />
                  )}
                </TableCell>
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

export default Dashboard;
