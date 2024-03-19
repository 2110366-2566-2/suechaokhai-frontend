"use client";

import { Chat, ChatMessage, ChatService } from "@/services/chatService";
import { useEffect, useRef, useState } from "react";

export default function Chat() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const textfield = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ChatService.getInstance().connect(() => {
      ChatService.getInstance()
        .getAllChats()
        .then((res) => setChats(res));

      ChatService.getInstance().on("MSG", (payload: ChatMessage) => {
        console.log(payload);
      });
    });
  }, []);

  async function openChat(userId: string) {
    let messages = await ChatService.getInstance().openChat(userId);
    console.log(messages);
    setMessages(messages);
  }

  async function getMore() {
    let messages = await ChatService.getInstance().getNextMessages();
    console.log(messages);
    setMessages((prevMessages: ChatMessage[]) => {
      return messages.concat(prevMessages);
    });
  }

  function sendMessage() {
    if (textfield.current && textfield.current.value !== "")
      ChatService.getInstance().sendMessage(
        textfield.current.value,
        (msg: ChatMessage) => {
          console.log("Sent!", msg);
        }
      );
  }

  return (
    <div>
      <input type="text" className="border" ref={textfield} />
      <button onClick={sendMessage}>Send</button>
      {chats &&
        chats.map((e, i) => (
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
