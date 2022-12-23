import OfferDeals from "./sections/OfferDeals/OfferDeals";
import Destination from "./sections/destination/destination";
import Hero from "./sections/Hero/Hero";
import Brands from "./sections/Brands/Brands";
import ServiceOptions from "./sections/ServiceOptions/ServiceOptions";
import Routes from "./sections/Routes";
import Informations from "./sections/Informations/Informations";
import { Box } from "@mui/system";

const Home = () => {
  return (
    <div>
      <Box sx={{backgroundColor:"#FBF9F2"}}>
        <Hero />
        <Informations />
        <OfferDeals />
        <Destination />
        <Routes />
        <Brands />
        <ServiceOptions />
      </Box>
    </div>
  );
};

export default Home;
