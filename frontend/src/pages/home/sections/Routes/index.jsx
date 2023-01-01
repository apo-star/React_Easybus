import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Grid, Skeleton } from "@mui/material";

import RouteCard from "./RouteCard";
import Filter from "./Filter";
import axios from "axios";

const categories = ["ac", "non-ac"];

const Routes = () => {
  const [selectedCategories, setSelectedCategories] = useState(categories);
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBusRoutes = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          "https://easybus-backend.vercel.app/api/v1/bus-routes"
        );
        setRoutes(data.data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBusRoutes();
  }, []);

  const filterFunction = (route) => {
    if (selectedCategories.length === 0) {
      return true;
    }
    return route.categories.some((cat) => selectedCategories.includes(cat));
  };

  return (
    <Container maxWidth="lg" sx={{ my: 10 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" fontSize={16} color={"#FFA903"}>
          PACKAGE
        </Typography>
        <Typography variant="h4" fontWeight={600} marginBottom={4}>
          Your Great Destination
        </Typography>
      </Box>
      <Filter
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        sx={{ mx: "auto" }}
      />

      {loading && (
        <Grid container spacing={3} justifyContent="center">
          {new Array(4).fill(0).map((route, index) => (
            <Grid key={index} item sm={12} md={6} lg={3}>
              <Skeleton variant="rectangular" height={200} />
              <Skeleton />
              <Skeleton />
              <Skeleton variant="text" height={32} sx={{ my: "16px" }} />
              <Skeleton
                variant="rectangular"
                height={40}
                sx={{
                  width: "80%",
                  height: "200px",
                  borderRadius: "15px",
                  mx: "auto",
                }}
              />
            </Grid>
          ))}
        </Grid>
      )}

      {!loading && error && (
        <Typography sx={{ color: "red", textAlign: "center" }} variant="h3">
          Please, Reload the page!
        </Typography>
      )}

      {!loading && !error && Array.isArray(routes) && routes.length > 0 && (
        <Grid container spacing={3} justifyContent="center">
          {routes.filter(filterFunction).map((route, index) => (
            <Grid key={index} item sm={12} md={6} lg={3} sx={{ width: "100%" }}>
              <RouteCard route={route} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Routes;
