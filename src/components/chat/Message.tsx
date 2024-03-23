import { ChatMessage } from "@/models/chat";

const MessageStatus = ({ message }: { message: ChatMessage }) => {
  const sentAt = new Date(message.sent_at);
  return (
    <div className="flex h-full flex-col items-end justify-end">
      <div className="text-xs">
        {message.read_at !== null && message.author && "Read"}
      </div>
      <div className="text-xs">{`${sentAt.getHours()}:${sentAt.getMinutes()}`}</div>
    </div>
  );
};

const MessageContent = ({ message }: { message: ChatMessage }) => {
  const sentAt = new Date(message.sent_at);
  return (
    <div className="break-all rounded-xl bg-ci-light-gray px-4 py-2">
      {message.content}
    </div>
  );
};

export default function Message({ message }: { message: ChatMessage }) {
  return (
    <div className={`flex ${message.author ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex w-10/12 justify-end gap-2 ${message.author ? "flex-row" : "flex-row-reverse"}`}
      >
        <MessageStatus message={message} />
        <MessageContent message={message} />
      </div>
    </div>
  );
}
