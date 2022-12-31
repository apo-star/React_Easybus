import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import OfferDealCard from "./OfferDealCard";
import Typography from "@mui/material/Typography";
import { useGetOfferDealsQuery } from "../../../../features/offerDeals/offerDeals";
import Spinner from "../../../../components/Spinner";

const OfferDeals = () => {
  const { data, isLoading } = useGetOfferDealsQuery();
  const deals = data?.data;

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <Box>
      <Container sx={{ py: "30px", backgroundColor: "#FBF9F2" }}>
        <Box>
          <Typography variant="h6" fontSize={16} color={"#FFA903"}>
            OFFER DEALS
          </Typography>
          <Typography variant="h4" fontWeight={600} marginBottom={4}>
            Bus Offer Deals
          </Typography>
        </Box>
        <Grid
          container
          maxWidth={{ xs: "100%", md: "80%", lg: "100%" }}
          spacing={{ xs: 0, md: 1 }}
          paddingX={0}
          marginX={0}
        >
          <Grid item lg={6} xs={12} width="100%" paddingX={0}>
            {deals?.slice(0, 1)?.map((deal) => (
              <OfferDealCard deal={deal} key={deal._id}></OfferDealCard>
            ))}
          </Grid>
          <Grid item lg={6} xs={12} width="100%" paddingX={0} marginX={0}>
            <Grid
              container
              width="100%"
              spacing={{ xs: 0, md: 1 }}
              paddingX={0}
              marginX={0}
            >
              {deals?.slice(1, 5)?.map((deal) => (
                <Grid
                  item
                  key={deal._id}
                  xs={12}
                  sm={6}
                  width="100%"
                  paddingX={0}
                  marginX={0}
                >
                  <OfferDealCard deal={deal}></OfferDealCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OfferDeals;
