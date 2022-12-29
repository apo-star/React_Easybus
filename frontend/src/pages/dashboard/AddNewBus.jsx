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
const AddNewBus = () => {
  const { register, handleSubmit } = useForm();
  const handleAddBus = (data) =>{
    data.fare = Number(data.fare);
    data.totalSeats = 24;
  data.seats = [
      {
        seatNo: "A1",
        _id: "63ac85b9816bf53fbffe75e0",
        seatAvailability: [
          {
            bookingDate: "30/12/2022",
            isBooked: true,
            _id: "63ad4b726359bd18ae131c85",
          },
        ],
      },
      {
        seatNo: "A2",
        _id: "63ac85b9816bf53fbffe75e1",
        seatAvailability: [],
      },
      {
        seatNo: "B1",
        seatAvailability: [
          {
            bookingDate: "29/12/2022",
            isBooked: true,
            _id: "63ac85b9816bf53fbffe75e3",
          },
        ],
        _id: "63ac85b9816bf53fbffe75e2",
      },
      {
        seatNo: "B2",
        _id: "63ac85b9816bf53fbffe75e4",
        seatAvailability: [],
      },
      {
        seatNo: "C1",
        _id: "63ac85b9816bf53fbffe75e5",
        seatAvailability: [],
      },
      {
        seatNo: "C2",
        _id: "63ac85b9816bf53fbffe75e6",
        seatAvailability: [],
      },
      {
        seatNo: "D1",
        seatAvailability: [
          {
            bookingDate: "29/12/2022",
            isBooked: true,
            _id: "63ac85b9816bf53fbffe75e8",
          },
        ],
        _id: "63ac85b9816bf53fbffe75e7",
      },
      {
        seatNo: "D2",
        _id: "63ac85b9816bf53fbffe75e9",
        seatAvailability: [],
      },
      {
        seatNo: "E1",
        _id: "63ac85b9816bf53fbffe75ea",
        seatAvailability: [],
      },
      {
        seatNo: "E2",
        _id: "63ac85b9816bf53fbffe75eb",
        seatAvailability: [],
      },
      {
        seatNo: "F1",
        _id: "63ac85b9816bf53fbffe75ec",
        seatAvailability: [],
      },
      {
        seatNo: "F2",
        _id: "63ac85b9816bf53fbffe75ed",
        seatAvailability: [],
      },
      {
        seatNo: "A3",
        _id: "63ac85b9816bf53fbffe75ee",
        seatAvailability: [],
      },
      {
        seatNo: "A4",
        _id: "63ac85b9816bf53fbffe75ef",
        seatAvailability: [],
      },
      {
        seatNo: "B3",
        _id: "63ac85b9816bf53fbffe75f0",
        seatAvailability: [],
      },
      {
        seatNo: "B4",
        _id: "63ac85b9816bf53fbffe75f1",
        seatAvailability: [],
      },
      {
        seatNo: "C3",
        _id: "63ac85b9816bf53fbffe75f2",
        seatAvailability: [],
      },
      {
        seatNo: "C4",
        _id: "63ac85b9816bf53fbffe75f3",
        seatAvailability: [],
      },
      {
        seatNo: "D3",
        _id: "63ac85b9816bf53fbffe75f4",
        seatAvailability: [],
      },
      {
        seatNo: "D4",
        _id: "63ac85b9816bf53fbffe75f5",
        seatAvailability: [],
      },
      {
        seatNo: "E3",
        _id: "63ac85b9816bf53fbffe75f6",
        seatAvailability: [],
      },
      {
        seatNo: "E4",
        _id: "63ac85b9816bf53fbffe75f7",
        seatAvailability: [],
      },
      {
        seatNo: "F3",
        _id: "63ac85b9816bf53fbffe75f8",
        seatAvailability: [],
      },
      {
        seatNo: "F4",
        _id: "63ac85b9816bf53fbffe75f9",
        seatAvailability: [],
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
                label="Departure Location"
                variant="filled"
                {...register("departureLocation", { required: true })}
              ></TextField>
              <TextField
                id="arrivalLocation"
                label="Arrival Location"
                variant="filled"
                {...register("arrivalLocation", { required: true })}
              ></TextField>
              <TextField
                id="departureTime"
                label="Departure Time"
                variant="filled"
                {...register("departureTime", { required: true })}
              ></TextField>
              <TextField
                id="arrivalTime"
                label="Arrival Time"
                variant="filled"
                {...register("arrivalTime", { required: true })}
              ></TextField>
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
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  // endIcon={}
                  sx={{ color: "white", width: "60%", marginTop: 5 }}
                >
                  Add Bus
                </Button>
              </Box>
            </Box>
          </form>
        </Grid>
      </Box>
    );
};

export default AddNewBus;