import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import SideBar from "../pages/dashboard/SideBar";

const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <Grid container spacing={2}>
      <Grid item xs={2}>
        <SideBar></SideBar>
      </Grid>
      <Grid item xs={10} lg={10}>
        <Outlet />
      </Grid>
    </Grid>
    </div>
  );
};

export default DashboardLayout;
