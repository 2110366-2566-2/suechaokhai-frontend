import OwnerInfo from "@/components/OwnerInfo";

export default function Home() {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center bg-gray-800">
      <span className="animate-spin text-xl font-normal text-white">
        Hi, mom!
      </span>
      <div>wedrtyuiop;</div>
      <OwnerInfo name="Thanaphat" tel='1234565456' mail="dfghjkl" imgSrc="/img/Boss.png"></OwnerInfo>

    </div>
  );
}
