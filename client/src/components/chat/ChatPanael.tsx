import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { FaVideo } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";

import { IoCallSharp } from "react-icons/io5";

type ChatPanelHeaderProps = {
  className: string;
};

export const ChatPanelHeader = ({ className }: ChatPanelHeaderProps) => {
  return (
    <div className={`w-full flex gap-2 justify-between ${className}`}>
      <div className="flex justify-center items-center gap-2 pb-2">
        <Avatar className=" aspect-square ">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="font-semibold text-md text-zinc-800">Noobs</p>
      </div>
      <div className="flex gap-2 text-zinc-800 text-xl justify-center items-center">
        <Button className=" " variant={"outline"}>
          <IoCallSharp />
        </Button>
        <Button className="" variant={"outline"}>
          <FaVideo />
        </Button>
      </div>
    </div>
  );
};

export const ChatPanelFooter = ({ className }: { className: string }) => {
  // const [isEmojiOpen, setIsEmojiOpen] = useState(false)
  return (
    <div className={`flex border border-zinc-700 rounded-full ${className}`}>
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <Button className="hover:bg-inherit rounded-full" variant={"ghost"}> */}

      {/* <EmojiPicker open={isEmojiOpen} /> */}
      {/* <BsEmojiSmile /> */}
      {/* </Button> */}
      <Input
        type="text"
        className="border-none outline-none focus-visible:ring-0 focus:shadow-none"
      />
      <Button className="rounded-full" variant={"ghost"}>
        <IoSend />
      </Button>
    </div>
  );
};

const ChatPanael = () => {
  return (
    <div className="rounded-lg p-5 bg-white shadow-lg shadow-zinc-500/5 h-full flex flex-col">
      <ChatPanelHeader className="self-start" />
      <Separator />
      <div className="flex-1"></div>
      <ChatPanelFooter className={"self-stretch "} />
    </div>
  );
};

export default ChatPanael;
