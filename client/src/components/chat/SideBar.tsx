import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RiAddLargeFill } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

export const ListItem = () => {
  return (
    <div className="w-full flex justify-start items-center h-14 p-1 gap-4 border-b hover:bg-slate-100">
      <Avatar className=" aspect-square">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p>Ashutosh Verma</p>
    </div>
  );
};

const SideBar = (props: Props) => {
  return (
    <>
      <Tabs
        defaultValue="account"
        className="w-full h-full p-2 rounded-lg shadow-lg flex flex-col shadow-zinc-500/5  bg-white "
      >
        <TabsList className="w-full ">
          <TabsTrigger value="account" className="flex-1">
            Friends
          </TabsTrigger>
          <TabsTrigger value="password" className="flex-1">
            Rooms
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="h-[90%]">
          <div className="flex flex-col h-full">
            <Button className="rounded-full flex-0" variant={"secondary"}>
              Add a Friend
              <RiAddLargeFill />
            </Button>
            <Separator className="my-2" />
            <ScrollArea className=" mt-2 flex-1">
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
          
            </ScrollArea>
          </div>
        </TabsContent>
        <TabsContent value="password">
        <div className="flex flex-col h-full">
            <Button className="rounded-full flex-0" variant={"secondary"}>
              Create a Room
              <RiAddLargeFill />
            </Button>
            <Separator className="my-2" />
            <ScrollArea className=" mt-2 flex-1">
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
          
            </ScrollArea>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default SideBar;
