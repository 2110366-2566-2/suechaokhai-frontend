"use client"
import Image from "next/image";
import StatusBox from '@/components/my-appointment/StatusBox';
import UserCard from '@/components/my-appointment/UserCard';
import { useRouter } from 'next/navigation';

export default function AppointmentDetail() {
    const router = useRouter();

    const propertyImgSrc="/img/my-appointment/mhadaeng.png" 
    const propertyName="Bhan Mha Daeng 3" 
    const propertySubName="Project House of Mha Daeng" 
    const ownerImgSrc="/img/my-appointment/owapapi.png" 
    const ownerName="Owa Papi" 
    const ownerTel='012 - 345 - 6789'
    const dwellerName="Piwa Opi"
    const dwellerTel='098 - 765 - 4321'
    const date="1 Apr 2005" 
    const time="13:39" 
    const status="Pending"

    const address="101 ถนน สุขุมวิท 101/1 Bang Chak, Phra Khanong, Bangkok 10260"
    const price="25,000 Baht/mo"
    const note="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"

    return (
        <div className="w-[80%] h-full mx-auto my-[50px]">
            <div className="flex flex-row">
                <button 
                    className="flex flex-row w-[7%] h-min bg-ci-blue rounded-full px-2 py-2"
                    onClick={() => router.back()}
                >
                    <div className="w-[40%] my-auto mx-auto pl-2">
                        <Image
                            src='/img/my-appointment/return.svg'
                            alt='return'
                            width={20}
                            height={20}
                            objectFit="cover"
                            layout="responsive"
                        />
                    </div>
                    <div className="w-[60%] my-auto text-white text-lg">
                        Back
                    </div>
                </button>
                <div className="font-bold text-4xl my-auto mx-5">
                    {propertyName}
                </div>
            </div>
            <div className="flex flex-col my-10 bg-ci-light-gray w-full h-full rounded-3xl">
                <div className="flex flex-col items-center justify-center w-[90%] mx-auto my-7">
                    <div className="flex flex-row w-full justify-between mb-5">
                        <div className="font-bold text-4xl">
                            {propertyName}
                        </div>
                        <div>
                            <StatusBox status={status}/>
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-between">
                        <div className="w-[40%]">
                            <Image 
                                src={propertyImgSrc}
                                alt='property image'
                                width={600}
                                height={400}
                                objectFit='cover'
                                layout='responsive'
                            />
                        </div>
                        <div className="flex flex-col w-[50%] h-full text-2xl">
                            <div className="flex flex-row my-auto">
                                <div className="flex mr-auto">
                                    <div className="font-semibold">
                                        Date:&nbsp;
                                    </div>
                                    <div className="font-regular">
                                        {date}
                                    </div>
                                </div>
                                <div className="flex mx-auto">
                                    <div className="font-semibold">
                                        Time:&nbsp;
                                    </div>
                                    <div className="font-regular">
                                        {time}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row my-auto'>
                                <div className="font-semibold">
                                    Address:&nbsp;
                                </div>
                                <div className="font-regular">
                                    {address}
                                </div>
                            </div>
                            <div className='flex flex-row my-auto'>
                                <div className="font-semibold">
                                    Price:&nbsp;
                                </div>
                                <div className="font-regular">
                                    {price}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-[80%] h-full mx-auto mt-5">
                    <div className="flex flex-row w-[80%] justify-between mb-5">
                        <UserCard role='Owner' profilePicSrc={ownerImgSrc} 
                        name={ownerName} tel={ownerTel}/>
                        <UserCard role='Dweller' profilePicSrc={ownerImgSrc} 
                        name={dwellerName} tel={dwellerTel}/>
                    </div>
                    <div className="flex flex-row text-xl">
                        <div className="font-semibold">
                            Note:&nbsp;
                        </div>
                        <div className="font-regular">
                            {note}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}  