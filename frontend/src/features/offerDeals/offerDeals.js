import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const offerDealsApi = createApi({
  reducerPath: "offerDealsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  endpoints: (builder) => ({
    getOfferDeals: builder.query({
      query: () => "offerDeals",
    }),
  }),
});

export const { useGetOfferDealsQuery } = offerDealsApi;