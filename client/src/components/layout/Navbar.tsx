import useScroll from "@/lib/hooks/useScroll";
import { RootState, } from "@/store/store";
import { useSelector } from "react-redux";
import { FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";
import { Link } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";



const Navbar = () => {
  const scrolled = useScroll(10);
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

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
          <Button>Logout</Button>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full font-normal text-xs md:text-sm lg:text-base">
                Login
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center font-bold text-3xl">
                  Login
                </DialogTitle>
                <DialogDescription className="text-center text-base">
                  Welcome back!
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center items-center gap-4">
                <Button className="flex-1">
                  <FaGoogle />
                  Login with Google
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default Navbar;
