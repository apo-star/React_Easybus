import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import OfferDealCard from './OfferDealCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const OfferDeals = () => {
    const deals = [
        {
            _id:'1',
            picture:'https://themehut.co/html/geair/assets/img/images/offer_img01.jpg',
            place:'Dhaka to Barishal',
            date:'09 Jun 2022 - 16 Jun 2022',
            from:'Economy from',
            price:'290'
        },
        {
            _id:'2',
            picture:'https://i.ibb.co/31NmXsC/barisal.jpg',
            place:'Dhaka to Rajshahi',
            date:'09 Jun 2022 - 16 Jun 2022',
            from:'Economy from',
            price:'290'
        },
        {
            _id:'3',
            picture:'https://i.ibb.co/19DsrjZ/coxbazar.jpg',
            place:"Dhaka to Cox's Bazar",
            date:'09 Jun 2022 - 16 Jun 2022',
            from:'Economy from',
            price:'792'
        },
        {
            _id:'4',
            picture:'https://i.ibb.co/CV67Kpp/sylhet.jpg',
            place:'Dhaka to sylhet',
            date:'09 Jun 2022 - 16 Jun 2022',
            from:'Economy from',
            price:'980'
        },
        {
            _id:'5',
            picture:'https://i.ibb.co/1J2hqnr/chittagong.jpg',
            place:'Dhaka to Chittagong',
            date:'09 Jun 2022 - 16 Jun 2022',
            from:'Economy from',
            price:'350'
        },
    ]
    return (
     <Box sx={{backgroundColor:"#FBF9F2"}}>
        <Container sx={{py:"30px",backgroundColor:"#FBF9F2"}} >
            <Box>
                <Typography variant="h6" fontSize={16} color={"#FFA903"}>
                    OFFER DEALS
                </Typography>
                <Typography variant="h4" fontWeight={600} marginBottom={4}>
                    Flight Offer Deals
                </Typography>
            </Box>
            <Grid container maxWidth={{sm:'100%', md:"80%", lg:"100%"}} marginX={"auto"}>
                <Grid item lg={6} xs={12} height="100%" sm={{p:0}}>
                    {
                        deals.slice(0,1).map(deal=><OfferDealCard deal={deal} key={deal._id}></OfferDealCard>)
                    }
                </Grid>
                <Grid item lg={6} xs={12} Width="100%" marginX={"auto"}>
                    <Grid container lg:spacing={2} marginX={"auto"} Width="100%" paddingLeft={0}>
                            {
                            deals.slice(1,5).map(deal=>(
                                <Grid item xs={12} sm={6}><OfferDealCard key={deal._id} deal={deal}></OfferDealCard></Grid>
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
