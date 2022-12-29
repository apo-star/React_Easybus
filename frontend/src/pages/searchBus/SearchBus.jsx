import * as React from "react";
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
import SearchIcon from "@mui/icons-material/Search";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Link, useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
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
export default function SearchBus() {
  const [toLocation, setToLocation] = useState(districts);
  const { register, handleSubmit } = useForm();
  const { setJourneyDate, setFromToLocation, fromToLocation } = useContext(DataContext);
  const navigate = useNavigate();
  const handleSearch = (data) => {
    console.log(data);
    setJourneyDate(data.date);
    setFromToLocation({from: data.from, to: data.to});
    navigate('/booking');
  };
  console.log(fromToLocation);
  const handleSelect = (selectedvalue) => {
    const remaining = districts.filter(
      (district) => district.value !== selectedvalue
    );
    setToLocation(remaining);
  };
  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <Box sx={{ width: "80%", margin: "7% auto" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} lg={6} md={12} sx={{ margin: "auto" }}>
            <Box
              component="img"
              sx={{ width: "90%", height: "75vh" }}
              alt="The house from the offer."
              src="/busImage.PNG"
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            md={12}
            sx={{ display: "flex", alignItems: "center", margin: "auto" }}
          >
            <form onSubmit={handleSubmit(handleSearch)}>
              <Box noValidate autoComplete="off" sx={{ maxWidth: "100%" }}>
                <TextField
                  id="from"
                  select
                  label="From"
                  defaultValue="Please Select Location"
                  variant="standard"
                  sx={{ width: "100%" }}
                  {...register("from", { required: true })}
                  onChange={(e) => handleSelect(e.target.value)}
                >
                  {districts.map((option, i) => (
                    <MenuItem key={i} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="to"
                  select
                  label="To"
                  defaultValue="Please Select Location"
                  variant="standard"
                  sx={{ width: "100%" }}
                  {...register("to", { required: true })}
                >
                  {toLocation.map((option, i) => (
                    <MenuItem key={i} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <FormControl
                  sx={{ m: 1, margin: "5% 0", width: "90%" }}
                  variant="standard"
                >
                  <InputLabel htmlFor="standard-adornment-amount">
                    Date
                  </InputLabel>
                  <Input
                    id="standard-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    type="date"
                    {...register("date", { required: true })}
                  />
                </FormControl>
                <Box>
                  <Button
                  
                    type="submit"
                    variant="contained"
                    endIcon={<SearchIcon />}
                    sx={{ color: "white", width: "90%" }}
                  >
                    Search
                  </Button>
                </Box>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
