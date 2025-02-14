import { Outlet} from "react-router";
import { Navigate } from "react-router";


const ProtectedRoutes = ( ) => {

  const user = null;
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
