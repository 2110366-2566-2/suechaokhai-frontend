"use client";

import { ChatService } from "@/services/chat/chatService";
import Image from "next/image";
import { useState } from "react";

interface TextFieldSectionProps {
  sendMessage: (msg: string) => void;
}

export default function TextFieldSection(props: TextFieldSectionProps) {
  const { sendMessage } = props;

  const [message, setMessage] = useState<string>("");

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendHandler();
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendHandler = () => {
    if (message.trim().length > 0) {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-row gap-x-4 px-6 py-2 ">
      <input
        type="text"
        className="h-12 w-full rounded-xl bg-ci-light-gray px-4 placeholder:text-ci-dark-gray"
        placeholder="Aa"
        onKeyDown={onKeyDownHandler}
        onChange={onChangeHandler}
        value={message}
      />

      <button onClick={sendHandler}>
        <Image
          src="/img/chat/send-icon.svg"
          alt="send"
          width={40}
          height={40}
          className="cursor-pointer rounded-xl hover:bg-ci-light-gray"
        />
      </button>
    </div>
  );
}
