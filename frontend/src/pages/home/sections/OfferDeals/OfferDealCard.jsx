import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const OfferDealCard = ({deal}) => {
  const {picture,place,from,price,date} = deal
    return (
        <Card sx={{
          width: '100%',
          height:'auto',
          p:2,
          boxShadow:"0 5px 10px 2px #0000002e",
          borderRadius:"15px"
          }
          } marginX={"auto"}>
        <CardMedia
          component="img"
          image={picture}
          alt="green iguana"
          style={{
              borderRadius:'15px'
          }}
        />
        <CardContent sx={{
          p:0,
          pb:2,
          pt:2,
          '&:last-child':{
              pb:0
          }
        }}>
          <Typography 
          gutterBottom 
          variant="h5" 
          component="div"
          fontSize={19}
          fontWeight={700}
          >
            {place}
          </Typography>
          <Typography >
           {date}
          </Typography>
          <Typography marginTop={"13px"}>
           {from}
          </Typography>
          <Typography fontWeight={600} >
           ${price}
          </Typography>
        </CardContent>
      </Card>
    );
};

export default OfferDealCard;