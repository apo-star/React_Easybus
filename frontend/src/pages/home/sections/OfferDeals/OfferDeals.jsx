import { Grid } from '@mui/material';
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
            place:'Dhaka to Dubai',
            date:'09 Jun 2022 - 16 Jun 2022',
            from:'Economy from',
            price:'290'
        },
        {
            _id:'2',
            picture:'https://themehut.co/html/geair/assets/img/images/offer_img02.jpg',
            place:'New York to California',
            date:'09 Jun 2022 - 16 Jun 2022',
            from:'Economy from',
            price:'290'
        },
        {
            _id:'3',
            picture:'https://themehut.co/html/geair/assets/img/images/offer_img03.jpg',
            place:'Malaga to Finland',
            date:'09 Jun 2022 - 16 Jun 2022',
            from:'Economy from',
            price:'792'
        },
        {
            _id:'4',
            picture:'https://themehut.co/html/geair/assets/img/images/offer_img04.jpg',
            place:'Dubai to Maldives',
            date:'09 Jun 2022 - 16 Jun 2022',
            from:'Economy from',
            price:'980'
        },
        {
            _id:'5',
            picture:'https://themehut.co/html/geair/assets/img/images/offer_img05.jpg',
            place:'Dubai to New York',
            date:'09 Jun 2022 - 16 Jun 2022',
            from:'Economy from',
            price:'350'
        },
    ]
    return (
      <Container sx={{py:"30px"}}>
        <Grid container maxWidth={{sm:'100%', md:"80%", lg:"100%"}} marginX={"auto"} spacing={2}>
            <Grid item lg={6} xs={12} height="full" sm={{p:0}}>
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
    );
};

export default OfferDeals;
