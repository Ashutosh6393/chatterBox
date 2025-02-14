import { Outlet} from "react-router";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";


const ProtectedRoutes = ( ) => {

  const {isAuthenticated} = useSelector((state: RootState) => state.auth);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
