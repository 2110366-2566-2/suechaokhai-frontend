import { Chat, ChatMessage, WSInEvent } from "@/models/chat";
import { ChatService } from "@/services/chat/chatService";
import getMessages from "@/services/chat/getMessages";
import React, { createContext, useCallback, useEffect, useState } from "react";

interface ChatContextType {
  chatUserId: string;
  chats: { [key: string]: Chat };
  messages: { [key: string]: ChatMessage[] };
  getAllChats: (query?: string) => Promise<Chat[]>;
  fetchMessages: () => void;
  openChat: (chatId: string) => void;
  sendMessage: (message: string) => void;
}

const ChatContext = createContext<ChatContextType>({} as ChatContextType);

interface ChatContextProviderProps {
  children: React.ReactNode;
}

const ChatContextProvider = ({ children }: ChatContextProviderProps) => {
  const [chatUserId, setChatUserId] = useState<string>("");
  const [chats, setChats] = useState<{
    [key: string]: Chat;
  }>({});

  const [messages, setMessages] = useState<{
    [key: string]: ChatMessage[];
  }>({});

  useEffect(() => {
    ChatService.getInstance().connect({
      onMessage,
    });
  }, []);

  const onMessage = useCallback<(e: MessageEvent<string>) => void>(
    (e: MessageEvent<string>) => {
      let msg = JSON.parse(e.data) as WSInEvent;

      console.log(msg);

      switch (msg.event) {
        case "MSG":
          let payload = msg.payload as ChatMessage;
          setMessages((prev) => {
            console.log(prev);
            console.log(payload.chat_id);
            let idx = prev[payload.chat_id].findIndex(
              (m) => m.message_id === msg.tag
            );

            if (idx == -1) {
              // other message
              return {
                ...prev,
                [payload.chat_id]: [...prev[payload.chat_id], payload],
              };
            } else {
              // my message
              let msgs = [...prev[payload.chat_id]];
              let mut = { ...prev[payload.chat_id][idx] };
              msgs[idx] = mut;

              return {
                ...prev,
                [payload.chat_id]: msgs,
              };
            }
          });

          break;
      }
    },
    []
  );

  const openChat = useCallback((chatId: string) => {
    setChatUserId(chatId);
    let sentAt = new Date(Date.now());
    ChatService.getInstance().send("JOIN", chatId, sentAt);
  }, []);

  const sendMessage = useCallback(
    (message: string) => {
      let sentAt = new Date(Date.now());
      let tag = ChatService.getInstance().send("MSG", message, sentAt);

      setMessages((prev) => {
        return {
          ...prev,
          [chatUserId]: [
            ...prev[chatUserId],
            {
              message_id: tag,
              sent_at: sentAt.toISOString(),
              chat_id: chatUserId,
              author: true,
              content: message,
              read_at: "",
            },
          ],
        };
      });
    },
    [chatUserId]
  );

  const getAllChats = useCallback(async (query?: string): Promise<Chat[]> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST!}/api/v1/chats?query=${query || ""}`;
      let response = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      let chats: Chat[] = (await response.json()) || [];

      setChats((prev) => {
        let cpy = { ...prev };
        for (let chat of chats) {
          cpy[chat.user_id] = chat;
        }
        return cpy;
      });
      return Promise.resolve(chats);
    } catch (err) {
      return Promise.reject(err);
    }
  }, []);

  const fetchMessages = useCallback(async () => {
    if (!messages[chatUserId] || messages[chatUserId].length === 0) {
      let messages = await getMessages(chatUserId, 0);
      setMessages((prev) => {
        let cpy = { ...prev };
        cpy[chatUserId] = messages;
        return cpy;
      });
    }
  }, [chatUserId]);

  return (
    <ChatContext.Provider
      value={{
        chatUserId,
        chats,
        messages,
        getAllChats,
        fetchMessages,
        openChat,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContextProvider, ChatContext };
