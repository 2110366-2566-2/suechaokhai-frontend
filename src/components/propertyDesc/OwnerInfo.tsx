import Image from "next/image";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const OwnerInfo = ({
  name,
  tel,
  mail,
  imgSrc,
}: {
  name: string;
  tel: string;
  mail: string;
  imgSrc: string;
}) => {
  return (
    <div className="mt-3 flex w-[700px] flex-col bg-white">
      <div className="p-2 text-xl font-bold">Owner</div>
      <div className="m-[8px] flex   flex-row ">
        <div className="relative m-[8px] h-[120px] w-[120px] items-center justify-between ">
          <Image
            src={imgSrc}
            fill={true}
            alt="Picture of the author"
            className="rounded-lg"
          />
        </div>
        <div className="m-[8px] flex-col">
          <div className="text-xl font-bold">{name}</div>
          <div className="flex-row text-xl">
            <LocalPhoneOutlinedIcon className="m-1"></LocalPhoneOutlinedIcon>
            {tel}
          </div>

          <div className="text-xl">
            <EmailOutlinedIcon className="m-1"></EmailOutlinedIcon>
            {mail}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerInfo;
