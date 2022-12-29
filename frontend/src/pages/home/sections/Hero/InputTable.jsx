import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function BasicTable() {
  const [age, setAge] = useState("");
  const districts = [
    {
      value: "Please Select Location",
      label: "Please Select Location",
    },
    {
      value: "Dhaka",
      label: "Dhaka",
    },
    {
      value: "Chittagong",
      label: "Chittagong",
    },
    {
      value: "Sylhet",
      label: "Sylhet",
    },
    {
      value: "Rajshahi",
      label: "Rajshahi",
    },
    {
      value: "Khulna",
      label: "Khulna",
    },
    {
      value: "Barishal",
      label: "Barishal",
    },
  ];
  const [toLocation, setToLocation] = useState(districts);
  const handleSelect = (selectedvalue) => {
    const remaining = districts.filter(
      (district) => district.value !== selectedvalue
    );
    setToLocation(remaining);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <form>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, lg: 4, md: 3 }}
        >
          <Grid item xs={12} lg={4} md={12}>
            <TextField
              id="from"
              select
              label="From"
              defaultValue="Please Select Location"
              variant="standard"
              sx={{ width: "100%" }}
              onChange={(e) => handleSelect(e.target.value)}
            >
              {districts.map((option, i) => (
                <MenuItem key={i} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} lg={4} md={12}>
            <TextField
              id="to"
              select
              label="To"
              sx={{ width: "100%" }}
              defaultValue="Please Select Location"
              variant="standard"
            >
              {toLocation.map((option, i) => (
                <MenuItem key={i} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={12} lg={4} sx={{display: 'flex', alignItems:'end'}}>
            <Input
              id="filled-basic"
              label="Filled"
              variant="filled"
              sx={{ width: "100%" }}
              type="date"
            />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
