import { Routes, Route } from "react-router";
import { Root, Root_Layout, Chat } from "@/pages/index";
import { ProtectedRoutes } from "@/components";
import "./App.css";

import { authClient } from "./lib/auth-client";
import { useEffect } from "react";
import {PageLoad} from "@/components"
import { login } from "./store/features/authSlice";
import { useAppDispatch } from "./store/store";
import { UserType } from "./store/features/authSlice";

function App() {
  const { useSession } = authClient;
  const dispatch = useAppDispatch();


  const { isPending, data: session } = useSession();

  useEffect(() => {
   if(session){
    const user: UserType = {
      name: session.user.name,
      email: session.user.email,
      profilePicture: session.user.image,
    }
    dispatch(login(user));

   }
  }, [dispatch, session]);

  if(isPending) return (<PageLoad/>
)
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
