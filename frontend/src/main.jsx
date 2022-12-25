import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "swiper/css/bundle";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { seatApi } from "./features/user/bus/seatSlice";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <Provider store={store}>
      <ApiProvider api={seatApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
