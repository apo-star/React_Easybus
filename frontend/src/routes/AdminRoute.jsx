import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AuthContext } from "../context/AuthProvider";
import useCheckUserRole from "../hooks/useCheckUserRole";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { loading, userRole } = useCheckUserRole();
  const { user, loading: userLoader, userType } = useContext(AuthContext);

  if (userLoader || loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (
    (user?.uid && userType === "admin") ||
    (user?.uid && userRole === "admin")
  ) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
