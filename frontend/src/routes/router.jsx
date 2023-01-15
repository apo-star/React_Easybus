import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Spinner from "../components/Spinner";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
const About = React.lazy(() => import("../pages/about/About"));
// import About from "../pages/about/About";
import Auth from "../pages/auth/Auth";
import Booking from "../pages/booking/Booking";
import Contact from "../pages/contact/Contact";
// import AddNewBus from "../pages/dashboard/AddNewBus";
const AddNewBus = React.lazy(() => import("../pages/dashboard/AddNewBus"));
// import AllAdmin from "../pages/dashboard/AllAdmin";
const AllAdmin = React.lazy(() => import("../pages/dashboard/AllAdmin"));
// import AllBus from "../pages/dashboard/AllBus";
const AllBus = React.lazy(() => import("../pages/dashboard/AllBus"));
// import AllContacts from "../pages/dashboard/AllContacts";
const AllContacts = React.lazy(() => import("../pages/dashboard/AllContacts"));
// import Dashboard from "../pages/dashboard/Dashboard";
const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
// import MyBookings from "../pages/myBookings/MyBookings";
const MyBookings = React.lazy(() => import("../pages/myBookings/MyBookings"));
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
        path: "/about",
        element: (
          <Suspense fallback={<Spinner />}>
            <About />
          </Suspense>
        ),
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
        element: (
          <PrivateRoute>
            <Suspense fallback={<Spinner />}>
              <MyBookings />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <TicketPayment />
          </PrivateRoute>
        ),
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
        element: (
          <Suspense fallback={<Spinner />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/addbus",
        element: (
          <Suspense fallback={<Spinner />}>
            <AddNewBus />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/allbus",
        element: (
          <Suspense fallback={<Spinner />}>
            <AllBus />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/alladmin",
        element: (
          <Suspense fallback={<Spinner />}>
            <AllAdmin />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/allcontact",
        element: (
          <Suspense fallback={<Spinner />}>
            <AllContacts />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
