import Image from "next/image";
import { Chat, ChatService } from "@/services/chatService";
import ProfileImage from "./ProfileImage";

export default function UserCard({
  chat,
  setChat,
  setChatWith,
}: {
  chat: Chat;
  setChat: Function;
  setChatWith: Function;
}) {
  return (
    <div
      className="flex h-20 w-full cursor-pointer flex-row items-center justify-start gap-2 rounded-xl p-2 hover:bg-ci-light-gray"
      onClick={() => {
        setChat(true);
        setChatWith(chat.user_id);
        ChatService.getInstance().openChat(chat.user_id);
      }}
    >
      <div className="relative flex aspect-square w-16 items-center justify-center overflow-hidden rounded-full">
        <ProfileImage src={chat.profile_image_url} />
      </div>
      <div className="truncate text-xl font-bold">{`${chat.first_name} ${chat.last_name}`}</div>
    </div>
  );
}
