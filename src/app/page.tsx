import OwnerInfo from "@/components/propertyDesc/OwnerInfo";
import RoomTourRes from "@/components/propertyDesc/RoomTourRes";
export default function Home() {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center bg-gray-800">
      <span className="animate-spin text-xl font-normal text-white">
        Hi, mom!
      </span>
      <RoomTourRes Property="Boss's House"></RoomTourRes>
    </div>
  );
}
