import { SideBar, ChatPanael } from "@/components";
const Chat = () => {
  return (
    <div className="w-full h-screen pt-20 pb-10 z-20 flex gap-3 ">
      <aside className="h-full ">
        <SideBar />
      </aside>
      <main className="flex-1 h-full">
        <ChatPanael />
      </main>
    </div>
  );
};

export default Chat;
