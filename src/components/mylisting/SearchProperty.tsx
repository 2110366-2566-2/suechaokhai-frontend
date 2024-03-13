"use client";

import Image from "next/image";
import { useRef, useState } from "react";


const SearchProperty = () => {
    const [filterPrice, setFilterPrice] = useState(false);
    const [filterSize, setFilterSize] = useState(false);
    const [filterBedroom, setFilterBedroom] = useState(false);
  
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
        <div className="flex flex-col justify-center w-full">
            <div className="flex flex-row justify-center">
             <div className="flex w-80 m-3">
                <div
                    onClick={() => {
                        setFilterPrice(!filterPrice);
                        setFilterSize(false);
                        setFilterBedroom(false);
                    }}
                    className="flex h-16 w-full cursor-pointer place-content-between items-center rounded-xl bg-ci-light-gray px-6 text-left"
                >
                    <p>Price Range</p>
                    {filterPrice ? (
                    <Image
                        src="/img/home-page/arrow-up.svg"
                        alt="arrow-down"
                        width={40}
                        height={40}
                        className="sm:w-5 md:w-7 2xl:w-10"
                    />
                    ) : (
                    <Image
                        src="/img/home-page/arrow-down.svg"
                        alt="arrow-down"
                        width={40}
                        height={40}
                        className="sm:w-5 md:w-7 2xl:w-10"
                    />
                    )}
                </div>
                
                </div>
                <div className="flex w-80 flex-col gap-3">
          <div
            onClick={() => {

                setFilterPrice(false);
                setFilterSize(!filterSize)
                setFilterBedroom(false);
            }}
            className="flex h-16 w-full cursor-pointer place-content-between items-center rounded-xl bg-ci-light-gray px-6 text-left"
          >
            <p>Size</p>
            {filterSize ? (
              <Image
                src="/img/home-page/arrow-up.svg"
                alt="arrow-down"
                width={40}
                height={40}
                className="sm:w-5 md:w-7 2xl:w-10"
              />
            ) : (
              <Image
                src="/img/home-page/arrow-down.svg"
                alt="arrow-down"
                width={40}
                height={40}
                className="sm:w-5 md:w-7 2xl:w-10"
              />
            )}
          </div>
          
        </div>
        <div className="flex w-80 flex-col gap-3">
          <div
            onClick={() =>{
                setFilterPrice(false);
                setFilterSize(false);
                setFilterBedroom(!filterBedroom)
            } }
            className="flex h-16 w-full cursor-pointer place-content-between items-center rounded-xl bg-ci-light-gray px-6 text-left"
          >
            <p>Bedrooms</p>
            {filterBedroom ? (
              <Image
                src="/img/home-page/arrow-up.svg"
                alt="arrow-down"
                width={40}
                height={40}
                className="sm:w-5 md:w-7 2xl:w-10"
              />
            ) : (
              <Image
                src="/img/home-page/arrow-down.svg"
                alt="arrow-down"
                width={40}
                height={40}
                className="sm:w-5 md:w-7 2xl:w-10"
              />
            )}
          </div>
          
        </div>

            </div>
            <div className="flex flex-row">
            {filterPrice ? (
                    <div className="flex h-36 w-full flex-row items-center justify-center gap-y-2 rounded-xl ">
                    <div className="flex items-center justify-center gap-x-2 gap-y-4 px-6 text-left">
                        <div className="text-center">Min (฿)</div>
                        <input
                        type="number"
                        className="h-14 w-full rounded-xl border border-ci-gray px-4"
                        onChange={(e) => {
                            if (
                            parseInt(e.target.value) >= 0 ||
                            e.target.value === ""
                            ) {
                            setMinPrice(Number(e.target.value));
                            } else {
                            setMinPrice(0);
                            }
                        }}
                        value={minPrice.toString()}
                        placeholder="0"
                        ></input>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-x-2 gap-y-4 px-6 text-left">
                        <div className="text-center">Max (฿)</div>
                        <input
                        type="number"
                        className="h-14 w-full rounded-xl border border-ci-gray px-4"
                        onChange={(e) => {
                            if (
                            parseInt(e.target.value) >= 0 ||
                            e.target.value === ""
                            ) {
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
              <div className="flex flex-row items-center justify-center gap-x-2 gap-y-4 px-6 text-left">
                <p className="text-center">Min (m²)</p>
                <input
                  type="number"
                  className="h-14 w-full rounded-xl border border-ci-gray px-4"
                  onChange={(e) => {
                    if (
                      parseInt(e.target.value) >= 0 ||
                      e.target.value === ""
                    ) {
                      setMinSize(Number(e.target.value));
                    } else {
                      setMinSize(0);
                    }
                  }}
                  value={minSize.toString()}
                  placeholder="0"
                ></input>
              </div>
              <div className="flex flex-row items-center justify-center gap-x-2 gap-y-4 px-6 text-left">
                <p className="text-center">Max (m²)</p>
                <input
                  type="number"
                  className="h-14 w-full rounded-xl border border-ci-gray px-4"
                  onChange={(e) => {
                    if (
                      parseInt(e.target.value) >= 0 ||
                      e.target.value === ""
                    ) {
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
          {filterBedroom ? (
            <div className="h-18 flex w-full items-center justify-center rounded-xl  p-2 sm:flex-col md:flex-col 2xl:flex-row">
              <div>Bedroom(s)</div>
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
                  className="h-14 w-14 rounded-xl border border-ci-gray px-2 text-center"
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
          ) : null}
            </div>
        </div>
     );
}
 
export default SearchProperty;