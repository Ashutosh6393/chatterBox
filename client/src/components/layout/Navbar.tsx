import useScroll from "@/hooks/useScroll";
import { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import {  logout as authLogout } from "@/store/features/authSlice";
import { logout } from "@/lib/utils";
import { AppDispatch } from "@/store/store";
import { Link } from "react-router";
import LoginDialog from "../shared/LoginDialog";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrolled = useScroll(10);
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleLogout = ()=>{
    logout();
    dispatch(authLogout());
  }

  return (
    <div
      className={`w-full fixed top-0 left-0  py-3 z-30 transition-all ${
        scrolled
          ? "border-b border-zinc-200 bg-white/50 backdrop-blur-md"
          : "bg-white/0"
      }`}
    >
      <div className="px-5 max-w-7xl w-full mx-auto  flex justify-between items-center">
        <div className="flex justify-center items-center gap-2 lg:gap-4 text-zinc-800 text-lg lg:text-3xl">
          <img src="/logo-s.png" alt="better auth logo" />
          <Link to="/" className="text-lg lg:text-2xl font-medium">
            Chatterbox
          </Link>
        </div>

        {isAuthenticated ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <LoginDialog>
            <Button className="rounded-full font-normal text-xs md:text-sm lg:text-base">
              Login
            </Button>
          </LoginDialog>
        )}
      </div>
    </div>
  );
};

export default Navbar;
