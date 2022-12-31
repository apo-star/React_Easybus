import { useEffect, useState } from "react";
import { request } from "../utils/axios.utils";

const useCheckUserRole = () => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request({ url: `/api/v1/user/role` })
      .then((role) => {
        setUserRole(role);
        // authContext?.setUserType(role);
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

export default useCheckUserRole;
