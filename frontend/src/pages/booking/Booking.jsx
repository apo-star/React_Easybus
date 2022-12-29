import { useGetAllSeatQuery } from "../../features/bus/busSlice";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import SingleBooking from "./SingleBooking";
import { DataContext } from "../../context/DataProvider";

const Booking = () => {
  const { data, isLoading } = useGetAllSeatQuery();
  const { journeyDate, fromToLocation } = React.useContext(DataContext);
  const bookings = data?.data;
  const filteredBooking = bookings.filter(
    (booking) =>
      booking.departureLocation == fromToLocation.from ||
      booking.arrivalLocation == fromToLocation.to);
  console.log(bookings);
  console.log(fromToLocation);
  console.log(filteredBooking);
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
