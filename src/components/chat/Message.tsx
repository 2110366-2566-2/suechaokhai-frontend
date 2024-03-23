import { ChatMessage } from "@/models/chat";

export default function Message({ message }: { message: ChatMessage }) {
  return (
    <div>
      <div
        className={`flex items-center ${message.author ? "justify-end" : "justify-start"}`}
      >
        <div className="rounded-xl bg-ci-light-gray px-4 py-2">
          {message.content}
        </div>
      </div>
    </div>
  );
}
