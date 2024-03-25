"use client";
import getCurrentUser from "@/services/users/getCurrentUser";
import { useContext, useEffect, useState } from "react";
import UserData from "@/models/UserData";
import ChatIcon from "./ChatIcon";
import ChatBox from "./ChatBox";
import MessageBox from "./MessageBox";
import { ChatContext, ChatContextProvider } from "@/context/ChatContext";
import ChatNotification from "./ChatNotification";

export default function ChatModule() {
  const [user, setUser] = useState<UserData>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isChat, setChat] = useState<boolean>(false);

  const ctx = useContext(ChatContext);

  useEffect(() => {
    async function getUser() {
      const user = await getCurrentUser();
      if (user) {
        setUser(user);
      }
    }
    getUser();
  }, []);

  return (
    <ChatContextProvider>
      <div className="fixed bottom-0 right-0 flex">
        {user && (
          <div className="flex flex-row items-end justify-end gap-x-6">
            {isChat && <MessageBox user={ctx.chatUserId} setChat={setChat} />}
            {isOpen && <ChatBox setOpen={setOpen} setChat={setChat} />}
            <div className="relative p-4" onClick={() => setOpen(!isOpen)}>
              <ChatNotification />
              <ChatIcon />
            </div>
          </div>
        )}
      </div>
    </ChatContextProvider>
  );
}
