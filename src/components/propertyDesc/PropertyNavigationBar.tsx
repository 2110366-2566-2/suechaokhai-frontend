"use client";
import React from "react";
import Image from "next/Image";
import { useState } from "react";
import AccountMenu from "./AccountMenu";
import getCurrentUser from "@/libs/getCurrentUser";
const isLogin = getCurrentUser();
export type PropertyNavigationBarProps = {
  icon: string;
  feature: string;
};
const logo = "/img/IK_SueChaoKhai-04.svg";
const accountIcon = "/img/PropertyNavBar/ic_round-account-circle.svg";
const arrowDown = "/img/PropertyNavBar/arrow-down-icon.svg";
const arrowUp = "/img/PropertyNavBar/arrow-up-icon.svg";
const favoriteIcon = "/img/PropertyNavBar/mdi_heart-outline.svg";

const PropertyNavigationBar = ({
  icon,
  feature,
}: PropertyNavigationBarProps) => {
  const [accountMenu, setAccountMenu] = useState(false);
  return (
    <div>
      <div className="flex w-full items-center justify-between bg-[#FF9900] py-1 text-[12px]  sm:text-[20px]">
        <div className=" pl-4">
          <Image src={logo} alt={"logo"} width={72} height={72} />
        </div>

        <div className="flex items-center space-x-1  sm:space-x-12">
          <div className="">Rent</div>
          <div className="">Buy</div>
          <div className="">Appointment</div>
          <div className="">Agreement</div>
          <div className="">My Listing</div>
        </div>
        <div className="flex flex-row items-center space-x-1 pr-2  sm:space-x-4 sm:pr-4">
          <Image src={favoriteIcon} alt={"favorite"} width={36} height={36} />
          <Image src={accountIcon} alt={"accountMenu"} width={56} height={56} />
          {!accountMenu && (
            <Image
              src={arrowDown}
              alt={"arrow-down"}
              width={30}
              height={16}
              onClick={() => {
                setAccountMenu(true);
              }}
            />
          )}
          {accountMenu && (
            <Image
              src={arrowUp}
              alt={"arrow-up"}
              width={30}
              height={16}
              onClick={() => {
                setAccountMenu(false);
              }}
            />
          )}
        </div>
      </div>
      {accountMenu && <AccountMenu />}
    </div>
  );
};

export default PropertyNavigationBar;
