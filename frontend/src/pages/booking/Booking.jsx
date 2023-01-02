import { useGetAllSeatQuery } from "../../features/bus/busSlice";
import * as React from "react";
import { Box, Typography ,Grid,Skeleton } from "@mui/material";
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

  if(isLoading){
    return (
      <Grid container spacing={3} justifyContent="center" sx={{ p: "50px", mt: "100px",mb: "20px",}}>
        {new Array(3).fill(0).map((route, index) => (
          <Grid key={index} item xs={12} md={6} lg={4}>
            <Skeleton variant="rectangular" height={200} />
            <Skeleton />
            <Skeleton />
            <Skeleton variant="text" height={32} sx={{ my: "16px" }} />
            <Skeleton
              variant="rectangular"
              height={40}
              sx={{
                width: "60%",
                height: "1200px",
                borderRadius: "15px",
                mx: "auto",
              }}
            />
          </Grid>
        ))}
      </Grid>
    )
  }

  return (
    <Box>
        {
        bookings.length<1 ?
        <Box
        display={{ sm: "block", md: "flex" }}
        sx={{
          py: "100px",
          justifyContent: "center",
          mt: "100px",
          mb: "20px",
          backgroundColor: "#0a09090f",
          width: "auto",
          mx: "auto",
        }}
      >
      <Typography sx={{textAlign:"center",fontSize:"30px",fontWeight:"600",color:"gray"}}>Not Available</Typography>
      </Box> :
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
      }
    </Box>
    
  );
};

export default Booking;
