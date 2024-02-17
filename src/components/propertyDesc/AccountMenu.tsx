import Image from "next/image";

const editIcon = "/img/PropertyNavBar/tabler_pencil.svg";

const AccountMenu = () => {
  return (
    <div className="absolute right-0 z-40 my-2 flex flex h-80 w-80 flex-row flex-col rounded-lg bg-red-100 text-[20px]">
      <div className="flex flex-row">
        <Image src={editIcon} alt={"edit"} width={30} height={16} />
        <div>Edit profile</div>
      </div>
      <div className="">Log out</div>
    </div>
  );
};
export default AccountMenu;
