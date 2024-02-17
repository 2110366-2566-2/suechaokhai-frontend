import Image from "next/image";

const editIcon = "/img/PropertyNavBar/tabler_pencil.svg";
const logoutIcon = "/img/PropertyNavBar/logout-icon.svg";
const accountIcon = "/img/PropertyNavBar/gray-account-icon.svg";

const AccountMenu = () => {
  return (
    <div className="absolute right-0 z-40 my-2 flex  h-80 w-80  flex-col overflow-hidden rounded-lg bg-white text-[20px]">
      <div className="bg-ci-gray relative flex h-3/5 items-center justify-center">
        <Image src={accountIcon} alt={"account"} width={160} height={160} />
      </div>
      <div className="hover:bg-ci-dark-gray flex h-1/5 flex-row items-center space-x-1 px-2">
        <Image src={editIcon} alt={"edit"} width={30} height={16} />
        <div>Edit profile</div>
      </div>
      <div className="hover:bg-ci-dark-gray flex h-1/5 flex-row items-center space-x-2 px-2">
        <Image src={logoutIcon} alt={"logout"} width={30} height={16} />
        <div>Log out</div>
      </div>
    </div>
  );
};
export default AccountMenu;
