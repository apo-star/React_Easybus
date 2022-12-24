import { RouterProvider, useLocation } from "react-router-dom";
import router from "./routes/router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
