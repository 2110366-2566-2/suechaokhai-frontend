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
    <div className="flex w-full items-center justify-between bg-[#D9D9D9] py-[24px]">
      <div className="flex items-center space-x-12 text-[16px]">
        <div className="pl-[36px] text-[24px] font-bold">Logo</div>
        <div className="">Rent</div>
        <div className="">Buy</div>
        <div className="">Favorite</div>
        <div className="">Appointment</div>
        <div className="">Agreement</div>
      </div>
      <div className="float-right pr-[16px]">Account</div>
    </div>
  );
};

export default PropertyNavigationBar;
