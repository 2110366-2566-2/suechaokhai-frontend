"use client";
import { useEffect, useState } from "react";
import SmallPropertyCard from "./SmallPropertyCard";
import Image from "next/image";
import getTopProperty from "@/services/getTopProperty";

export default function FeaturesPropCatalog() {
  const [start, setStart] = useState<number>(0);
  const [stop, setStop] = useState<number>(3);
  const [resJsonReady, setRes] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTopProperty();
      if (res) {
        setRes(res);
      }
      console.log(resJsonReady)
    };
    fetchData();
  }, []);

  useEffect(() => {
    setStop(calculateStopValue());
    function handleResize() {
      const newStop = calculateStopValue();
      setStop(newStop);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function calculateStopValue() {
    if (window.innerWidth > 1536) {
      return 3;
    } else if (window.innerWidth > 1024) {
      return 2;
    } else {
      return 1;
    }
  }

  function goNext() {
    if (stop < 10) {
      setStart(start + 1);
      setStop(stop + 1);
    }
  }

  function goBack() {
    if (start > 0) {
      setStart(start - 1);
      setStop(stop - 1);
    }
  }

  return (
    <div className="flex w-full flex-col gap-y-10 bg-ci-gray px-32 py-24">
      <div className="flex flex-col gap-y-5">
        <div className="text-4xl font-semibold text-ci-blue">
          Featured Listings
        </div>
        <div className="text-2xl">
          Here are some featured listings deals sourced by our experienced real
          estate experts
        </div>
      </div>
      <div className="flex flex-row justify-between gap-x-4">
        {start > 0 ? (
          <Image
            src="/img/home-page/back.svg"
            alt="next"
            width={60}
            height={60}
            onClick={goBack}
            className="cursor-pointer"
          />
        ) : (
          <div className="w-15 h-15 pr-[60px]"></div>
        )}

        {/* {property.slice(start, stop).map((item) => (
          <SmallPropertyCard id={item.property_name} key={item.property_name} />
        ))} */}

        {stop < 10 ? (
          <Image
            src="/img/home-page/next.svg"
            alt="next"
            width={60}
            height={60}
            onClick={goNext}
            className="cursor-pointer"
          />
        ) : (
          <div className="w-15 h-15 pl-[60px]"></div>
        )}
      </div>
    </div>
  );
}
