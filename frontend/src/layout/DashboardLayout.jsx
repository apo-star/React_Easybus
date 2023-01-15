import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import SideBar from "../pages/dashboard/SideBar";
import AdminRoute from "../routes/AdminRoute";

const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <AdminRoute>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={2}>
            <SideBar></SideBar>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={10}>
            <Outlet />
          </Grid>
        </Grid>
      </AdminRoute>
    </div>
  );
};

export default DashboardLayout;
