import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import About from "../pages/about/About";
import Auth from "../pages/auth/Auth";
import Booking from "../pages/booking/Booking";
import Contact from "../pages/contact/Contact";
import AddNewBus from "../pages/dashboard/AddNewBus";
import AllBus from "../pages/dashboard/AllBus";
import Dashboard from "../pages/dashboard/Dashboard";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyBookings from "../pages/myBookings/MyBookings";
import Register from "../pages/register/Register";
import SearchBus from "../pages/searchBus/SearchBus";
import TicketPayment from "../pages/ticketPayment/TicketPayment";
import PrivateRoute from "./privateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Auth />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/search-bus",
        element: <SearchBus />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/my-bookings",
        element: <PrivateRoute><MyBookings /></PrivateRoute>,
      },
      {
        path: "/payment",
        element: <TicketPayment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/addbus",
        element: <AddNewBus />,
      },
      {
        path: "/dashboard/allbus",
        element: <AllBus />,
      },
    ],
  },
]);

export default router;
