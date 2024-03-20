import Image from "next/image";
import { Chat, ChatService } from "@/services/chatService";

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
        <Image
          src={
            chat.profile_image_url.length > 0
              ? chat.profile_image_url
              : "/img/PropertyNavBar/ic_round-account-circle.svg"
          }
          className="bg-ci-gray"
          alt="profile image"
          draggable={false}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="truncate text-xl font-bold">{`${chat.first_name} ${chat.last_name}`}</div>
    </div>
  );
}
