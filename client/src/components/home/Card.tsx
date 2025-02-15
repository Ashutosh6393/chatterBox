import { ReactNode } from "react";
import Markdown from "react-markdown";

type Props = {
  title: string;
  description: string;
  bg: ReactNode;
  large?: boolean;
};

const Card = ({ title, description, bg, large = false }: Props) => {
  return (
    <div
      className={`group flex flex-col items-center justify-between gap-2 p-4 relative h-96 overflow-hidden rounded-xl border  border-gray-200 bg-white shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex w-full h-[60%] items-center justify-center group-hover:scale-95 transition-all duration-300">
        {bg}
      </div>
      <h1 className="text-2xl font-semibold bg-gradient-to-br from-black to-zinc-600 bg-clip-text text-transparent ">
        {title}
      </h1>
      <div className="prose-sm mb-4 mt-3 flex-1  leading-normal text-center text-gray-500 text-wrap:balance md:prose">
        <Markdown
          components={{
            a: ({ node, ...props }) => (
              <a
                target="_blank"
                {...props}
                className="font-medium text-gray-800 underline transition-colors"
              />
            ),
            code: ({ node, ...props }) => (
              <code
                {...props}
                // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                inline="true"
                className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
              />
            ),
          }}
        >
          {description}
        </Markdown>
      </div>
    </div>
  );
};

export default Card;
