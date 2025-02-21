import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { FaVideo } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <Input
        type="text"
        placeholder="type something...."
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
      <ChatPanelHeader className=""/>
      <Separator />
      <div className="flex-1 h-0 min-h-0 p-2">
        <ScrollArea className="h-full w-full rounded-md border border-none ">
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester. And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          couldn't help but laugh. And once they started laughing, they couldn't
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
          nobis, asperiores beatae aliquam rem magnam accusantium dolorem natus
          molestiae quibusdam ipsum nulla possimus facere, distinctio deserunt!
          Unde optio ipsa voluptate ratione, harum veniam saepe eveniet
          cupiditate, illo asperiores vero corrupti natus soluta nisi, maiores
          laboriosam tempore vel mollitia cumque. Dolor fugit laborum
          accusantium accusamus, esse hic omnis animi architecto voluptatem unde
          praesentium? Ipsa veritatis fugit distinctio consequatur voluptates
          reiciendis ullam neque nesciunt eius odit veniam quasi illo corrupti,
          ut impedit ipsum ducimus repellendus labore? Pariatur dolores quasi
          deleniti quod illum? Ducimus, nobis! Fuga sed deleniti quae minus
          fugit, nostrum saepe odit. Praesentium a iusto at quod, ab quaerat
          rerum tempora, nulla sint repellat eligendi ut molestiae corporis odio
          vitae nostrum doloremque rem fugiat, nihil tempore voluptatem ullam
          accusantium. Perferendis exercitationem sed magnam repudiandae minima
          blanditiis nisi, natus ratione dolores consectetur cum quas accusamus
          nostrum eos beatae, commodi eius nihil. Doloremque velit tenetur
          delectus? Quos, labore maxime. Explicabo eos repellat voluptatem
          facilis eligendi qui velit. Nulla quibusdam odio enim, magni impedit
          et facere aspernatur, nam labore rerum officiis voluptas aut nostrum
          quam? Expedita maiores sapiente, repudiandae architecto sint quam
          explicabo eius quod impedit eos aliquid labore, natus a? Non doloribus
          magnam accusamus sed error debitis, aspernatur impedit voluptas
          quibusdam iure quam voluptatum nam cumque? Quae doloremque voluptates
          esse mollitia earum dicta fugiat sed deserunt ducimus nesciunt. Omnis
          doloribus amet, corrupti nostrum repudiandae aut nobis, nihil nesciunt
          quos quas non suscipit reiciendis iusto velit sunt! Voluptatem,
          quisquam ad perspiciatis, maiores qui provident vero ipsa aspernatur
          atque distinctio dicta nam iusto nulla veritatis fugit in! Deserunt,
          dolor corrupti. Delectus ea nihil commodi similique quia veritatis
          perspiciatis rem ratione tempore illo officia, laboriosam sequi autem,
          magnam optio provident, est eaque eligendi rerum nobis! Adipisci nisi
          est quia quae tenetur at sit, itaque porro praesentium placeat dolorem
          dolorum! Architecto obcaecati natus quisquam velit vel amet debitis
          excepturi, quasi ab asperiores, nihil voluptates deleniti iste
          necessitatibus animi praesentium rerum voluptatem quia id quibusdam.
          Pariatur at beatae rem velit dicta facilis doloribus id iure quos?
          Animi quas odio expedita dolor voluptate mollitia accusantium porro
          consequatur eos beatae autem numquam ratione ad esse architecto,
          dolorem cum ducimus deserunt veritatis tenetur repellendus molestias
          suscipit illo? Ab dicta dignissimos nihil mollitia dolorum repellendus
          earum ducimus quibusdam amet, magni aut nam consequuntur perspiciatis.
          Eius, illum necessitatibus corrupti eaque voluptate harum natus minus
          dicta facilis qui veniam? Perspiciatis nam qui deleniti similique
          maiores! Soluta est doloremque rem tenetur beatae dolor perspiciatis
          error facilis. Id libero tenetur nulla nesciunt alias reprehenderit
          sunt rerum quidem, facere magni. Deserunt ipsum est consectetur sunt
          doloremque provident, laborum, assumenda dicta quos, non soluta totam
          tenetur officiis obcaecati voluptatem unde! Temporibus at ab sunt
          optio dolorem quis sequi perspiciatis nobis odit. Tempore quae
          adipisci iusto ipsum voluptates error et temporibus in ratione culpa
          voluptatem, veritatis similique, nostrum alias perferendis voluptate
          corporis expedita, illum sed dolores suscipit maiores mollitia.
          Possimus reprehenderit minima ea explicabo eveniet eligendi doloremque
          est, nihil deserunt doloribus, sint quod eum hic saepe reiciendis?
          Quam, facilis? stop.
        </ScrollArea>
      </div>
      <ChatPanelFooter className={"self-stretch"} />
    </div>
  );
};

export default ChatPanael;
