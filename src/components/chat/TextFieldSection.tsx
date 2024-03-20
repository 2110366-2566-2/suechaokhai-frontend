import Image from "next/image";
export default function TextFieldSection() {
  return (
    <div className="flex flex-row gap-x-4 px-6 py-2 ">
      <input
        type="text"
        className="h-12 w-full rounded-xl bg-ci-light-gray px-4 placeholder:text-black"
        placeholder="Aa"
      ></input>
      <Image
        src="/img/chat/send-icon.svg"
        alt="รูปปก"
        width={40}
        height={40}
        className="cursor-pointer rounded-xl hover:bg-ci-light-gray"
      />
    </div>
  );
}
