import React from 'react';
import { useForm } from 'react-hook-form';
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from 'react';
import { useEffect } from 'react';

const categories = [
  {
    value: "Please Select Category",
    label: "Please Select Category",
  },
  {
    value: "AC",
    label: "AC",
  },
  {
    value: "Non AC",
    label: "Non AC",
  },
  {
    value: "Double Decker",
    label: "Double Decker",
  },
];
const schedule = [
  {
    value: "6:00 AM",
    label: "6:00 AM",
  },
  {
    value: "8:00 AM",
    label: "8:00 AM",
  },
  {
    value: "10:00 AM",
    label: "10:00 AM",
  },
  {
    value: "12:00 PM",
    label: "12:00 PM",
  },
  {
    value: "2:00 PM",
    label: "2:00 PM",
  },
  {
    value: "4:00 PM",
    label: "4:00 PM",
  },
  {
    value: "6:00 PM",
    label: "6:00 PM",
  },
];

const AddNewBus = () => {
  const [districts, setDistricts] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/api/v1/locations")
      .then((res) => res.json())
      .then((data) => setDistricts(data.data));
  },[])
  const [toLocation, setToLocation] = useState(districts);
  const handleSelect = (selectedvalue) => {
    const remaining = districts.filter(
      (district) => district.value !== selectedvalue
    );
    setToLocation(remaining);
  };
  const { register, handleSubmit } = useForm();
  const handleAddBus = (data) =>{
    data.fare = Number(data.fare);
    data.totalSeats = 24;
  data.seats = [
      {
        seatNo: "A1",
      },
      {
        seatNo: "A2",
      },
      {
        seatNo: "B1",
        
      },
      {
        seatNo: "B2",
      },
      {
        seatNo: "C1"
      },
      {
        seatNo: "C2"
      },
      {
        seatNo: "D1"
      },
      {
        seatNo: "D2"
      },
      {
        seatNo: "E1"
      },
      {
        seatNo: "E2"
      },
      {
        seatNo: "F1"
      },
      {
        seatNo: "F2"
      },
      {
        seatNo: "A3"
      },
      {
        seatNo: "A4"
      },
      {
        seatNo: "B3"
      },
      {
        seatNo: "B4"
      },
      {
        seatNo: "C3"
      },
      {
        seatNo: "C4"
      },
      {
        seatNo: "D3"
      },
      {
        seatNo: "D4"
      },
      {
        seatNo: "E3"
      },
      {
        seatNo: "E4"
      },
      {
        seatNo: "F3"
      },
      {
        seatNo: "F4"
      },
    ];
    fetch("http://localhost:5000/api/v1/bus/new", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
      console.log(data);
  }
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          item
          xs={12}
          lg={12}
          md={12}
          sx={{ margin: "auto", position: "absolute", top: 100, width: "60%" }}
        >
          <h2>Please provide the information below</h2>
          <form onSubmit={handleSubmit(handleAddBus)}>
            <Box
              noValidate
              autoComplete="off"
              sx={{
                maxWidth: "100%",
                display: "grid",
                gap: 2,
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <TextField
                id="name"
                label="Bus Name"
                variant="filled"
                {...register("name", { required: true })}
              ></TextField>
              <TextField
                id="fare"
                label="Bus Fare"
                variant="filled"
                {...register("fare", { required: true })}
              ></TextField>
              <TextField
                id="departureLocation"
                select
                label="Departure Location"
                defaultValue="Please Select Location"
                variant="filled"
                sx={{ width: "100%" }}
                {...register("departureLocation", { required: true })}
                onChange={(e) => handleSelect(e.target.value)}
              >
                {districts.map((option, i) => (
                  <MenuItem key={i} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="arrivalLocation"
                select
                label="Arrival Location"
                defaultValue="Please Select Location"
                variant="filled"
                sx={{ width: "100%" }}
                {...register("arrivalLocation", { required: true })}
                onChange={(e) => handleSelect(e.target.value)}
              >
                {toLocation.map((option, i) => (
                  <MenuItem key={i} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="departureTime"
                select
                label="Departure Time"
                defaultValue="Please Select Location"
                variant="filled"
                sx={{ width: "100%" }}
                {...register("departureTime", { required: true })}
                onChange={(e) => handleSelect(e.target.value)}
              >
                {schedule.map((option, i) => (
                  <MenuItem key={i} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="arrivalTime"
                select
                label="Arrival Time"
                defaultValue="Please Select Location"
                variant="filled"
                sx={{ width: "100%" }}
                {...register("arrivalTime", { required: true })}
                onChange={(e) => handleSelect(e.target.value)}
              >
                {schedule.map((option, i) => (
                  <MenuItem key={i} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="totalSeats"
                label="Total Seats"
                variant="filled"
                defaultValue={24}
                disabled
                {...register("totalSeats")}
              ></TextField>
              <TextField
                id="category"
                select
                label="Select Category"
                variant="filled"
                defaultValue="AC"
                {...register("category", { required: true })}
              >
                {categories.map((option, i) => (
                  <MenuItem key={i} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  // endIcon={}
                  sx={{ color: "white", width: "70%", marginTop: 5 }}
                >
                  Add Bus
                </Button>
              </Box>
          </form>
        </Grid>
      </Box>
    );
};

export default AddNewBus;