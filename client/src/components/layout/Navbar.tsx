import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { Link } from "react-router";
import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import useScroll from "@/lib/hooks/useScroll";

const Navbar = () => {
  const scrolled = useScroll(10);

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
          <HiMiniChatBubbleLeftRight />
          <Link to="/" className="text-lg lg:text-2xl font-medium">
            Chatterbox
          </Link>
        </div>

        <Dialog >
          <DialogTrigger>
            <Button className="rounded-full font-normal text-xs md:text-sm lg:text-base">
              Login
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center">Login</DialogTitle>
            </DialogHeader>
            <Button>Login with Google</Button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Navbar;
