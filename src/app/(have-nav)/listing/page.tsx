"use client";
import PropertyData from "@/models/PropertyData";
import PropertyCards from "@/components/my-listing/PropertyCards";
import getUserProperty from "@/services/property/getUserProperty";
import Image from "next/image";

import { useEffect, useState } from "react";

const myListingPage = () => {
  const [propData, setData] = useState<PropertyData[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchProp = async () => {
      const data = await getUserProperty(10, 1);
      if (data) {
        setData(data.properties);
        setTotal(data.total);
      }
      console.log(data);
    };
    fetchProp();
  }, []);

  const handleCreate = () => {
    window.location.href = "http://localhost:3000/create-property";
  };
  return (
    <>
      {total !== 0 ? (
        <div className="mx-80 mt-8 flex h-full flex-col ">
          <div className="text-4xl font-bold">My Listing</div>
          <PropertyCards
            propData={propData}
            totalProp={total}
            isEditable={true}
            additionaltext={"for rent or sales in my listing"}
            showAmount={false}
          ></PropertyCards>

          <button
            className="fixed bottom-24 right-24 flex w-1/6 flex-row justify-around rounded-md bg-ci-blue p-4 "
            onClick={handleCreate}
          >
            <Image
              src="/img/mylisting/plusCircle.svg"
              alt="add"
              width={30}
              height={30}
            />
            <div className="text-2xl font-bold text-white ">
              Create Property
            </div>
          </button>
        </div>
      ) : (
        <div className="mx-72 mt-8 flex h-1/2 flex-col items-center justify-around">
          <div className="text-center text-4xl font-bold">
            Empty property listing
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

          <button
            className="flex w-1/5 flex-row justify-around rounded-md bg-ci-blue p-4"
            onClick={handleCreate}
          >
            <Image
              src="/img/mylisting/plusCircle.svg"
              alt="add"
              width={30}
              height={30}
            />
            <div className="text-2xl font-bold text-white ">
              Create Property
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default myListingPage;
