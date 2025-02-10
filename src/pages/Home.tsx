import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

import { Link } from "react-router";

type Props = {};

export default function Home({}: Props) {
  const features = [
    {
      Icon: FileTextIcon,
      name: "Save your files",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: InputIcon,
      name: "Full text search",
      description: "Search through all your files in one place.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "Multilingual",
      description: "Supports 100+ languages and counting.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: "Notifications",
      description:
        "Get notified when someone shares a file or mentions you in a comment.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

  return (
    <>
      <div className="z-10 px-5 max-w-2xl flex flex-col ">
        <Button
          variant="outline"
          className="rounded-full justify-center items-center mx-auto text-gray-600"
        >
          <FaGithub />
          Introducing ChatterBox
        </Button>
        <h1 className=" mt-6 text-7xl font-extrabold font-dm text-center bg-gradient-to-br  from-black to-stone-500 bg-clip-text text-transparent tracking-[-0.02em] leading-[5rem] [text-wrap:balance] drop-shadow-sm ">
          Connect Instantly, Chat Effortlessly
        </h1>
        <p className="text-center text-gray-500 text-xl [text-wrap: balance] mt-6">
          Create rooms add friends, chat in real-time. <br /> Secure and
          scalable chat application.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild className="rounded-full bg-stone-800">
            <Link to="/login">Start Server</Link>
          </Button>
        </div>
      </div>

      <div className="mt-12">
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </>
  );
}
