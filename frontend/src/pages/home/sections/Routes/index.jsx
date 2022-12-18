import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import RouteCard from "./RouteCard";
import Filter from "./Filter";

const categories = ["ac", "non-ac"];

const routes = [
  {
    image: "/khulna.jpg",
    categories: ["ac"],
    startPoint: "Dhaka",
    destPoint: "Khulna",
    fair: {
      label: "Economy from",
      currencySign: "৳",
      amount: "1000",
    },
  },
  {
    image: "/cumilla.jpg",
    categories: ["ac"],
    startPoint: "Dhaka",
    destPoint: "Cumilla",
    fair: {
      label: "Business Class",
      currencySign: "৳",
      amount: "2100",
    },
  },
  {
    image: "/rajshahi.jpg",
    categories: ["non-ac"],
    startPoint: "Dhaka",
    destPoint: "Rajshahi",
    fair: {
      label: "Economy from",
      currencySign: "৳",
      amount: "1000",
    },
  },
  {
    image: "/dhaka.jpg",
    categories: ["non-ac"],
    startPoint: "Cumilla",
    destPoint: "Dhaka",
    fair: {
      label: "Business Class",
      currencySign: "৳",
      amount: "1800",
    },
  },
];

const Routes = () => {
  const [selectedCategories, setSelectedCategories] = useState(categories);

  const filterFunction = (route) => {
    if (selectedCategories.length === 0) {
      return true;
    }
    return route.categories.some((cat) => selectedCategories.includes(cat));
  };

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Typography
        align="center"
        variant="h1"
        sx={{ fontSize: 40, fontWeight: "bold", my: 6 }}
      >
        Routes You can Have Us with You along
      </Typography>

      <Filter
        {...{ categories, selectedCategories, setSelectedCategories }}
        sx={{ mx: "auto" }}
      />

      <Grid container spacing={3} justifyContent="center">
        {routes.filter(filterFunction).map((route, index) => (
          <Grid key={index} item sm={12} md={6} lg={4}>
            <RouteCard route={route} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Routes;
