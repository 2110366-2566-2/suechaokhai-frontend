<<<<<<< HEAD
import Image from "next/image";
<<<<<<< HEAD
=======
import { useState } from "react";
export default function SmallPropertyCard({ id }: { id: string }) {
  const [isFavorite, setIsFavorite] = useState(false);

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

        <div className="flex flex-col justify-around gap-x-6 px-2 sm:flex-row">
          <div className="flex flex-row items-center gap-x-4 text-xl">
            <Image
              src="/img/home-page/bed.svg"
              alt="heart"
              width={40}
              height={40}
            />
            <div>2 Bedrooms</div>
          </div>
          <div className="flex flex-row items-center gap-x-4 text-xl">
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
||||||| b074513
=======
import Image from "next/image";
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
import { useEffect, useState } from "react";
import PropertyData from "../models/PropertyData";
import addUserFavorite from "@/services/addUserFavorite";
import deleteUserFavorite from "@/services/removeUserFavorite";
export default function SmallPropertyCard({
  property,
}: {
  property: PropertyData;
}) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  async function favoriting() {
    if (isFavorite) {
      const res = await deleteUserFavorite(property.property_id);
    } else {
      const res = await addUserFavorite(property.property_id);
    }
  }

  return (
    <div>
      {property ? (
        <div className="w-[320px] rounded-3xl bg-white xl:w-[400px]">
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
              <div className="text-lg font-semibold xl:text-2xl">
                {property.property_name}
              </div>
              <div
                onClick={() => {
                  setIsFavorite(!isFavorite);
                  favoriting();
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

            <div className="flex flex-col gap-y-2 text-lg xl:text-xl">
              <div>
                {property.street}, {property.province}
              </div>
              <div className="font-semibold">
                {property.renting.price_per_month}/month
              </div>
            </div>

            <span className="w-full border-t border-black"></span>

            <div className="justify:center flex flex-col  gap-x-6 px-2 xl:flex-row xl:justify-around">
              <div className="flex flex-row items-center gap-x-2 text-lg">
                <Image
                  src="/img/home-page/bed.svg"
                  alt="heart"
                  width={40}
                  height={40}
                />
                <div>{property.bedrooms} Bedrooms</div>
              </div>
              <div className="flex flex-row items-center gap-x-2 text-lg">
                <Image
                  src="/img/home-page/area.svg"
                  alt="heart"
                  width={40}
                  height={40}
                />
                <div>{property.floor_size} m²</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
>>>>>>> df15c90262049e0e4c2b76616c35e28d9f934767
