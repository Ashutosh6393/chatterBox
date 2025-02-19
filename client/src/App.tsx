import { Root, Root_Layout, Chat } from "@/pages/index";
import { UserType } from "./store/features/authSlice";
import { LOGIN } from "./store/features/authSlice";
import { ProtectedRoutes } from "@/components";
import { useAppDispatch } from "./store/store";
import { authClient } from "./lib/auth-client";
import { Routes, Route } from "react-router";
import { PageLoad } from "@/components";
import { useEffect } from "react";
import "./App.css";

function App() {
  const { useSession } = authClient;
  const dispatch = useAppDispatch();

  const { isPending, data: session } = useSession();

  useEffect(() => {
    if (session) {
      const user: UserType = {
        name: session.user.name,
        email: session.user.email,
        profilePicture: session.user.image,
      };
      dispatch(LOGIN(user));
    }
  }, [dispatch, session]);

  if (isPending) return <PageLoad />;
  return (
    <Routes>
      <Route element={<Root_Layout />}>
        <Route index element={<Root />} />
        <Route element={<ProtectedRoutes />}>
          <Route path={"/chat"} element={<Chat />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
