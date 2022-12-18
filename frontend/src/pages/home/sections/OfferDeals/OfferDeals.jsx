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
      <Container>
        <Grid container spacing={2} maxWidth={{sm:'100%', md:"80%", lg:"100%"}} marginX={"auto"} >
            <Grid item lg={6} xs={12} height="full">
                {
                    deals.slice(0,1).map(deal=>(
                       <Grid item >
                            <Card sx={{
                                boxShadow:"0 5px 10px 2px #0000002e",
                                borderRadius:"15px"
                                }
                                }>
                                <CardMedia
                                component="img"
                                image={deal.picture}
                                />
                                <CardContent sx={{
                                p:2,
                                pb:0,
                                pt:2,
                                '&:last-child':{
                                    pb:0
                                }
                                }}>
                                <Typography 
                                gutterBottom 
                                variant="h5" 
                                component="div"
                                fontSize={22}
                                fontWeight={700}
                                >
                                    {deal.place}
                                </Typography>
                                <Typography  color={"#622243"}>
                                    {deal.date}
                                </Typography>
                                <Typography fontWeight={600} marginTop={"22px"}>
                                    {deal.from}
                                </Typography>
                                <Typography fontWeight={600} paddingBottom={"25px"} >
                                    ${deal.price}
                                </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
            <Grid item lg={6} xs={12} maxWidth="100%" marginX={"auto"}>
                <Grid container spacing={2} marginX={"auto"}>
                        {
                        deals.slice(1,5).map(deal=>(
                            <Grid item lg={6}><OfferDealCard key={deal._id} deal={deal}></OfferDealCard></Grid>
                        ))
                        }
                </Grid>
            </Grid>
        </Grid>
      </Container>
    );
};

export default OfferDeals;
