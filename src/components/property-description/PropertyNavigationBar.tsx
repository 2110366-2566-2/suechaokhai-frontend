"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import AccountMenu from "./AccountMenu";
import getCurrentUser from "@/services/getCurrentUser";
import UserData from "../models/UserData";
<<<<<<< HEAD
import { HamburgerIcon } from "../ui/icon";
import { useRouter } from "next/navigation";
import { MenuHamburger } from "./MenuHamburger";

=======
import { useRouter } from "next/navigation";

export type PropertyNavigationBarProps = {
  icon: string;
  feature: string;
};
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
const logo = "/img/IK_SueChaoKhai-04.svg";
const arrowDown = "/img/PropertyNavBar/arrow-down-icon.svg";
const arrowUp = "/img/PropertyNavBar/arrow-up-icon.svg";
const favoriteIcon = "/img/PropertyNavBar/mdi_heart-outline.svg";

<<<<<<< HEAD
const PropertyNavigationBar = () => {
  const [accountMenu, setAccountMenu] = useState(false);
  const [menuHamburger, setMenuHamburger] = useState(false);

=======
const PropertyNavigationBar = ({
  icon,
  feature,
}: PropertyNavigationBarProps) => {
  const [accountMenu, setAccountMenu] = useState(false);
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
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
  console.log(accountIcon);
  // const accountIcon = "/img/PropertyNavBar/ic_round-account-circle.svg";
  return (
<<<<<<< HEAD
    <div className="select-none pt-20 ">
      <div className="fixed top-0 z-50 flex min-h-20 w-full select-none items-center justify-between bg-ci-blue py-1  text-[20px] text-white">
        <div
          className="min-h-10 min-w-10 cursor-pointer pl-4"
          onClick={() => router.push("/")}
        >
          <Image
            src={logo}
            alt={"logo"}
            width={10}
            height={10}
            draggable={false}
            className="min-h-10 min-w-10"
          />
        </div>

        <div className="invisible flex min-w-0 max-w-0 items-center justify-center space-x-1 sm:space-x-12 lg:visible lg:min-w-[70%] lg:max-w-[70%]">
          <div className="cursor-pointer hover:opacity-60">Buy</div>
          <div className="cursor-pointer hover:opacity-60">Rent</div>
          <div className="cursor-pointer hover:opacity-60">Appointment</div>
          <div className="cursor-pointer hover:opacity-60">Agreement</div>
          <div
            className="cursor-pointer hover:opacity-60"
            onClick={() => router.push("/my-Listing")}
          >
            My Listing
          </div>
        </div>

        {user ? (
          <div className="flex flex-row items-center space-x-3 pr-2 sm:space-x-4 sm:pr-4">
            <div onClick={() => setMenuHamburger(!menuHamburger)}>
              <HamburgerIcon
                size={24}
                className="visible cursor-pointer hover:opacity-20 lg:invisible"
              />
            </div>
            <Image
              src={favoriteIcon}
              onClick={() => router.push("/my-Favorite")}
              alt={"favorite"}
              width={36}
              height={36}
              className="cursor-pointer"
            />
            <div className="aspect-square min-h-16 min-w-16 overflow-hidden rounded-full">
              <Image
                src={accountIcon}
                alt={"accountMenu"}
                width={16}
                height={16}
                draggable={false}
                className="min-h-16 min-w-16"
=======
    <div className="select-none">
      <div className="fixed z-50 flex w-full items-center justify-between bg-ci-blue py-1 text-[12px] text-white sm:text-[20px]">
        <div className=" pl-4">
          <Image
            src={logo}
            alt={"logo"}
            width={72}
            height={72}
            draggable={false}
          />
        </div>

        <div className="flex items-center space-x-1  sm:space-x-12">
          <div className="">Buy</div>
          <div className="">Rent</div>
          <div className="">Appointment</div>
          <div className="">Agreement</div>
          <div className="">My Listing</div>
        </div>
        {user ? (
          <div className="flex flex-row items-center space-x-3 pr-2  sm:space-x-4 sm:pr-4">
            <Image src={favoriteIcon} alt={"favorite"} width={36} height={36} />
            <div className="aspect-square overflow-hidden rounded-full">
              <Image
                src={accountIcon}
                alt={"accountMenu"}
                width={56}
                height={56}
                draggable={false}
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
              />
            </div>
            {!accountMenu && (
              <Image
                className="cursor-pointer hover:opacity-20"
                src={arrowDown}
                alt={"arrow-down"}
                width={30}
                height={16}
                draggable={false}
                onClick={() => {
                  setAccountMenu(true);
                }}
              />
            )}
            {accountMenu && (
              <Image
                className="cursor-pointer hover:opacity-20"
                src={arrowUp}
                alt={"arrow-up"}
                width={30}
                height={16}
                draggable={false}
                onClick={() => {
                  setAccountMenu(false);
                }}
              />
            )}
          </div>
        ) : (
<<<<<<< HEAD
          <div className="flex flex-row items-center space-x-1 sm:space-x-4 sm:pr-4">
            <div
              className="cursor-pointer text-[16px] hover:text-ci-gray lg:text-[20px]"
=======
          <div className="flex flex-row items-center space-x-1 pr-2 sm:space-x-4 sm:pr-4">
            <div
              className="cursor-pointer hover:text-ci-gray"
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
              onClick={() => router.push("/register")}
            >
              Sign up
            </div>
            <div
<<<<<<< HEAD
              className="cursor-pointer text-[16px] hover:text-ci-gray lg:text-[20px]"
=======
              className="cursor-pointer hover:text-ci-gray"
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
              onClick={() => router.push("/login")}
            >
              Sign in
            </div>
<<<<<<< HEAD
            <div onClick={() => setMenuHamburger(!menuHamburger)}>
              <HamburgerIcon
                size={24}
                className="visible cursor-pointer hover:opacity-20 lg:invisible"
              />
            </div>
=======
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
          </div>
        )}
      </div>
      {accountMenu && <AccountMenu profileUrl={accountIcon} />}
<<<<<<< HEAD
      {menuHamburger && <MenuHamburger />}
=======
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
    </div>
  );
};

export default PropertyNavigationBar;
