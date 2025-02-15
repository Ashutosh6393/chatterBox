import useAuth from "@/hooks/useAuth";
import { Outlet} from "react-router";
import { Navigate } from "react-router";

const ProtectedRoutes = ( ) => {
  const {isAuthenticated} = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
