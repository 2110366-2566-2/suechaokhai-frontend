import getTopProperty from "@/services/getTopProperty";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function SmallPropertyCard({ id }: { id: string }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [resJsonReady, setRes] = useState();

  return (
    <div className=" w-full max-w-[420px] rounded-3xl bg-white">
      <div className="relative h-60 w-full">
        <Image
          src="/img/home-page/lumpini.png"
          alt="prop-img"
          fill={true}
          className="rounded-t-3xl"
        />
      </div>
      <div className="flex flex-col gap-y-5 px-8 py-7">
        <div className="flex flex-row justify-between">
          <div className="text-2xl font-semibold">Laviq Sukhumvit 57 {id}</div>
          <div
            onClick={() => {
              setIsFavorite(!isFavorite);
            }}
            className="cursor-pointer"
          >
            {isFavorite ? (
              <Image
                src="/img/home-page/heart-like.svg"
                alt="heart"
                width={32}
                height={32}
              />
            ) : (
              <Image
                src="/img/home-page/heart-outline.svg"
                alt="heart"
                width={32}
                height={32}
              />
            )}
          </div>
        </div>

        <span className="w-full border-t border-black"></span>

        <div className="flex flex-col gap-y-2 text-xl">
          <div>Sukhumvit, Bangkok</div>
          <div className="font-semibold">฿33,000/month</div>
        </div>

        <span className="w-full border-t border-black"></span>

        <div className="flex flex-col justify-around gap-x-6 px-2 md:flex-row">
          <div className="flex flex-row items-center gap-x-4 text-lg sm:text-xl">
            <Image
              src="/img/home-page/bed.svg"
              alt="heart"
              width={40}
              height={40}
            />
            <div>2 Bedrooms</div>
          </div>
          <div className="flex flex-row items-center gap-x-4 text-lg sm:text-xl">
            <Image
              src="/img/home-page/area.svg"
              alt="heart"
              width={40}
              height={40}
            />
            <div>60 m²</div>
          </div>
        </div>
      </div>
    </div>
  );
}
