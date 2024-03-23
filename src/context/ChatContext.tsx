import {
  Chat,
  ChatMessage,
  ReadMessage,
  WSInEvent,
  WSOutEvent,
  WSOutEventType,
} from "@/models/chat";
import getMessages from "@/services/chat/getMessages";
import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface ChatContextType {
  chatUserId: string;
  chats: { [key: string]: Chat };
  messages: { [key: string]: ChatMessage[] };
  fetchChats: (query?: string) => Promise<Chat[]>;
  fetchMessages: () => void;
  sendMessage: (message: string) => void;
  openChat: (chatId: string) => void;
  closeChat: () => void;
}

const ChatContext = createContext<ChatContextType>({} as ChatContextType);

interface ChatContextProviderProps {
  children: React.ReactNode;
}

const ChatContextProvider = ({ children }: ChatContextProviderProps) => {
  const connRef = useRef<WebSocket>();
  const [chatUserId, setChatUserId] = useState<string>("");
  const [chats, setChats] = useState<{
    [key: string]: Chat;
  }>({});

  const [messages, setMessages] = useState<{
    [key: string]: ChatMessage[];
  }>({});

  const appendMessage = useCallback((chatId: string, msg: ChatMessage) => {
    setMessages((prev) => {
      return {
        ...prev,
        [chatId]: [...prev[chatId], msg],
      };
    });
  }, []);

  const replaceMessage = useCallback(
    (chatId: string, index: number, msg: ChatMessage) => {
      setMessages((prev) => {
        let msgs = [...prev[chatId]];
        msgs[index] = msg;
        return {
          ...prev,
          [chatId]: msgs,
        };
      });
    },
    []
  );

  const onMessage = useCallback(
    (e: MessageEvent<string>) => {
      let msg = JSON.parse(e.data) as WSInEvent;

      console.log(msg);

      switch (msg.event) {
        case "MSG":
          {
            let payload = msg.payload as ChatMessage;

            setChats((prev) => {
              return {
                ...prev,
                [payload.chat_id]: {
                  ...prev[payload.chat_id],
                  content: payload.content,
                  unread_messages:
                    payload.chat_id === chatUserId
                      ? 0
                      : prev[payload.chat_id].unread_messages + 1,
                },
              };
            });

            let idx = messages[payload.chat_id].findIndex(
              (m) => m.message_id === msg.tag
            );

            // other message
            if (idx == -1) appendMessage(payload.chat_id, payload);
            // my message
            else replaceMessage(payload.chat_id, idx, payload);
          }
          break;

        case "READ":
          {
            let payload = msg.payload as ReadMessage;

            setMessages((prev) => {
              return {
                ...prev,
                [payload.chat_id]: prev[payload.chat_id].map((m) =>
                  m.read_at === null ? { ...m, read_at: payload.read_at } : m
                ),
              };
            });
          }
          break;
      }
    },
    [chatUserId, messages, appendMessage, replaceMessage]
  );

  const send = useCallback(
    (event: WSOutEventType, content: string, sentAt: Date): string => {
      if (!connRef.current) return "";

      let tag: string = Math.random().toString(16).substring(2);
      let msg: WSOutEvent = {
        event,
        content,
        sent_at: sentAt.toISOString(),
        tag,
      };

      connRef.current.send(JSON.stringify(msg));

      return tag;
    },
    []
  );

  const sendMessage = useCallback(
    (message: string) => {
      let sentAt = new Date(Date.now());
      let tag = send("MSG", message, sentAt);

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
              read_at: "sending",
            },
          ],
        };
      });
    },
    [chatUserId, send]
  );

  const fetchChats = useCallback(async (query?: string): Promise<Chat[]> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST!}/api/v1/chats?query=${query || ""}`;
      let response = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      let chats: Chat[] = (await response.json()) || [];

      setChats(() => {
        return Object.fromEntries(chats.map((chat) => [chat.user_id, chat]));
      });

      setMessages((prev) => {
        let cpy = { ...prev };
        for (let chat of chats) cpy[chat.user_id] = [];
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
        return { ...prev, [chatUserId]: messages };
      });
    }
  }, [chatUserId, messages]);

  const openChat = useCallback(
    (chatId: string) => {
      setChatUserId(chatId);
      send("JOIN", chatId, new Date(Date.now()));
      fetchChats();
    },
    [send, fetchChats]
  );

  const closeChat = useCallback(() => {
    setChatUserId("");
    send("LEFT", "", new Date(Date.now()));
  }, [send]);

  useEffect(() => {
    if (!connRef.current) {
      let conn = new WebSocket(
        `${process.env.NEXT_PUBLIC_WS_BACKEND_HOST!}/ws/chats`
      );

      connRef.current = conn;
    }

    connRef.current.onopen = (e: Event) => {
      console.log("Connected");
    };

    connRef.current.onclose = (e: CloseEvent) => {
      console.log("Disconnected", e.reason);
    };

    connRef.current.onmessage = (e: MessageEvent<string>) => {
      onMessage(e);
    };
  }, [onMessage]);

  return (
    <ChatContext.Provider
      value={{
        chatUserId,
        chats,
        messages,
        fetchChats,
        fetchMessages,
        sendMessage,
        openChat,
        closeChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContextProvider, ChatContext };
