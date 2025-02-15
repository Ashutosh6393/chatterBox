import {Navbar, Footer} from "@/components/index"
import { Outlet } from "react-router";


export default function Root_Layout() {

  return (
    <>
      <Navbar />
      <div className="fixed z-0 h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100 px-8" />
      <div className="max-w-7xl mx-auto w-full ">
        <div className="flex flex-col min-h-screen px-5  items-center justify-center py-32 w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
