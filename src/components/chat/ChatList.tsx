import { Chat } from "@/services/chatService";
import UserCard from "./UserCard";

export default function ChatList({
  chats,
  setChat,
  setChatWith,
}: {
  chats: Chat[];
  setChat: Function;
  setChatWith: Function;
}) {
  return (
    <div className="flex flex-col overflow-auto">
      {chats &&
        chats.map((item: Chat, index: number) => (
          <UserCard
            key={index}
            chat={item}
            setChat={setChat}
            setChatWith={setChatWith}
          />
        ))}
    </div>
  );
}
