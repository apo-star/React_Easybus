import React from "react";
import { Box, Button, Container, Typography, Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Stack direction="column" spacing={2}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                Not Found
              </Typography>
              <Typography variant="h6" color="secondary">
                The page you’re looking for doesn’t exist.
              </Typography>
              <Typography variant="h6" color="secondary">
                You will find plenty of other options on our home page.
              </Typography>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button variant="contained" sx={{ fontWeight: "bold" }}>
                  Go to Home
                </Button>
              </Link>
            </Stack>
          </Grid>
          <Grid xs={6}>
            <img src="/error.jpg" alt="" width={500} height={250} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
