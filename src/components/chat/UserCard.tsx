import Image from "next/image";
import { useState } from "react";
import MessageBox from "./MessageBox";

export default function UserCard({
  userId,
  setChat,
  setChatWith,
}: {
  userId: string;
  setChat: Function;
  setChatWith: Function;
}) {
  return (
    <div
      className="flex h-20 w-full cursor-pointer flex-row items-center justify-start rounded-xl p-2 hover:bg-ci-light-gray"
      onClick={() => {
        setChat(true);
        setChatWith(userId);
      }}
    >
      <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full">
        <Image
          src="/img/babywinsmoking.jpg"
          alt="รูปปก"
          width={16}
          height={16}
          draggable={false}
          layout="responsive"
        />
      </div>
      <div className="px-8 text-xl font-bold">{userId}</div>
    </div>
  );
}
