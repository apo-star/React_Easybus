import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          backgroundImage: "url('/about-poster.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: 40, color: "white", fontWeight: "bold" }}
        >
          About EasyBus
        </Typography>
      </Box>
      <Container></Container>
    </>
  );
};

export default About;
