import Image from "next/image";
import { useState } from "react";
import ChatBox from "./ChatBox";
export default function ChatIcon() {
  return (
    <div className="flex size-16 cursor-pointer items-center justify-center rounded-full bg-ci-blue shadow-xl shadow-slate-400 hover:bg-ci-dark-blue">
      <Image
        src="/img/chat/chat_icon.svg"
        width={40}
        height={40}
        alt="ไอบอสสสส"
      />
    </div>
  );
}
