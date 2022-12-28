import { RouterProvider, useLocation } from "react-router-dom";
import router from "./routes/router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA903",
      bg: "#FBF9F2",
    },
    secondary: {
      main: "#622243",
    },
  },
  typography: {
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
});

const stripePromise = loadStripe(`${import.meta.env.VITE_stripe_pk}`);
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Elements stripe={stripePromise}>
          <RouterProvider router={router} />
        </Elements>
      </ThemeProvider>
    </div>
  );
}

export default App;
