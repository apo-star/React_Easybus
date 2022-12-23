import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
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
  {
    image: "https://i.ibb.co/31NmXsC/barisal.jpg",
    categories: ["ac"],
    startPoint: "Dhaka",
    destPoint: "Rajshahi",
    fair: {
      label: "Economy from",
      currencySign: "৳",
      amount: "1000",
    },
  },
  {
    image: "https://i.ibb.co/19DsrjZ/coxbazar.jpg",
    categories: ["ac"],
    startPoint: "Dhaka",
    destPoint: "Cox's Bazar",
    fair: {
      label: "Business Class",
      currencySign: "৳",
      amount: "2100",
    },
  },
  {
    image: "https://i.ibb.co/CV67Kpp/sylhet.jpg",
    categories: ["ac"],
    startPoint: "Dhaka",
    destPoint: "Sylhet",
    fair: {
      label: "Business Class",
      currencySign: "৳",
      amount: "2100",
    },
  },
  {
    image: "https://i.ibb.co/1J2hqnr/chittagong.jpg",
    categories: ["ac"],
    startPoint: "Dhaka",
    destPoint: "Chittagong",
    fair: {
      label: "Business Class",
      currencySign: "৳",
      amount: "2100",
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
    <Container maxWidth="lg" sx={{ my: 10 }}>
       <Box sx={{textAlign:"center"}}>
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

      <Grid container spacing={3} justifyContent="center">
        {routes.filter(filterFunction).map((route, index) => (
          <Grid key={index} item sm={12} md={6} lg={3}>
            <RouteCard route={route} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Routes;
