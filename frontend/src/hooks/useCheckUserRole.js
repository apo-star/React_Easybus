import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { request } from "../utils/axios.utils";

const fetchUserRole = () => {
  return request({ url: `/api/v1/user/role` });
};
const fetchUserRoleByEmail = (email) => {
  return request({ url: `/api/v1/user/role/${email}` });
};

export const useCheckUserRole = () => {
  // const [userRole, setUserRole] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   request({ url: `/api/v1/user/role` })
  //     .then((role) => {
  //       setUserRole(role);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       if (err.message === "Forbidden") {
  //         setUserRole(null);
  //         setLoading(false);
  //       }
  //     });
  // }, []);
  // return { userRole, loading };
  return useQuery(["user-role"], () => fetchUserRole());
};

export const useCheckUserRoleByEmail = () => {
  // const [userRole, setUserRole] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const email = user?.email;

  // useEffect(() => {
  //   if (!user?.uid || userRole) {
  //     return;
  //   }
  //   setLoading(true);
  //   request({ url: `/api/v1/user/role/${user?.email}` })
  //     .then((role) => {
  //       setUserRole(role);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       if (err.message === "Forbidden") {
  //         setUserRole(null);
  //         setLoading(false);
  //       }
  //     });
  // }, [user]);
  // return { userRole, loading };

  return useQuery({
    queryKey: ["user-role", email],
    queryFn: () => fetchUserRoleByEmail(email),
    enabled: !!email,
  });
};
