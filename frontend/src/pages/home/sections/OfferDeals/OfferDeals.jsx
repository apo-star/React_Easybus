import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import OfferDealCard from "./OfferDealCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useGetOfferDealsQuery } from "../../../../features/offerDeals/offerDeals";
import Spinner from "../../../../components/Spinner";

const OfferDeals = () => {
    const {data,isLoading} = useGetOfferDealsQuery()
    const deals =data?.data;
        
    if(isLoading) {
            return <Spinner></Spinner>
        }
        
    return (
     <Box>
        <Container sx={{py:"30px",backgroundColor:"#FBF9F2"}} >
            <Box>
                <Typography variant="h6" fontSize={16} color={"#FFA903"}>
                    OFFER DEALS
                </Typography>
                <Typography variant="h4" fontWeight={600} marginBottom={4}>
                    Bus Offer Deals
                </Typography>
            </Box>
            <Grid container maxWidth={{xs:'100%', md:"80%", lg:"100%"}} marginX={"auto"} spacing={1}>
                <Grid item lg={6} xs={12} sm={{p:0}} width="100%">
                    {
                        deals?.slice(0,1)?.map(deal=><OfferDealCard deal={deal} key={deal._id}></OfferDealCard>)
                    }
                </Grid>
                <Grid item lg={6} xs={12} width="100%" marginX={"auto"}>
                    <Grid container marginX={"auto"} width="100%" paddingLeft={0} spacing={1}>
                        {
                        deals?.slice(1,5)?.map(deal=>(
                            <Grid  key={deal._id} item xs={12} sm={6} width="100%" ><OfferDealCard deal={deal}></OfferDealCard></Grid>
                        ))
                        }
                    </Grid>
                </Grid>
            </Grid>
      </Container>
    </Box>
  );
};

export default OfferDeals;
