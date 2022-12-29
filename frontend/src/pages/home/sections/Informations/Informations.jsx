import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Information from "./Information";

const Informations = () => {
  const informations = [
    {
      _id: 1,
      icon: "https://i.ibb.co/2k1wpqs/bubble-chat.png",
      title: "We are now available",
      phone: "Call +1 555 666 888 for",
      description: "contuct with us",
    },
    {
      _id: 2,
      icon: "https://i.ibb.co/L115RKB/plane.png",
      title: "International Flight",
      phone: "Call +1 555 666 888 for",
      description: "booking assistance",
    },
    {
      _id: 3,
      icon: "https://i.ibb.co/9WLB4Vf/money-back-guarantee.png",
      title: "Check Refund",
      phone: "Call +1 555 666 888 for check",
      description: "refund status",
    },
  ];
  return (
    <Box sx={{ backgroundColor: "#FBF9F2" }}>
      <Container
        sx={{
          py: "30px",
          marginX: "auto",
        }}
      >
        <Grid container spacing={3}>
          {informations.map((info) => (
            <Grid item key={info._id} md={6} lg={4} width={"100%"}>
              <Information info={info}></Information>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Informations;
