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

  const splitMessages = (): { sent: ChatMessage[]; sending: ChatMessage[] } => {
    let idx = messages.findIndex((msg) => msg.read_at === "sending");
    idx = idx === -1 ? messages.length : idx;

    return {
      sent: messages.slice(0, idx),
      sending: messages.slice(idx),
    };
  };

  const { sent, sending } = splitMessages();

  return (
    <div className="flex h-full flex-col overflow-auto px-6">
      <div className="flex flex-col gap-4">
        {sent.map((item: ChatMessage) => (
          <Message key={item.message_id} message={item} />
        ))}
      </div>
      <div className="flex flex-col gap-4 text-ci-dark-gray">
        {sending.map((item: ChatMessage) => (
          <Message key={item.message_id} message={item} />
        ))}
      </div>
      <div ref={bottomRef}></div>
    </div>
  );
}
