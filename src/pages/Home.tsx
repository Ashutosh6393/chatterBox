import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { SiAmazonrds } from "react-icons/si";

import Card from "@/components/home/Card";

import {
  SiApachekafka,
  SiTypescript,
  SiSocketdotio,
  SiClerk,
} from "react-icons/si";

import { Link } from "react-router";

type Props = {};

export default function Home({}: Props) {
  const cardData = [
    {
      title: "Modern Stack",
      description:
        "Powered by Redis, Kafka, TypeScript, and more for high performance.",
      bg: (
        <div className="flex gap-32">
          <DiRedis className="text-7xl text-stone-700" />{" "}
          <SiApachekafka className="text-7xl text-stone-900" />{" "}
          <SiTypescript className="text-7xl text-stone-900" />
        </div>
      ),
      large: true,
    },
    {
      title: "Real-time Communication",
      description:
        "ChatterBox uses Socket.io for instant message delivery with low latency.",
      bg: (
        <div>
          <SiSocketdotio className="text-7xl text-stone-900" />
        </div>
      ),
    },
    {
      title: "Seamless Authentication",
      description: "Secure and smooth user authentication powered by Clerk.",
      bg: (
        <div>
          <SiClerk className="text-7xl text-stone-900" />
        </div>
      ),
    },
    {
      title: "Built for Scale",
      description:
        "Designed for scalability and can handle high traffic loads.",
      bg: (
        <div>
          <SiAmazonrds className="text-7xl text-stone-900" />
        </div>
      ),
    },

    {
      title: "Real-Time Alerts",
      description: "ChatterBox sends real-time alerts to your team members.",
      bg: (
        <div>
          <RiNotificationBadgeFill className="text-7xl text-stone-900" />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="z-10 max-w-2xl flex flex-col ">
        <Button
          variant="outline"
          className="rounded-full justify-center items-center mx-auto text-gray-600"
          asChild
        >
          <a href="https://github.com/Ashutosh6393/chatterBox" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            Introducing ChatterBox
          </a>
        </Button>
        <h1 className=" mt-6 text-7xl font-extrabold font-dm text-center bg-gradient-to-br  from-black to-stone-500 bg-clip-text text-transparent tracking-[-0.02em] leading-[5rem] [text-wrap:balance] drop-shadow-sm ">
          Connect Instantly, Chat Effortlessly
        </h1>
        <p className="text-center text-gray-500 text-xl text-balance mt-6">
          Create rooms add friends, chat in real-time. <br /> Secure and
          scalable chat application.
        </p>
        <div className="mt-6 flex justify-center">
          <Button
            asChild
            className="rounded-full bg-stone-800 shadow-gray-500 shadow-md"
          >
            <Link to="/login">Start Server</Link>
          </Button>
        </div>
      </div>

      <div className="z-10 mt-12 w-full grid grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </>
  );
}
