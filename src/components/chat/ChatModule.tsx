"use client";
import getCurrentUser from "@/services/getCurrentUser";
import { useEffect, useState } from "react";
import UserData from "../models/UserData";
import ChatIcon from "./ChatIcon";
import ChatBox from "./ChatBox";
import MessageBox from "./MessageBox";
import { ChatService } from "@/services/chatService";

export default function ChatModule() {
  const [user, setUser] = useState<UserData>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isChat, setChat] = useState<boolean>(false);
  const [chatWith, setChatWith] = useState<string>("test");

  useEffect(() => {
    async function getUser() {
      const user = await getCurrentUser();
      if (user) {
        setUser(user);
      }
    }
    getUser();
  }, []);

  const onOpenChat = () => {
    ChatService.getInstance().connect(() => {
      setOpen(!isOpen);
    });
  };

  return (
    <div className="fixed bottom-0 right-0 flex">
      {user && (
        <div className="flex flex-row items-end justify-end gap-x-6">
          {isChat && <MessageBox user={chatWith} setChat={setChat} />}
          {isOpen && (
            <ChatBox
              setOpen={setOpen}
              setChat={setChat}
              setChatWith={setChatWith}
            />
          )}
          <div className="p-4" onClick={onOpenChat}>
            <ChatIcon />
          </div>
        </div>
      )}
    </div>
  );
}
