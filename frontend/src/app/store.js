import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { busApi } from "../features/bus/busSlice";

export const store = configureStore({
  reducer: {
    [busApi.reducerPath]: busApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(busApi.middleware),
});

setupListeners(store.dispatch);
