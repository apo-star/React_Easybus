import { useGetAllSeatQuery } from "../../features/bus/busSlice";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import SingleBooking from "./SingleBooking";

const Booking = () => {
  const { data, isLoading } = useGetAllSeatQuery();
  const bookings = data?.data;
  console.log(bookings);
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <Box
      sx={{
        py: "30px",
        backgroundColor: "#FBF9F2",
        height: "80vh",
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
