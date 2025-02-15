import { Outlet} from "react-router";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";


const ProtectedRoutes = ( ) => {

  const {isAuthenticated} = useSelector((state: RootState) => state.auth);
  console.log("from protected routes: ", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
