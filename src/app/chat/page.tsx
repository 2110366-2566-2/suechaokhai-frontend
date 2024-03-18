"use client";

import { Chat, ChatMessage, ChatService } from "@/services/chatService";
import { useEffect, useState } from "react";

export default function Chat() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    ChatService.getInstance().connect(() => {
      ChatService.getInstance()
        .getAllChats()
        .then((res) => setChats(res));
    });
  }, []);

  async function openChat(userId: string) {
    let messages = await ChatService.getInstance().openChat(userId);
    console.log(messages);
    setMessages(messages);
  }

  async function getMore() {
    let messages = await ChatService.getInstance().getMessages();
    console.log(messages);
    setMessages((prevMessages: ChatMessage[]) => {
      return messages.concat(prevMessages);
    });
  }

  return (
    <div>
      {chats.map((e, i) => (
        <div key={i} onClick={() => openChat(e.user_id)}>
          {JSON.stringify(e)}
        </div>
      ))}
      <button onClick={() => getMore()}>get more</button>
      {messages.map((e, i) => (
        <div key={i}>{e.content}</div>
      ))}
    </div>
  );
}
