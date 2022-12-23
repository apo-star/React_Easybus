import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const About = () => {
  return (
    <>
      <Box
        sx={{
          height: "250px",
          backgroundImage: "url('/about-poster.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingBottom: "50px",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: 40, color: "white", fontWeight: "bold" }}
        >
          About EasyBus
        </Typography>
      </Box>
      <Container sx={{ marginY: "70px" }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item sm={12} md={6} sx={{ p: "40px" }}>
            <Typography
              variant="p"
              sx={{ textTransform: "uppercase", fontWeight: "bold" }}
              color="primary"
            >
              Who we are
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Making Bus Journey in Bangladesh Hassle-Free
            </Typography>
            <Typography variant="body1" component="p" sx={{ my: "25px" }}>
              Our mission is to ensure 'Hassle-free' and Easy Bus Journey in
              Bangladesh. Our first goal is that our users must be able to book
              a ticket in a fex minutes, away from all the hassle at a bus
              counter, while enjoying the warmth of home, or while in some off
              minutes among the busy hours of office.
            </Typography>
            {[
              "Book or Cancel a Ticket Online!",
              "Reserve a Bus!",
              "Any Convenient Pick-point or Drop-point along the route!",
            ].map((feature, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  marginY: "10px",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  color: "#571336",
                }}
              >
                <CheckCircleIcon
                  fontSize="16px"
                  sx={{
                    marginRight: "10px",
                  }}
                />
                <span>{feature}</span>
              </Typography>
            ))}
            <Box
              sx={{
                display: "block",
                marginTop: "40px",
              }}
            >
              <Link to="/booking" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FFA903",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Book a Ticket
                  </span>
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              backgroundImage: "url('/about-banner.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
            }}
          ></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
