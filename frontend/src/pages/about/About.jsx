import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FAQ from "./FAQ";

const About = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          background:
            'linear-gradient(0deg,rgba(0, 53, 128, 1), rgb(0, 0,0,0)), url("/contact-img.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: "24px", color: "white", fontWeight: "bold" }}
        >
          About
        </Typography>
      </Box>
      <Container sx={{ marginY: "70px", mx: "auto" }}>
        <Grid
          container
          spacing={{ xs: 0, md: 5 }}
          justifyContent="center"
          sx={{ m: "4" }}
        >
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              backgroundImage: "url('/about-banner.jpg')",
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
              a ticket in a few minutes, away from all the hassle at a bus
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
                display: {
                  xs: "flex",
                  md: "block",
                },
                marginTop: "40px",
                justifyContent: "center",
              }}
            >
              <Link to="/search-bus" style={{ textDecoration: "none" }}>
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
        </Grid>
      </Container>
      <FAQ />
    </>
  );
};

export default About;
