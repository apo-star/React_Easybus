import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const busApi = createApi({
  reducerPath: "busApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://easybus-backend.vercel.app/api/v1/",
  }),
  endpoints: (builder) => ({
    getAllSeat: builder.query({
      query: () => "buses",
    }),
  }),
});

export const { useGetAllSeatQuery } = busApi;
