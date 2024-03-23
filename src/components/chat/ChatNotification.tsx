"use client";

import { ChatContext } from "@/context/ChatContext";
import { useContext, useEffect, useState } from "react";

export default function ChatNotification() {
  const ctx = useContext(ChatContext);
  const [unreadCounts, setUnreadCounts] = useState<number>(0);

  useEffect(() => {
    setUnreadCounts(
      Object.values(ctx.chats || {}).reduce(
        (accu, chat) => accu + chat.unread_messages,
        0
      )
    );
  }, [ctx]);

  return (
    <>
      {unreadCounts > 0 && (
        <div className="absolute flex aspect-square size-6 cursor-pointer select-none items-center justify-center rounded-full bg-ci-red text-white">
          {unreadCounts}
        </div>
      )}
    </>
  );
}
