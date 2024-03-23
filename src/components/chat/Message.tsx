import { ChatMessage } from "@/models/chat";

export default function Message({ message }: { message: ChatMessage }) {
  const sentAt = new Date(message.sent_at);
  return (
    <div>
      <div
        className={`flex items-end gap-2 ${message.author ? "justify-end" : "justify-start"}`}
      >
        <div className="text-xs">{`${sentAt.getHours()}:${sentAt.getMinutes()}`}</div>
        <div className="rounded-xl bg-ci-light-gray px-4 py-2">
          {message.content}
        </div>
      </div>
    </div>
  );
}
