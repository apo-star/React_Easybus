import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { request } from "../utils/axios.utils";

const fetchUsersData = (role) => {
  return request({ url: `/api/v1/admin/users?role=${role}` });
};

const deleteUser = (id) => {
  return request({ url: `/api/v1/admin/user/${id}`, method: "delete" });
};

const makeAdminUser = (id) => {
  return request({ url: `/api/v1/admin/user/${id}`, method: "patch" });
};

export const useUsersData = (role) => {
  return useQuery(["users", role], () => fetchUsersData(role));
};

export const useDeleteUser = (role) => {
  const queryClient = useQueryClient();
  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users", role]);
      toast.success("User Deleted Successfully");
    },
  });
};

export const useMakeAdminUser = () => {
  const queryClient = useQueryClient();
  return useMutation(makeAdminUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      toast.success("New admin added");
    },
  });
};
