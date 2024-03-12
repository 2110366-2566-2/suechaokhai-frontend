import Image from "next/image";
const personalIcon = "/img/edit-profile/personal-icon.svg";
const financialIcon = "/img/edit-profile/financial-icon.svg";
const ownerIcon = "/img/edit-profile/owner-icon.svg";
const Sidebar = ({
  personal,
  financial,
  owner,
}: {
  personal: () => void;
  financial: () => void;
  owner: () => void;
}) => {
  return (
    <div className=" flex h-[100vh] w-72 flex-col items-center bg-ci-light-gray text-[20px] lg:w-80">
      <div className="flex w-full justify-center text-[40px] font-bold">
        Edit Profile
      </div>
      <div
        className="flex h-14 w-full cursor-pointer flex-row space-x-2 hover:bg-ci-gray"
        onClick={personal}
      >
        <div className="ml-4 flex items-center">
          <Image
            src={personalIcon}
            alt={"personal icon"}
            width={18}
            height={18}
          />
        </div>
        <div className="flex items-center">Personal Information</div>
      </div>
      <div
        className="flex h-14 w-full cursor-pointer flex-row space-x-2 hover:bg-ci-gray"
        onClick={financial}
      >
        <div className="ml-4 flex items-center">
          <Image
            src={financialIcon}
            alt={"financial icon"}
            width={18}
            height={18}
          />
        </div>
        <div className="flex items-center">Financial Information</div>
      </div>
      <div
        className="flex h-14 w-full cursor-pointer flex-row space-x-2 hover:bg-ci-gray "
        onClick={owner}
      >
        <div className="ml-4 flex items-center">
          <Image src={ownerIcon} alt={"owner icon"} width={18} height={18} />
        </div>
        <div className="flex items-center">Owner Information</div>
      </div>
    </div>
  );
};
export default Sidebar;
