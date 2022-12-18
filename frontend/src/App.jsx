import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA903",
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

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
