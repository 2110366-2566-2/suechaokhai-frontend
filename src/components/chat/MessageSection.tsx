"use client";

import { useEffect, useState } from "react";
import Message from "./Message";
import { ChatMessage, ChatService } from "@/services/chatService";

interface MessageSectionProps {
  userId: string;
}

export default function MessageSection({ userId }: MessageSectionProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    ChatService.getInstance()
      .getAllMessages()
      .then((res) => setMessages(res));
  }, [userId]);

  return (
    <div className="flex h-full flex-col gap-y-2 overflow-auto px-6">
      <div className="flex flex-col gap-y-4">
        {messages.map((item: ChatMessage, index: number) => (
          <Message key={index} message={item} />
        ))}
      </div>
      <div className="flex items-center justify-end px-2 text-sm">Read</div>
    </div>
  );
}
