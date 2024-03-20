import Image from "next/image";
import ChatList from "./ChatList";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function ChatBox({
  setOpen,
  setChat,
  setChatWith,
}: {
  setOpen: Function;
  setChat: Function;
  setChatWith: Function;
}) {
  const peopleNames = [
    "John",
    "Emma",
    "Michael",
    "Sophia",
    "William",
    "Olivia",
    "James",
    "Ava",
    "Alexander",
    "Isabella",
  ];
  return (
    <div className="flex h-[528px] w-96 flex-col gap-y-4 rounded-t-xl bg-white px-6 py-5 shadow-xl shadow-slate-500">
      <div className="flex flex-row justify-between">
        <div className="text-xl font-bold">Chat</div>
        <div className="flex flex-row gap-x-4 text-lg">
          <button className="rounded-md hover:bg-slate-300">
            <Image
              src="/img/chat/create-message-icon.svg"
              width={24}
              height={24}
              alt="ไอบอสสส"
            />
          </button>
          <button
            className="rounded-md hover:bg-slate-300"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Image
              src="/img/chat/close-icon.svg"
              width={24}
              height={24}
              alt="ไอบอสสส"
            />
          </button>
        </div>
      </div>
      <SearchBar />
      <ChatList
        userList={peopleNames}
        setChat={setChat}
        setChatWith={setChatWith}
      />
    </div>
  );
}