import { SiApachekafka, SiTypescript, SiSocketdotio } from "react-icons/si";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { SiAmazonrds } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RootState } from "@/store/store";
import Card from "@/components/home/Card";
import { DiRedis } from "react-icons/di";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import { useEffect } from "react";
import { AppDispatch } from "@/store/store";
import { authClient } from "@/lib/auth-client";
import { login } from "@/store/features/authSlice";

export default function Home() {
  const dispatch =  useDispatch<AppDispatch>();

  

  try {
    const {data} = authClient.useSession();
    if(data){
      console.log(data);
      const {user} = data;
      dispatch(login({name: user.name, email: user.email, profilePicture: user.image}));
    }
    
  } catch (error) {
    console.error("Error fetching session", error);
    
  }


 

  

//   const { 
//     data: session, 
//     isPending, //loading state
//     error, //error object
//     refetch //refetch the session
// } = authClient.useSession() 



  const cardData = [
    {
      title: "Modern Stack",
      description:
        "Powered by [Redis](https://redis.io/) for fast caching, [Kafka](https://kafka.apache.org/) realtime streaming, [TypeScript](https://www.typescriptlang.org/), and more for high and scalable performance.",
      bg: (
        <div className="flex gap-32">
          <DiRedis className="text-7xl text-zinc-800" />{" "}
          <SiApachekafka className="text-7xl text-zinc-800" />{" "}
          <SiTypescript className="text-7xl text-zinc-800" />
        </div>
      ),
      large: true,
    },
    {
      title: "Real-time Communication",
      description:
        "ChatterBox uses [Socket.io](https://socket.io/) for instant message delivery with low latency.",
      bg: (
        <div>
          <SiSocketdotio className="text-7xl text-zinc-800" />
        </div>
      ),
    },
    {
      title: "Seamless Authentication",
      description:
        "Secure and smooth user authentication powered by [Better Auth](https://www.better-auth.com/).",
      bg: (
        <div className="aspect-square w-20">
          <img src="/better-auth.png" alt="better auth logo" />
        </div>
      ),
    },
    {
      title: "Built for Scale",
      description:
        "Designed for `scalability` and can handle high traffic loads.",
      bg: (
        <div>
          <SiAmazonrds className="text-7xl text-zinc-800" />
        </div>
      ),
    },

    {
      title: "Real-Time Alerts",
      description: "ChatterBox sends `real-time` alerts to your team members.",
      bg: (
        <div>
          <RiNotificationBadgeFill className="text-7xl text-zinc-800" />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="z-10 max-w-2xl flex flex-col ">
        <Button
          variant="outline"
          className="rounded-full justify-center items-center mx-auto text-zinc-600"
          asChild
        >
          <a
            href="https://github.com/Ashutosh6393/chatterBox"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            Introducing ChatterBox
          </a>
        </Button>
        <h1 className=" mt-6 text-7xl font-extrabold font-dm text-center bg-gradient-to-br  from-black to-zinc-500 bg-clip-text text-transparent tracking-[-0.02em] leading-[5rem] [text-wrap:balance] drop-shadow-sm ">
          Connect Instantly, Chat Effortlessly
        </h1>
        <p className="text-center text-zinc-500 text-xl text-balance mt-6">
          Create rooms add friends, chat in real-time. <br /> Secure and
          scalable chat application.
        </p>
        <div className="mt-6 flex justify-center">
          <Button
            asChild
            className="rounded-full bg-zinc-800 shadow-zinc-500 shadow-md hover:bg-zinc-700"
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
