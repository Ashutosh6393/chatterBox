import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <div className="fixed z-0 h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100 px-8" />
      <Navbar />
      <div className="max-w-7xl mx-auto w-full ">
        <div className="flex flex-col min-h-screen  items-center justify-center py-32 w-full">
          <Outlet />
        </div>
      </div>
      <Footer />

    </>
  );
}

export default App;
