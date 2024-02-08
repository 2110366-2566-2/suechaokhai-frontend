import React from "react";
export type PropertyNavigationBarProps = {
    icon: string;
    feature: string;
  };
  
  const PropertyNavigationBar = ({ icon, feature }: PropertyNavigationBarProps) => {
    return (
      <div className="bg-[#D9D9D9] py-[24px] mx-auto max-w-screen flex items-center justify-between">
        <div className="text-[16px] flex space-x-12 items-center">
            <div className="pl-[36px] font-bold text-[24px]">Logo</div>
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