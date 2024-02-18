"use client";

import { min } from "date-fns/fp/min";
import Image from "next/image";
import { useRef, useState } from "react";

export default function SearchSection() {
  const [filterPrice, setFilterPrice] = useState(false);
  const [filterSize, setFilterSize] = useState(false);
  const [filterBedroom, setFilterBedroom] = useState(false);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minSize, setMinSize] = useState("");
  const [maxSize, setMaxSize] = useState("");
  const [bedrooms, setBedrooms] = useState(0);

  function formatBedroom(val: number) {
    if (val < 0) {
      setBedrooms(0);
    } else {
      setBedrooms(val);
    }
  }

  function test() {
    console.log(minPrice);
    console.log(maxPrice);
    console.log(minSize);
    console.log(maxSize);
    console.log(bedrooms);
  }

  return (
    <div className="mt-6 flex h-96 w-1/2 flex-col gap-y-6">
      <div className="flex h-32 flex-row items-center justify-center gap-x-7 rounded-2xl bg-white px-7 text-ci-gray">
        <input
          type="text"
          className="h-1/2 w-full rounded-xl border border-ci-gray px-5 text-xl"
          placeholder="Location, building"
        ></input>
        <button className="h-1/2 w-56 rounded-xl bg-ci-blue text-xl font-semibold text-white">
          Search Now!
        </button>
      </div>

      <div className="flex w-full flex-row gap-x-7 text-ci-black">
        <div className="flex w-80 flex-col gap-3">
          <div
            onClick={() => setFilterPrice(!filterPrice)}
            className="flex h-16 w-full cursor-pointer place-content-between items-center rounded-xl bg-white px-6 text-left text-xl"
          >
            <p>Price Range</p>
            {filterPrice ? (
              <Image
                src="/img/home-page/arrow-up.png"
                alt="arrow-down"
                width={40}
                height={40}
              />
            ) : (
              <Image
                src="/img/home-page/arrow-down.png"
                alt="arrow-down"
                width={40}
                height={40}
              />
            )}
          </div>
          {filterPrice ? (
            <div className="w-76 flex h-36 flex-row items-center justify-center rounded-xl bg-white text-xl">
              <div className="flex w-[140px] flex-col gap-y-4 px-2 text-left">
                <p>Min (฿)</p>
                <input
                  type="number"
                  className="h-14 w-full appearance-none rounded-xl border border-ci-gray px-4"
                  onChange={(e) => {
                    setMinPrice(e.target.value);
                  }}
                  value={minPrice}
                  placeholder="0"
                ></input>
              </div>
              <div className="flex w-[140px] flex-col gap-y-4 px-2 text-left">
                <p>Max (฿)</p>
                <input
                  type="number"
                  className="h-14 w-full appearance-none rounded-xl border border-ci-gray px-4"
                  onChange={(e) => {
                    setMaxPrice(e.target.value);
                  }}
                  value={maxPrice}
                  placeholder="1000000"
                ></input>
              </div>
            </div>
          ) : null}
        </div>
        <div className="flex w-80 flex-col gap-3">
          <div
            onClick={() => setFilterSize(!filterSize)}
            className="flex h-16 w-full cursor-pointer place-content-between items-center rounded-xl bg-white px-6 text-left text-xl"
          >
            <p>Size</p>
            {filterSize ? (
              <Image
                src="/img/home-page/arrow-up.png"
                alt="arrow-down"
                width={40}
                height={40}
              />
            ) : (
              <Image
                src="/img/home-page/arrow-down.png"
                alt="arrow-down"
                width={40}
                height={40}
              />
            )}
          </div>
          {filterSize ? (
            <div className="w-76 flex h-36 flex-row items-center justify-center rounded-xl bg-white text-xl">
              <div className="flex w-[140px] flex-col gap-y-4 px-2 text-left">
                <p>Min (m²)</p>
                <input
                  type="number"
                  className="h-14 w-full appearance-none rounded-xl border border-ci-gray px-4"
                  onChange={(e) => {
                    setMinSize(e.target.value);
                  }}
                  value={minSize}
                  placeholder="0"
                ></input>
              </div>
              <div className="flex w-[140px] flex-col gap-y-4 px-2 text-left">
                <p>Max (m²)</p>
                <input
                  type="number"
                  className="h-14 w-full appearance-none rounded-xl border border-ci-gray px-4"
                  onChange={(e) => {
                    setMaxSize(e.target.value);
                  }}
                  value={maxSize}
                  placeholder="10000"
                ></input>
              </div>
            </div>
          ) : null}
        </div>
        <div className="flex w-80 flex-col gap-3">
          <div
            onClick={() => setFilterBedroom(!filterBedroom)}
            className="flex h-16 w-full cursor-pointer place-content-between items-center rounded-xl bg-white px-6 text-left text-xl"
          >
            <p>Bedrooms</p>
            {filterBedroom ? (
              <Image
                src="/img/home-page/arrow-up.png"
                alt="arrow-down"
                width={40}
                height={40}
              />
            ) : (
              <Image
                src="/img/home-page/arrow-down.png"
                alt="arrow-down"
                width={40}
                height={40}
              />
            )}
          </div>
          {filterBedroom ? (
            <div className="flex h-20 w-full place-content-between items-center rounded-xl bg-white px-4 text-left text-xl">
              <div>Bedroom(s)</div>
              <div className="flex flex-row items-center gap-x-1">
                <button
                  onClick={() => {
                    formatBedroom(bedrooms - 1);
                  }}
                  className="cursor-pointer rounded-xl px-2 text-2xl hover:bg-ci-gray"
                >
                  -
                </button>
                <input
                  type="number"
                  className="h-14 w-14 appearance-none rounded-xl border border-ci-gray px-2 text-center"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setBedrooms(0);
                    } else {
                      formatBedroom(parseInt(e.target.value));
                    }
                  }}
                  value={bedrooms}
                ></input>
                <button
                  onClick={() => {
                    formatBedroom(bedrooms + 1);
                    test();
                  }}
                  className="cursor-pointer rounded-xl px-2 text-2xl hover:bg-ci-gray"
                >
                  +
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
