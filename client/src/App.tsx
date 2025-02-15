import { Routes, Route } from "react-router";
import { Root, Root_Layout, Chat } from "@/pages/index";
import { ProtectedRoutes } from "@/components";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Root_Layout />}>
        <Route index element={<Root />} />
       

        <Route element={<ProtectedRoutes/>}>
          <Route path={"/chat"} element={<Chat/>} />

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
