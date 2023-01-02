import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../../../context/DataProvider";
import { useNavigate } from "react-router-dom";
const OfferDealCard = ({ deal }) => {
  const { _id, picture, place, from, price, date } = deal;
  const { fromToLocation, setFromToLocation } = useContext(DataContext);
  const navigate = useNavigate();

  const departure = place.split(" ")[0];
  const arrival = place.split(" ")[2];

  const offerDealSearch = () => {
    setFromToLocation({ from: departure, to: arrival });
    navigate(`/search-bus?from=${departure}&to=${arrival}`);
  };
  return (
    <Box
      sx={{
        position: "relative",
        height: {
          xs: "95%",
          md: "100%",
        },
        marginTop: {
          xs: "5%",
          md: "0",
        },
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: "100%",
          p: _id === "1" ? 0 : 1.5,
          pb: _id == "1" && 2,
          boxShadow: "0 5px 10px 2px #0000002e",
          borderRadius: "15px",
          marginX: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardMedia
          component="img"
          image={picture}
          alt="green iguana"
          style={{
            borderRadius: `${_id == "1" ? "0px" : "15px"}`,
            width: "100%",
            flexGrow: 1,
          }}
        />
        <CardContent
          sx={{
            p: _id === "1" ? 2 : 0,
            pb: 2,
            pt: 2,
            "&:last-child": {
              pb: 0,
            },
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontSize={19}
            fontWeight={700}
          >
            {place}
          </Typography>
          <Typography sx={{ marginTop: "13px" }}>{from}</Typography>
          <Typography
            fontWeight={600}
            fontSize={18}
            paddingBottom={_id === "1" ? "50px" : "20px"}
          >
            ৳ {price}
          </Typography>
        </CardContent>
      </Card>
      {/* hover card */}
      <Card
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          marginX: "auto",
          backgroundColor: "#622243",
          color: "#fff",
          p: _id === "1" ? 0 : 2,
          boxShadow: "0 5px 10px 2px #0000002e",
          borderRadius: "15px",
          m: "auto",
          opacity: 0,
          "&:last-child": {
            pb: 0,
          },
          ":hover": {
            opacity: 1,
            transition: "all 0.5s",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            "&:last-child": {
              pb: 0,
            },
          }}
        >
          <CardContent
            sx={{
              p: _id === "1" ? 2 : 0,
              pb: 2,
              pt: 2,
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontSize={19}
              fontWeight={700}
            >
              {place}
            </Typography>
            <Typography marginTop={"13px"}>{from}</Typography>
            <Typography fontWeight={600} color="#FFA903" fontSize={18}>
            ৳ {price}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button
                onClick={offerDealSearch}
                variant="contained"
                sx={{
                  color: "#622243",
                  backgroundColor: "#FFA903",
                  borderRadius: "70px",
                  padding: "12px",
                  fontWeight: "600",
                }}
              >
                Book Now
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default OfferDealCard;
