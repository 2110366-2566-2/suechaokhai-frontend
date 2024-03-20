import ChatBox from "./ChatBox";
import ChatIcon from "./ChatIcon";
import Image from "next/image";
import SearchBar from "./SearchBar";
import TextFieldSection from "./TextFieldSection";
import MessageSection from "./MessageSection";

export default function MessageBox({
  user,
  setChat,
}: {
  user: string;
  setChat: Function;
}) {
  return (
    <div className="flex h-[528px] w-96 flex-col gap-y-4 rounded-t-xl bg-white pb-2 shadow-xl shadow-slate-500">
      <div className="flex flex-row items-center justify-between px-6 py-4 shadow-lg shadow-slate-300">
        <div className="flex flex-row items-center gap-x-6">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full">
            <Image
              src="/img/babywinsmoking.jpg"
              alt="รูปปก"
              width={12}
              height={12}
              draggable={false}
              layout="responsive"
            />
          </div>
          <div className="text-xl font-bold">{user}</div>
        </div>
        <div className="flex flex-row gap-x-4 text-lg">
          <button className="rounded-md hover:bg-slate-300">
            <Image
              src="/img/chat/agreement.svg"
              width={24}
              height={24}
              alt="ไอบอสสส"
            />
          </button>
          <button
            className="rounded-md hover:bg-slate-300"
            onClick={() => {
              setChat(false);
            }}
          >
            <Image
              src="/img/chat/close-icon.svg"
              width={24}
              height={24}
              alt="ไอบอสสส"
            />
          </button>
        </div>
      </div>
      <MessageSection />
      <TextFieldSection />
    </div>
  );
}
