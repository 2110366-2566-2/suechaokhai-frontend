import OwnerInfo from "@/components/OwnerInfo";
import RoomTourRes from "@/components/RoomTourRes";

export default function Home() {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center bg-gray-800">
      <span className="animate-spin text-xl font-normal text-white">
        Hi, mom!
      </span>
      <RoomTourRes></RoomTourRes>
    </div>
  );
}
