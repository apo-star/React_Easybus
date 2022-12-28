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
    console.log(data);
  }
  // const handleSelect = (selectedvalue) => {
  //   const remaining = districts.filter(
  //     (district) => district.value !== selectedvalue
  //   );
  //   setToLocation(remaining);
  // };

    return (
        <Box sx={{display: 'flex', justifyContent:'center'}}>
          <Grid
            item
            xs={12}
            lg={12}
            md={12}
            sx={{ margin: "auto",position: 'absolute', top: 100, width:'60%'}}
          >
            <h2>Please provide the information below</h2>
            <form onSubmit={handleSubmit(handleAddBus)} >
              <Box noValidate autoComplete="off" sx={{ maxWidth: "100%", display:'grid', gap:2, gridTemplateColumns: '1fr 1fr' }}>
                <TextField
                  id="name"
                  label="Bus Name"
                  variant="filled"
                  {...register("name", { required: true })}
                >
                </TextField>
                <TextField
                  id="fare"
                  label="Bus Fare"
                  variant="filled"
                  {...register("fare", { required: true })}
                >
                </TextField>
                <TextField
                  id="departureLocation"
                  label="Departure Location"
                  variant="filled"
                  {...register("departureLocation", { required: true })}
                >
                </TextField>
                <TextField
                  id="arrivalLocation"
                  label="Arrival Location"
                  variant="filled"
                  {...register("arrivalLocation", { required: true })}
                >
                </TextField>
                <TextField
                  id="departureTime"
                  label="Departure Time"
                  variant="filled"
                  {...register("departureTime", { required: true })}
                >
                </TextField>
                <TextField
                  id="arrivalTime"
                  label="Arrival Time"
                  variant="filled"
                  {...register("arrivalTime", { required: true })}
                >
                </TextField>
                <TextField
                  id="totalSeats"
                  label="Total Seats"
                  variant="filled"
                  {...register("totalSeats", { required: true })}
                >
                </TextField>
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
              <Box sx={{display:'flex', justifyContent:'center'}}>
                  <Button
                    type="submit"
                    variant="contained"
                    // endIcon={}
                    sx={{ color: "white", width: "60%", marginTop: 5 }}
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