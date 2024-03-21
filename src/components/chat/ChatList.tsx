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
    <div className="flex h-full flex-col overflow-auto">
      {chats.length === 0 && (
        <div className="flex h-full select-none items-center justify-center font-semibold">
          No chats
        </div>
      )}
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
