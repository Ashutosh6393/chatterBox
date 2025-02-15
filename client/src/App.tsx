import { Routes, Route } from "react-router";
import {Root, Root_Layout, Chat} from "@/pages/index"
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Root_Layout />}>
        <Route index element={<Root />} />
      </Route>
    </Routes>
  );
}

export default App;
