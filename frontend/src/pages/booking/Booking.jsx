import { useGetAllSeatQuery } from "../../features/bus/busSlice";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import SingleBooking from "./SingleBooking";
import Spinner from "../../components/Spinner";

const Booking = () => {
  const { data, isLoading } = useGetAllSeatQuery();
  const bookings = data?.data;

  if(isLoading) {
    return <Spinner></Spinner>
  }

  return (
    <Box
      sx={{
        py: "30px",
        backgroundColor: "#FBF9F2",
        height: "auto",
        mt: "80px",
      }}
    >
      {bookings?.map((booking) => (
        <SingleBooking key={booking._id} booking={booking}></SingleBooking>
      ))}
    </Box>
  );
};

export default Booking;
