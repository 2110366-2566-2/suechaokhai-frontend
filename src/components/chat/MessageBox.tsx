"use client";

import Image from "next/image";
import TextFieldSection from "./TextFieldSection";
import ProfileImage from "./ProfileImage";
import { useContext, useEffect } from "react";
import MessageSection from "./MessageSection";
import { ChatContext } from "@/context/ChatContext";

interface MessageBoxProps {
  user: string;
  setChat: Function;
}

export default function MessageBox({ user, setChat }: MessageBoxProps) {
  const ctx = useContext(ChatContext);
  const chat = ctx.chats[ctx.chatUserId].chat;

  useEffect(() => {
    ctx.fetchMessages();
  }, [ctx.chatUserId]);

  const sendMessage = (msg: string) => {};

  return (
    <div className="flex h-[528px] w-96 flex-col gap-4 rounded-t-xl bg-white pb-2 shadow-xl shadow-slate-500">
      <div className="flex flex-row items-center justify-start gap-4 px-6 py-4 shadow-lg shadow-slate-300">
        <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full">
          <ProfileImage src={chat.profile_image_url} />
        </div>
        <div className="w-full truncate text-xl font-bold">{`${chat.first_name} ${chat.last_name}`}</div>
        <div className="flex shrink-0 flex-row gap-x-4 text-lg">
          <button className="rounded-md hover:bg-slate-300">
            <Image
              src="/img/chat/agreement.svg"
              width={24}
              height={24}
              alt="agreement"
            />
          </button>
          <button
            className="rounded-md hover:bg-slate-300"
            onClick={() => {
              setChat(false);
            }}
          >
            <Image
              src="/img/chat/close-icon.svg"
              width={24}
              height={24}
              alt="close"
            />
          </button>
        </div>
      </div>
      <MessageSection messages={ctx.chats[ctx.chatUserId].messages} />
      <TextFieldSection sendMessage={sendMessage} />
    </div>
  );
}
