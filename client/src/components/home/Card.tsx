import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  bg: ReactNode;
  large?: boolean;
};

const Card = ({ title, description, bg, large = false }: Props) => {
  return (
    <div
      className={`group flex flex-col items-center justify-center gap-2 p-4 relative h-96 overflow-hidden rounded-xl border  border-gray-200 bg-white shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex-1 w-full flex items-center justify-center group-hover:scale-95 transition-all">
        {bg}
      </div>
      <h1 className="text-2xl font-semibold bg-gradient-to-br from-black to-zinc-600 bg-clip-text text-transparent ">
        {title}
      </h1>
      <p className="mt-3 text-center text-zinc-700 mb-5 text-balance ">
        {description} 
        
        
      </p>
    </div>
  );
};

export default Card;
