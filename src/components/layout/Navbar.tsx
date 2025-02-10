import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { Link } from "react-router";
import { Button } from "../ui/button";

import useScroll from "@/lib/hooks/useScroll";

type Props = {};

const Navbar = (props: Props) => {

    const scrolled = useScroll(10);

  return (
    <div className={`w-full fixed top-0 left-0  py-3 z-30 transition-all ${scrolled? "border-b border-gray-200 bg-white/50 backdrop-blur-lg" : "bg-white/0"}`}>
      <div className="max-w-7xl w-full mx-auto h-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-4 text-stone-800">
          <HiMiniChatBubbleLeftRight className="text-3xl" />
          <Link to="/" className="text-2xl font-medium">
            Chatterbox
          </Link>
        </div>

        <Button asChild className="rounded-full font-normal">
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
