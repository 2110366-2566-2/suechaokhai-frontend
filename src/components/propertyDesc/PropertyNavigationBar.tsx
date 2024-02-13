import React from "react";
export type PropertyNavigationBarProps = {
  icon: string;
  feature: string;
};

const PropertyNavigationBar = ({
  icon,
  feature,
}: PropertyNavigationBarProps) => {
  return (
    <div className="flex w-full items-center justify-between bg-[#D9D9D9] py-6 text-[12px]  sm:text-[16px]">
      <div className="flex items-center space-x-1  sm:space-x-12">
        <div className="pl-3 text-[16px] font-bold sm:text-[24px]">Logo</div>
        <div className="">Rent</div>
        <div className="">Buy</div>
        <div className="">Favorite</div>
        <div className="">Appointment</div>
        <div className="">Agreement</div>
      </div>
      <div className="float-right pr-2 sm:pr-4 ">Account</div>
    </div>
  );
};

export default PropertyNavigationBar;
