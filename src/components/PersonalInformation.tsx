import Image from "../../node_modules/next/image"
import TextBox from "./TextField"

export default function PersonalInformation() {
    return (
        <div className="flex h-[870px] w-[664px] flex-col items-center rounded-[20px] bg-white">
            <div className="pb-[50px] pt-[50px] text-[40px] font-bold">
                Personal Information
            </div>
            <Image
                src="/img/ProfilePhoto.png"
                alt="profilePic"
                width={267}
                height={220}
            ></Image>
            <form className="px-[67px] text-left text-[20px]" action="">
                <div className="flex flex-col pt-[22px] gap-[22px]">
                    <TextBox
                    label="First Name"
                    placeholder="Enter your first name"
                    ></TextBox>
                </div>
                <div className="flex flex-col gap-[22px] pt-[22px]">
                    <TextBox
                    label="Last Name"
                    placeholder="Enter your last name"
                    ></TextBox>
                </div>
                <div className="flex flex-col gap-[22px] pt-[22px]">
                    <TextBox
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    ></TextBox>
                </div>
            </form>
            <div className="grid grid-cols-2 gap-x-[130px] pt-[50px]">
                <div><button className="h-[60px] w-[190px] rounded-[10px] bg-[#3AAEEF] font-bold text-white text-[24px]">
                    Back
                </button></div>
                <div><button className="h-[60px] w-[190px] rounded-[10px] bg-[#3AAEEF] font-bold text-white text-[24px]">
                    Next
                </button></div>
            </div>
        </div>
    )
}