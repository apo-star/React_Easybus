import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios.utils";

const fetchMyBookingsData = () => {
  return request({ url: `/api/v1/all-bookings` });
};

export const useMyBookingsData = () => {
  return useQuery(["bookings"], () => fetchMyBookingsData());
};
