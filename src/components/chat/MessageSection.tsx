"use client";

import React, { useEffect, useRef } from "react";
import Message from "./Message";
import { ChatMessage } from "@/models/chat";

interface MessageSectionProps {
  messages: ChatMessage[];
}

export default function MessageSection({ messages }: MessageSectionProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => scrollToBottom(), [messages]);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "instant" });
  };

  return (
    <div className="flex h-full flex-col gap-y-2 overflow-auto px-6">
      <div className="flex flex-col gap-y-4">
        {messages &&
          messages.map((item: ChatMessage) => (
            <Message key={item.message_id} message={item} />
          ))}
      </div>
      <div className="flex items-center justify-end px-2 text-sm">Read</div>
      <div ref={bottomRef}></div>
    </div>
  );
}
