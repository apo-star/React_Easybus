import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const seatApi = createApi({
  reducerPath: "seatApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  endpoints: (builder) => ({
    getAllSeat: builder.query({
      query: () => "buses",
    }),
  }),
});

export const { useGetAllSeatQuery } = seatApi;
