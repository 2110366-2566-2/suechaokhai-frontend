"use client";

import ProfileImage from "./ProfileImage";
import { Chat } from "@/models/chat";
import { useContext } from "react";
import { ChatContext } from "@/context/ChatContext";

interface UserCardProps {
  chat: Chat;
  setChat: Function;
}

export default function UserCard({ chat, setChat }: UserCardProps) {
  const ctx = useContext(ChatContext);
  return (
    <div
      className="flex h-20 w-full cursor-pointer flex-row items-center justify-start gap-2 rounded-xl p-2 hover:bg-ci-light-gray"
      onClick={() => {
        setChat(true);
        ctx.openChat(chat.user_id);
      }}
    >
      <div className="aspect-square min-w-16 overflow-hidden rounded-full">
        <ProfileImage src={chat.profile_image_url} />
      </div>
      <div className="overflow-hidden">
        <div className="truncate text-xl font-bold">{`${chat.first_name} ${chat.last_name}`}</div>
        <div className="truncate">{chat.content}</div>
      </div>
    </div>
  );
}
