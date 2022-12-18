import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const RouteCard = ({ route: { image, startPoint, destPoint, fair } }) => {
  return (
    <Card sx={{ maxWidth: 345, pb: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {startPoint} to {destPoint}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={3}>
          {`${fair.label}`}
        </Typography>
        <Typography variant="h5" color="text.primary">
          {`${fair.currencySign}${fair.amount}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          fullWidth
          sx={{ color: "white", fontWeight: "bold" }}
        >
          Book a Seat
        </Button>
      </CardActions>
    </Card>
  );
};

export default RouteCard;
