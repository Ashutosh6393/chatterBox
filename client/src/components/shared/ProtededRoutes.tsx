import { Outlet } from "react-router";
import { Navigate } from "react-router";
import { authClient } from "@/lib/auth-client";

const ProtectedRoutes = () => {
  const { useSession } = authClient;
  const { data: session } = useSession();

  return (session) ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoutes;
