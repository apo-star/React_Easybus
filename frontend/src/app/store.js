import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { busApi } from "../features/bus/busSlice";
import { offerDealsApi } from "../features/offerDeals/offerDeals";

export const store = configureStore({
  reducer: {
    [busApi.reducerPath]: busApi.reducer ,
   [offerDealsApi.reducerPath]:offerDealsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(busApi.middleware,offerDealsApi.middleware),
});

setupListeners(store.dispatch);
