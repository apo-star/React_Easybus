import OfferDeals from "./sections/OfferDeals/OfferDeals";
import Destination from './sections/destination/destination';
import Hero from "./sections/Hero/Hero";
import Brands from "./sections/Brands/Brands";
import ServiceOptions from "./sections/ServiceOptions/ServiceOptions";
import Informations from "./sections/Informations/Informations";


const Home = () => {
  return (
    <div>
      <Hero />
      <Informations />
      <OfferDeals />
      <Brands />
      <ServiceOptions />
      <Destination />
    </div>
  );
};

export default Home;
