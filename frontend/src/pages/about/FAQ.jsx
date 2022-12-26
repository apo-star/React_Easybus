import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const FAQ = () => {
  return (
    <Container sx={{ marginY: "100px", mx: "auto" }}>
      <Grid
        container
        spacing={{ xs: 0, md: 5 }}
        justifyContent="center"
        sx={{ m: "4" }}
      >
        <Grid item sm={12} md={6} sx={{ p: "40px" }}>
          <Typography
            variant="p"
            sx={{ textTransform: "uppercase", fontWeight: "bold" }}
            color="primary"
          >
            Answers to
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Frequently Asked Questions
          </Typography>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            backgroundImage: "url('/faq.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            p: "0",
            height: {
              xs: "300px",
              md: "auto",
            },
            width: {
              xs: "100%",
              md: "auto",
            },
          }}
        ></Grid>
      </Grid>
    </Container>
  );
};

export default FAQ;
