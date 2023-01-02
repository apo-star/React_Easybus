import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { request } from "../utils/axios.utils";

const fetchAllContactsData = () => {
  return request({ url: `/api/v1/admin/contacts` });
};

const createNewContact = (data) => {
  return request({
    url: `/api/v1/contact/new`,
    method: "post",
    data: data,
  });
};

const deleteContact = (id) => {
  return request({ url: `/api/v1/admin/contact/${id}`, method: "delete" });
};

export const useContactsData = () => {
  return useQuery(["contacts"], () => fetchAllContactsData());
};

export const useCreateNewContact = () => {
  const queryClient = useQueryClient();
  return useMutation(createNewContact, {
    onSuccess: () => {
      queryClient.invalidateQueries(["contacts"]);
      toast.success("Message sent successfully");
    },
  });
};

export const useDeleteContact = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteContact, {
    onSuccess: () => {
      queryClient.invalidateQueries(["contacts"]);
      toast.success("Message removed successfully");
    },
  });
};
