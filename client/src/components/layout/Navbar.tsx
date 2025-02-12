import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import useScroll from "@/lib/hooks/useScroll";
import { useEffect, useState } from "react";

const loginHandler = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: import.meta.env.VITE_BASE_URL + "/chat",
  });

  console.log(data);
};

const logoutHandler = async () => {
  const data = await authClient.signOut();

  console.log(data);
};

const Navbar = () => {
  const scrolled = useScroll(10);

  const [session, setSession] = useState(null);

  useEffect(() => {
    async function checkAuth() {
      const { data: session, error } = await authClient.getSession();
      if (error) {
        console.error(error);
      }

      setSession(session);
    }

    checkAuth();
  }, []);

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

        {session ? (
          <Button onClick={logoutHandler}>Logout</Button>
        ) : (
          <Dialog>
            <DialogTrigger className="rounded-full font-normal text-xs md:text-sm lg:text-base">
              Login
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">Login</DialogTitle>
              </DialogHeader>
              <Button onClick={loginHandler}>Login with Google</Button>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default Navbar;
