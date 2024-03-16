import Image from "next/image";
import StatusBox from "@/components/my-appointment/StatusBox";
import { DetailButton, CancelButton } from "@/components/my-appointment/InteractiveButton";
import { useState } from "react";

export default function AppointmentList({
    propertyImgSrc,
    propertyName,
    propertySubName,
    ownerImgSrc,
    ownerName,
    date,
    time,
    status
} : {
    propertyImgSrc: string,
    propertyName: string,
    propertySubName: string,
    ownerImgSrc: string,
    ownerName: string,
    date: string,
    time: string,
    status: string
}) {
    const [reason, setReason] = useState("");

    return (
        <div className="border-ci-dark-gray border-y-2 border-x-4 bg-ci-light-gray w-full h-[240px]">
            <div className="flex flex-row w-[90%] h-[67%] mx-auto my-10 justify-between">
                <div className="flex flex-row w-[40%] my-auto">
                    <div className="w-[40%] my-auto">
                        <Image 
                            src={propertyImgSrc}
                            alt="propertyImg"
                            width={240}
                            height={160}
                            objectFit="cover"
                            layout="responsive"
                        />
                    </div>
                    <div className="flex flex-col ml-5 my-auto">
                        <div className="text-2xl font-medium">
                            {propertyName}
                        </div>
                        <div className="text-xl font-normal">
                            {propertySubName}
                        </div>
                        <div className="flex flex-row mt-3 text-xl font-normal">
                            <div>
                                <Image 
                                    src={ownerImgSrc}
                                    alt="Owner Image"
                                    width={60}
                                    height={60}
                                    layout="responsive"
                                />
                            </div>
                            <div className="mx-2 my-auto">
                                {ownerName}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[15%] ml-20 my-auto text-2xl font-regular">
                    <div>
                        {date}
                    </div>
                    <div className="mt-2">
                        {time}
                    </div>
                </div>
                <div className="w-[12.5%] h-[30%] ml-20 my-auto">
                    <StatusBox status={status}/>
                </div>
                <div className="flex flex-col w-[12.5%] h-full ml-28 my-auto justify-between">
                    <DetailButton />
                    <CancelButton status={status} reasontmp={reason} setReason={setReason}/>            
                </div>
            </div>
        </div>
    )
}