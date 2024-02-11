import OwnerInfo from "@/components/propertyDesc/OwnerInfo";
import RoomTourRes from "@/components/propertyDesc/RoomTourRes";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center bg-gray-800">
      <Link href="/suechaokhai/propertyDescription">
        <button className="h-[60px] w-[510px] rounded-[10px] bg-[#3AAEEF] font-bold text-white">
          View Property
        </button>
      </Link>
    </div>
  );
}
