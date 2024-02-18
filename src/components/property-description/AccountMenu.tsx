"use client";
import Image from "next/image";
import userLogout from "@/services/userLogout";
import { useRouter } from "next/navigation";
const editIcon = "/img/PropertyNavBar/tabler_pencil.svg";
const logoutIcon = "/img/PropertyNavBar/logout-icon.svg";

const AccountMenu = ({ profileUrl }: { profileUrl: string }) => {
  const accountIcon = profileUrl;
  const router = useRouter();
  const logout = async () => {
    userLogout();
    router.push("/login");
  };
  return (
    <div className="absolute right-0 z-40 my-2 flex  h-80 w-80  flex-col overflow-hidden rounded-lg bg-white text-[20px]">
      <div className="relative flex h-3/5 items-center justify-center bg-ci-gray">
        <div className="aspect-square overflow-hidden rounded-full">
          <Image src={accountIcon} alt={"account"} width={160} height={160} />
        </div>
      </div>
      <div
        className="flex h-1/5 cursor-pointer flex-row items-center space-x-1 px-2 hover:bg-ci-dark-gray"
        onClick={() => router.push("/suechaokhai/editProfile")}
      >
        <Image src={editIcon} alt={"edit"} width={30} height={16} />
        <div>Edit profile</div>
      </div>
      <div
        className="flex h-1/5 cursor-pointer flex-row items-center space-x-2 px-2 hover:bg-ci-dark-gray"
        onClick={logout}
      >
        <Image src={logoutIcon} alt={"logout"} width={30} height={16} />
        <div>Log out</div>
      </div>
    </div>
  );
};
export default AccountMenu;
