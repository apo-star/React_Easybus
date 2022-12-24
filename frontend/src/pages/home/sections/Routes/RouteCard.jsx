import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const RouteCard = ({ route: { image, startPoint, destPoint, fair } }) => {
  return (
    <>
    <Card sx={{
      width: '100%',
      height:'auto',
      p:1.5,
      pb:2,
      boxShadow:"0 5px 10px 2px #0000002e",
      borderRadius:"15px",
      ":hover": {
        boxShadow:"0px 0px 20px 5px #0000002e"
      },
      }
      } marginX={"auto"}>
      <CardMedia
        component="img"
        image={image}
        alt="green iguana"
        style={{
          borderRadius:"15px",
          width:'full',
          height:'200px',
      }}
      className="image"
      />
      <CardContent sx={{
        p:0,
        pt:2,
        px:1,
        pb:1,
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
          {startPoint} to {destPoint}
        </Typography>
        <Typography >
          {`${fair.label}`}
        </Typography>
        <Typography variant="h5" color="text.primary" marginTop={'23px'}>
          <span fontSize={"12px"}>{fair.currencySign} </span>{`${fair.amount}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained'
          sx={{
            color:"#622243",
            backgroundColor:"#FFA903",
            borderRadius:"70px",
            padding:"12px",
            fontWeight:"600",
            width:"100%"
            }}>
              Book a Seat
        </Button>
      </CardActions>
    </Card>
    </>
  );
};

export default RouteCard;
