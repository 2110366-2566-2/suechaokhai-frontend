"use client";
import React from "react";
import Image from "next/Image";
import { useState, useEffect } from "react";
import AccountMenu from "./AccountMenu";
import getCurrentUser from "@/services/getCurrentUser";
import UserData from "../models/UserData";
import { useRouter } from "next/navigation";

export type PropertyNavigationBarProps = {
  icon: string;
  feature: string;
};
const logo = "/img/IK_SueChaoKhai-04.svg";
const arrowDown = "/img/PropertyNavBar/arrow-down-icon.svg";
const arrowUp = "/img/PropertyNavBar/arrow-up-icon.svg";
const favoriteIcon = "/img/PropertyNavBar/mdi_heart-outline.svg";

const PropertyNavigationBar = ({
  icon,
  feature,
}: PropertyNavigationBarProps) => {
  const [accountMenu, setAccountMenu] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const router = useRouter();
  const fetchUser = async () => {
    try {
      const data = await getCurrentUser();
      setUser(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const accountIcon = user?.profile_image_url
    ? user.profile_image_url
    : "/img/PropertyNavBar/ic_round-account-circle.svg";
  // const accountIcon = "/img/PropertyNavBar/ic_round-account-circle.svg";
  return (
    <div>
      <div className="flex w-full items-center justify-between bg-ci-blue py-1 text-[12px] text-white sm:text-[20px]">
        <div className=" pl-4">
          <Image src={logo} alt={"logo"} width={72} height={72} />
        </div>

        <div className="flex items-center space-x-1  sm:space-x-12">
          <div className="">Buy</div>
          <div className="">Rent</div>
          <div className="">Appointment</div>
          <div className="">Agreement</div>
          <div className="">My Listing</div>
        </div>
        {user ? (
          <div className="flex flex-row items-center space-x-1 pr-2  sm:space-x-4 sm:pr-4">
            <Image src={favoriteIcon} alt={"favorite"} width={36} height={36} />
            <div className="aspect-square overflow-hidden rounded-full">
              <Image
                src={accountIcon}
                alt={"accountMenu"}
                width={56}
                height={56}
              />
            </div>
            {!accountMenu && (
              <Image
                className="cursor-pointer"
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
                className="cursor-pointer"
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
        ) : (
          <div className="flex flex-row items-center space-x-1 pr-2  sm:space-x-4 sm:pr-4">
            <div
              className="cursor-pointer hover:text-ci-gray"
              onClick={() => router.push("/register")}
            >
              Sign up
            </div>
            <div
              className="cursor-pointer hover:text-ci-gray"
              onClick={() => router.push("/login")}
            >
              Sign in
            </div>
          </div>
        )}
      </div>
      {accountMenu && <AccountMenu profileUrl={accountIcon} />}
    </div>
  );
};

export default PropertyNavigationBar;
