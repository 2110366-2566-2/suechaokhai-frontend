import { Chat, ChatMessage } from "@/models/chat";
import { ChatService } from "@/services/chat/chatService";
import getMessages from "@/services/chat/getMessages";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

interface ChatContextType {
  chatUserId: string;
  chats: {
    [key: string]: {
      chat: Chat;
      messages: ChatMessage[];
    };
  };
  getAllChats: (query?: string) => Promise<Chat[]>;
  fetchMessages: () => void;
  setChatUserId: Dispatch<SetStateAction<string>>;
}

const ChatContext = createContext<ChatContextType>({} as ChatContextType);

interface ChatContextProviderProps {
  children: React.ReactNode;
}

const ChatContextProvider = ({ children }: ChatContextProviderProps) => {
  const [chatUserId, setChatUserId] = useState<string>("");
  const [chats, setChats] = useState<{
    [key: string]: {
      chat: Chat;
      messages: ChatMessage[];
    };
  }>({});

  useEffect(() => {
    ChatService.getInstance().connect({});
  }, []);

  const onMessage = useCallback<(e: MessageEvent<string>) => void>(
    (e: MessageEvent<string>) => {
      console.log(e);
    },
    []
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
          cpy[chat.user_id] = {
            chat,
            messages: [],
          };
        }
        return cpy;
      });
      return Promise.resolve(chats);
    } catch (err) {
      return Promise.reject(err);
    }
  }, []);

  const fetchMessages = useCallback(async () => {
    if (chats[chatUserId].messages.length === 0) {
      let messages = await getMessages(chatUserId, 0);
      setChats((prev) => {
        let cpy = { ...prev };
        cpy[chatUserId].messages = messages;
        return cpy;
      });
    }
  }, [chatUserId]);

  return (
    <ChatContext.Provider
      value={{ chatUserId, chats, getAllChats, fetchMessages, setChatUserId }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContextProvider, ChatContext };
