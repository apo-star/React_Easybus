import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const busApi = createApi({
  reducerPath: "busApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  endpoints: (builder) => ({
    getAllSeat: builder.query({
      query: () => "buses",
    }),
  }),
});

export const { useGetAllSeatQuery } = busApi;
