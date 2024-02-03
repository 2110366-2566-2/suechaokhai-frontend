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
            >
            </Image>
            <form className="pt-[22px] px-[67px] text-left text-[20px]" action="">
                <TextBox
                    label="First Name">

                </TextBox>
            </form>
        </div>
    )
}