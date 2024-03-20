import Chat from "@/app/chat/page";
import Message from "./Message";

export default function MessageSection() {
  const messageList = [
    ["0", "hello", "0"],
    ["0", "hello me", "1"],
    ["0", "i am ik", "0"],
    ["0", "hello ik", "1"],
    ["0", "i am boss", "0"],
    ["0", "hello boss", "1"],
    ["0", "hello", "0"],
    ["0", "hello me", "1"],
    ["0", "i am ik", "0"],
    ["0", "hello ik", "1"],
    ["0", "i am boss", "0"],
    ["0", "hello boss", "1"],
  ];
  return (
    <div className="flex h-full flex-col gap-y-2 overflow-auto px-6">
      <div className="flex flex-col gap-y-4">
        {messageList.map((item: string[]) => (
          <Message message={item} />
        ))}
      </div>
      <div className="flex items-center justify-end px-2 text-sm">Read</div>
    </div>
  );
}
