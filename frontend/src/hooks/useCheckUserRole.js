import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { request } from "../utils/axios.utils";

export const useCheckUserRole = () => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request({ url: `/api/v1/user/role` })
      .then((role) => {
        setUserRole(role);
        setLoading(false);
      })
      .catch((err) => {
        if (err.message === "Forbidden") {
          setUserRole(null);
          setLoading(false);
        }
      });
  }, []);
  return { userRole, loading };
};

export const useCheckUserRoleByEmail = () => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.uid || userRole) {
      return;
    }
    setLoading(true);
    request({ url: `/api/v1/user/role/${user?.email}` })
      .then((role) => {
        setUserRole(role);
        setLoading(false);
      })
      .catch((err) => {
        if (err.message === "Forbidden") {
          setUserRole(null);
          setLoading(false);
        }
      });
  }, [user]);
  return { userRole, loading };
};
