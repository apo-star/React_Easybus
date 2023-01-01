import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { Outlet } from "react-router-dom";
import ScrollTop from "../hooks/useScrollTop";

const Main = () => {
  return (
    <div>
      <Header />
      <ScrollTop>
        <Outlet />
      </ScrollTop>
      <Footer />
    </div>
  );
};

export default Main;
