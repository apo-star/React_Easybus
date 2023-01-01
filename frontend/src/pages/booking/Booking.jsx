import { useGetAllSeatQuery } from "../../features/bus/busSlice";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import SingleBooking from "./SingleBooking";
import { DataContext } from "../../context/DataProvider";
import Spinner from "../../components/Spinner";

import { useSearchParams } from "react-router-dom";
import { useBusesDataByRoute } from "../../hooks/useBusesData";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const dateInSearch = searchParams.get("date");
  const route = {
    from,
    to,
  };
  const { data: bookings, isLoading } = useBusesDataByRoute(route);

  if (isLoading) {
    return <Spinner />;
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
        <SingleBooking
          key={booking._id}
          booking={booking}
          dateInSearch={dateInSearch}
        ></SingleBooking>
      ))}
    </Box>
  );
};

export default Booking;
