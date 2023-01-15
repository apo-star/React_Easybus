import { lazy, Suspense } from "react";
import OfferDeals from "./sections/OfferDeals/OfferDeals";
// import Destination from "./sections/destination/destination";
const Destination = lazy(() => import("./sections/destination/destination"));
import Hero from "./sections/Hero/Hero";
// import Brands from "./sections/Brands/Brands";
const Brands = lazy(() => import("./sections/Brands/Brands"));
// import ServiceOptions from "./sections/ServiceOptions/ServiceOptions";
const ServiceOptions = lazy(() =>
  import("./sections/ServiceOptions/ServiceOptions")
);
// import Routes from "./sections/Routes";
const Routes = lazy(() => import("./sections/Routes"));
import Informations from "./sections/Informations/Informations";
import { Box } from "@mui/system";
import useDocTitle from "../../hooks/useDocTitle";
import Spinner from "../../components/Spinner";

const Home = () => {
  useDocTitle("Home");
  return (
    <Box sx={{ backgroundColor: "#FBF9F2" }}>
      <Hero />
      <Informations />
      <OfferDeals />
      <Suspense fallback={<Spinner />}>
        <Destination />
        <Routes />
        <Brands />
        <ServiceOptions />
      </Suspense>
    </Box>
  );
};

export default Home;
