<<<<<<< HEAD
import Image from "next/image";
import SearchSection from "./SearchSection";

export default function Banner() {
  return (
<<<<<<< HEAD
    <div className="relative top-0 h-[696px] w-full text-white">
=======
    <div className="relative h-[696px] w-full text-white">
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
      <Image
        src="/img/home-page/banner-bg-1.png"
        alt="banner"
        fill={true}
        className="z-[-1] object-cover"
      />
      <div className="z-2 relative top-28 flex flex-col items-center gap-7 text-center">
<<<<<<< HEAD
        <div className="py-3 text-3xl font-semibold md:text-5xl">
          Chula’s Best Property Platform
        </div>
        <div className="py-1.5 text-lg font-semibold md:text-2xl">
=======
        <div className="py-3 text-5xl font-semibold">
          Chula’s Best Property Platform
        </div>
        <div className="py-1.5 text-2xl font-semibold">
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
          Choose your choice of property here
        </div>
        <SearchSection />
      </div>
    </div>
  );
}
||||||| b074513
=======
import Image from "next/image";
import SearchSection from "./SearchSection";

export default function Banner() {
  return (
    <div className="relative top-0 h-[696px] w-full text-white">
      <Image
        src="/img/home-page/banner-bg-1.png"
        alt="banner"
        fill={true}
        className="z-[-1] object-cover"
      />
      <div className="z-2 relative top-28 flex flex-col items-center gap-7 text-center">
        <div className="py-3 text-3xl font-semibold md:text-5xl">
          Chula’s Best Property Platform
        </div>
        <div className="py-1.5 text-lg font-semibold md:text-2xl">
          Choose your choice of property here
        </div>
        <SearchSection />
      </div>
    </div>
  );
}
>>>>>>> df15c90262049e0e4c2b76616c35e28d9f934767
