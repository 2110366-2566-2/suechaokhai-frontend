import Image from "next/image";
import SearchSection from "./SearchSection";

export default function Banner() {
  return (
    <div className="relative h-[696px] w-screen text-white">
      <Image
        src="/img/home-page/banner-bg-1.png"
        alt="banner"
        fill={true}
        className="z-[-1] object-cover"
      />
      <div className="z-2 relative top-28 flex flex-col items-center gap-7 text-center">
        <div className="py-3 text-5xl font-semibold">
          Chula’s Best Property Platform
        </div>
        <div className="py-1.5 text-2xl font-semibold">
          Choose your choice of property here
        </div>
        <SearchSection />
      </div>
    </div>
  );
}
