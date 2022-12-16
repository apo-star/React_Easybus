import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
