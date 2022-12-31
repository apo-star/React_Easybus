import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { request } from "../utils/axios.utils";

const fetchAllBusData = () => {
  return request({ url: `/api/v1/buses` });
};

const fetchBusByRoute = (route) => {
  return request({ url: `/api/v1/buses?from=${route.from}&to=${route.to}` });
};

const createNewBus = (data) => {
  return request({
    url: `/api/v1/admin/bus/new`,
    method: "post",
    data: data,
  });
};

const deleteBus = (id) => {
  return request({ url: `/api/v1/admin/bus/${id}`, method: "delete" });
};

export const useBusesData = () => {
  return useQuery(["buses", "admin"], () => fetchAllBusData());
};

export const useBusesDataByRoute = (route) => {
  return useQuery(["buses"], () => fetchBusByRoute(route));
};

export const useCreateNewBus = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(createNewBus, {
    onSuccess: () => {
      queryClient.invalidateQueries(["buses", "admin"]);
      toast.success("New Bus Added");
      navigate("/dashboard/allbus");
    },
  });
};

export const useDeleteBus = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteBus, {
    onSuccess: () => {
      queryClient.invalidateQueries(["buses", "admin"]);
      toast.success("Bus removed successfully");
    },
  });
};
