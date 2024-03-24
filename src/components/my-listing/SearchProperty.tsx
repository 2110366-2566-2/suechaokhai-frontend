"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const SearchProperty = () => {
  const [filterPrice, setFilterPrice] = useState(false);
  const [filterSize, setFilterSize] = useState(false);
  const [filter, setFilter] = useState(false);

  const [searchContent, setSearchContent] = useState("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [minSize, setMinSize] = useState<number>(0);
  const [maxSize, setMaxSize] = useState<number>(0);
  const [bedrooms, setBedrooms] = useState<number>(0);

  function formatBedroom(val: number) {
    if (val < 0) {
      setBedrooms(0);
    } else {
      setBedrooms(val);
    }
  }
  function test() {
    console.log(searchContent);
    console.log(minPrice);
    console.log(maxPrice);
    console.log(minSize);
    console.log(maxSize);
    console.log(bedrooms);
  }

  return (
    <div className="m-8 flex w-full flex-col  justify-self-center ">
      <div className="flex h-32 flex-row items-center justify-center gap-x-7 rounded-2xl bg-white px-3  text-black">
        <input
          type="text"
          className="h-1/2 w-full rounded-xl border  bg-ci-light-gray  px-5"
          onChange={(e) => {
            setSearchContent(e.target.value);
          }}
        ></input>
        <button
          onClick={test}
          className="h-1/2 w-56 rounded-xl bg-ci-blue text-xl font-medium text-white"
        >
          Search
        </button>
      </div>
      {/* filter section */}
      <div className="flex flex-row justify-center">
        <div className="flex w-1/3 gap-3 px-3">
          <div
            onClick={() => {
              setFilterPrice(!filterPrice);
              setFilterSize(false);
              setFilter(false);
            }}
            className={`flex h-16 w-full cursor-pointer place-content-center items-center rounded-xl ${filterPrice ? "bg-ci-light-blue" : "bg-ci-light-gray"} px-6 text-left`}
          >
            <p className="px-2 text-xl font-medium">Price Range</p>
            {filterPrice ? (
              <Image
                src="/img/home-page/arrow-up.svg"
                alt="arrow-down"
                width={30}
                height={30}
                className="sm:w-5 md:w-7 2xl:w-10"
              />
            ) : (
              <Image
                src="/img/home-page/arrow-down.svg"
                alt="arrow-down"
                width={30}
                height={30}
                className="sm:w-5 md:w-7 2xl:w-10"
              />
            )}
          </div>
        </div>
        <div className="flex w-1/3 flex-col gap-3 px-3">
          <div
            onClick={() => {
              setFilterPrice(false);
              setFilterSize(!filterSize);
              setFilter(false);
            }}
            className={`flex h-16 w-full cursor-pointer place-content-center items-center rounded-xl ${filterSize ? "bg-ci-light-blue" : "bg-ci-light-gray"} px-6 text-left`}
          >
            <p className="px-2 text-xl font-medium">Size</p>
            {filterSize ? (
              <Image
                src="/img/home-page/arrow-up.svg"
                alt="arrow-down"
                width={30}
                height={30}
                className="sm:w-5 md:w-7 2xl:w-10"
              />
            ) : (
              <Image
                src="/img/home-page/arrow-down.svg"
                alt="arrow-down"
                width={30}
                height={30}
                className="sm:w-5 md:w-7 2xl:w-10"
              />
            )}
          </div>
        </div>
        <div className="flex w-1/3 flex-col gap-3 px-3">
          <div
            onClick={() => {
              setFilterPrice(false);
              setFilterSize(false);
              setFilter(!filter);
            }}
            className={`flex h-16 w-full cursor-pointer place-content-center items-center rounded-xl ${filter ? "bg-ci-light-blue" : "bg-ci-light-gray"} px-6 text-left`}
          >
            <p className="px-2 text-xl font-medium">Fliters</p>
            {filter ? (
              <Image
                src="/img/home-page/arrow-up.svg"
                alt="arrow-down"
                width={30}
                height={30}
                className="sm:w-5 md:w-7 2xl:w-10"
              />
            ) : (
              <Image
                src="/img/home-page/arrow-down.svg"
                alt="arrow-down"
                width={30}
                height={30}
                className="sm:w-5 md:w-7 2xl:w-10"
              />
            )}
          </div>
        </div>
      </div>
      {/* what to filter */}
      <div className="flex w-full flex-row">
        {filterPrice ? (
          <div className="flex h-36 w-full flex-row items-center justify-center gap-y-2 rounded-xl ">
            <div className="mx-3 flex w-1/2  flex-col gap-x-2 gap-y-4">
              <div className="text-xl">Min. price</div>
              <input
                type="number"
                className="h-14 w-full rounded-xl border  bg-ci-light-gray px-4"
                onChange={(e) => {
                  if (parseInt(e.target.value) >= 0 || e.target.value === "") {
                    setMinPrice(Number(e.target.value));
                  } else {
                    setMinPrice(0);
                  }
                }}
                value={minPrice.toString()}
                placeholder="0"
              ></input>
            </div>
            <div className="mx-3 flex w-1/2  flex-col gap-x-2 gap-y-4">
              <div className="text-xl">Max. price</div>
              <input
                type="number"
                className="h-14 w-full rounded-xl border  bg-ci-light-gray px-4"
                onChange={(e) => {
                  if (parseInt(e.target.value) >= 0 || e.target.value === "") {
                    setMaxPrice(Number(e.target.value));
                  } else {
                    setMaxPrice(0);
                  }
                }}
                value={maxPrice.toString()}
                placeholder="1000000"
              ></input>
            </div>
          </div>
        ) : null}
        {filterSize ? (
          <div className="flex h-36 w-full flex-row items-center justify-center gap-y-2 rounded-xl ">
            <div className="mx-3 flex w-1/2  flex-col gap-x-2 gap-y-4">
              <p className="text-xl">Min (m²)</p>
              <input
                type="number"
                className="h-14 w-full rounded-xl border bg-ci-light-gray px-4"
                onChange={(e) => {
                  if (parseInt(e.target.value) >= 0 || e.target.value === "") {
                    setMinSize(Number(e.target.value));
                  } else {
                    setMinSize(0);
                  }
                }}
                value={minSize.toString()}
                placeholder="0"
              ></input>
            </div>
            <div className="mx-3 flex w-1/2  flex-col gap-x-2 gap-y-4 ">
              <p className="text-xl">Max (m²)</p>
              <input
                type="number"
                className="h-14 w-full rounded-xl border bg-ci-light-gray px-4"
                onChange={(e) => {
                  if (parseInt(e.target.value) >= 0 || e.target.value === "") {
                    setMaxSize(Number(e.target.value));
                  } else {
                    setMaxSize(0);
                  }
                }}
                value={maxSize.toString()}
                placeholder="10000"
              ></input>
            </div>
          </div>
        ) : null}
        {filter ? (
          <div className="m-3 h-1/2 w-full flex-col  gap-y-2 rounded-xl bg-ci-light-gray p-2 ">
            <div className="flex justify-between  sm:flex-col md:flex-col 2xl:flex-row">
              <div className="h-18 m-3 flex w-2/5 items-center justify-center  rounded-xl bg-white sm:flex-col md:flex-col 2xl:flex-row">
                <div className="font-medium">Bedroom(s)</div>
                <div className="flex flex-row items-center gap-x-1 py-2">
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
                    className="h-14 w-14 rounded-xl border  px-2 text-center"
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setBedrooms(0);
                      } else {
                        formatBedroom(Number(e.target.value));
                      }
                    }}
                    value={bedrooms.toString()}
                  ></input>
                  <button
                    onClick={() => {
                      formatBedroom(bedrooms + 1);
                    }}
                    className="cursor-pointer rounded-xl px-2 text-2xl hover:bg-ci-gray"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="h-18 m-3 flex w-2/5 items-center justify-center gap-y-2 rounded-xl bg-white sm:flex-col md:flex-col 2xl:flex-row">
                <div className="font-medium">Bathroom(s)</div>
                <div className="flex flex-row items-center gap-x-1 py-2">
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
                    className="h-14 w-14 rounded-xl border  px-2 text-center"
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setBedrooms(0);
                      } else {
                        formatBedroom(Number(e.target.value));
                      }
                    }}
                    value={bedrooms.toString()}
                  ></input>
                  <button
                    onClick={() => {
                      formatBedroom(bedrooms + 1);
                    }}
                    className="cursor-pointer rounded-xl px-2 text-2xl hover:bg-ci-gray"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex bg-white">
              <div className="font-medium">features</div>
              <div className="grid grid-cols-3"></div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchProperty;
