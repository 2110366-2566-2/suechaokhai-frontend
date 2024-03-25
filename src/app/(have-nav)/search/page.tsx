"use client";
import PropertyData from "@/models/PropertyData";
import PropertyCards from "@/components/my-listing/PropertyCards";
import Image from "next/image";

import { useEffect, useState } from "react";
import SearchProperty from "@/components/my-listing/SearchProperty";
import getProperties from "@/services/getProperties";
import { useSearchContext } from "@/context/SearchContext";


const myFavPage = () => {

  const { searchContent, setSearchContent, isSearching, setIsSearching } =
  useSearchContext();

  const [propData, setData] = useState<PropertyData[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchProp = async () => {

      const data = await getProperties(searchContent, 20, 1);
      if (data) {
        setData(data.properties);
        setTotal(data.total);
      }

      setIsSearching(false)

    };

    // console.log({ searchContent, setSearchContent, isSearching, setIsSearching },"testing search context")
    fetchProp();

  }, [isSearching]);

  return (
    <>
      <div className="flex w-full justify-center ">
        <SearchProperty ></SearchProperty>
      </div>
      {total !== 0 ? (
        <div className="mx-80 flex h-full flex-col  ">
          <PropertyCards
            propData={propData}
            totalProp={total}
            isEditable={false}
            additionaltext="from searching result"
            showAmount={true}
          ></PropertyCards>
        </div>
      ) : (
        <div className="mx-72 mt-8 flex h-1/2 flex-col items-center justify-around">
          <div className="text-center text-4xl font-bold">
            Property not found
          </div>

          <Image
            src="/img/mylisting/home.svg"
            alt="home"
            width={100}
            height={100}
          />
          <div className="">
            <div className="m-1 text-center text-2xl">
              Your listing is empty.
            </div>
            <div className="m-1 text-center text-2xl">
              Let&apos;s create a property on your listing.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default myFavPage;
