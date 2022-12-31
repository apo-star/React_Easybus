import { useGetAllSeatQuery } from "../../features/bus/busSlice";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import SingleBooking from "./SingleBooking";
import { DataContext } from "../../context/DataProvider";
import Spinner from "../../components/Spinner";
import { useSearchParams } from "react-router-dom";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const fromInSearch = searchParams.get("from");
  const toInSearch = searchParams.get("to");
  const dateInSearch = searchParams.get("date");
  const { data, isLoading } = useGetAllSeatQuery();
  const { journeyDate, fromToLocation } = React.useContext(DataContext);
  const bookings = data?.data;

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  const filteredBooking = bookings.filter(
    (booking) =>
      booking.departureLocation === fromToLocation.from &&
      booking.arrivalLocation === fromToLocation.to
  );

  console.log(fromToLocation);
  console.log(journeyDate);
  return (
    <Box
      sx={{
        py: "30px",
        backgroundColor: "#FBF9F2",
        height: "auto",
        mt: "80px",
      }}
    >
      {filteredBooking?.map((booking) => (
        <SingleBooking key={booking._id} booking={booking}></SingleBooking>
      ))}
    </Box>
  );
};

export default Booking;
