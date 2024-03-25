"use client"
import Image from "next/image";
import StatusBox from '@/components/my-appointment/StatusBox';
import UserCard from '@/components/my-appointment/UserCard';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import AppointmentData from "@/components/models/AppointmentData";
import PropertyData from "@/components/models/PropertyData";
import getPropertyDetail from "@/services/getPropertyDetail";
import UserData from "@/components/models/UserData";
import getOwnerData from "@/services/getOwnerData";
import getUserAppointment from "@/services/getUserAppointment";
import getOneAppointment from "@/services/getOneAppointment";

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

    const params = useParams<{ id: string; }>();

    const [apptDetail, setApptDetail] = useState<AppointmentData | null>(null);
    const [propertyDetail, setPropertyDetail] = useState<PropertyData | null>(null);
    const [ownerDetail, setOwnerDetail] = useState<UserData | null>(null);
    const [dwellerDetail, setDwellerDetail] = useState<UserData | null>(null);
    const [isFetched, setFetched] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const appt = await getOneAppointment(params.id);
            setApptDetail(appt);
            // if (appt?.property_id) {
            //     const pptDetail = await getPropertyDetail(appt.property_id);
            //     setPropertyDetail(pptDetail);
            // }
            // if (appt?.owner_user_id) {
            //     const owner = await getOwnerData(appt.owner_user_id);
            //     setOwnerDetail(owner);
            // }
            // if (appt?.dweller_user_id) {
            //     const dweller = await getOwnerData(appt.dweller_user_id);
            //     setDwellerDetail(dweller);
            // }
            if (appt.code == 400) {
              window.location.href = "/404";
            }
          };
        fetchData();
        console.log('successful')
        setFetched(true);
    }, []);

    useEffect(() => {
        console.log(apptDetail)
        // console.log(propertyDetail)
        // console.log(ownerDetail)
        // console.log(dwellerDetail)
    }, [apptDetail])

    const getDate = (dateString: string) => {
        const date = new Date(dateString);

        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        return `${day} ${months[month - 1]} ${year}`;
    }

    const getTime = (dateString: string) => {
        const date = new Date(dateString);

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    const getAddress = () => {
        return `${apptDetail?.property.address}, ${apptDetail?.property.alley}, ${apptDetail?.property.street}, ${apptDetail?.property.district}, ${apptDetail?.property.sub_district}, ${apptDetail?.property.province}, ${apptDetail?.property.country}, ${apptDetail?.property.postal_code}`
    }
    
    return (
        
        <div className="w-[80%] h-full mx-auto my-[50px]">
            {isFetched ? (
            <div>
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
                    {apptDetail?.property.property_name}
                </div>
            </div>
            <div className="flex flex-col my-10 bg-ci-light-gray w-full h-full rounded-3xl">
                <div className="flex flex-col items-center justify-center w-[90%] mx-auto my-7">
                    <div className="flex flex-row w-full justify-between mb-5">
                        <div className="font-bold text-4xl">
                            {apptDetail?.property.property_name}
                        </div>
                        <div>
                            <StatusBox status={apptDetail?.status.charAt(0) + apptDetail?.status.toLowerCase().slice(1)}/>
                        </div>
                    </div> 
                    <div className="flex flex-row w-full justify-between">
                        <div className="w-[40%]">
                            <Image 
                                // src={apptDetail?.property.property_images[0].image_url}
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
                                        {getDate(apptDetail?.appointment_date)}
                                    </div>
                                </div>
                                <div className="flex mx-auto">
                                    <div className="font-semibold">
                                        Time:&nbsp;
                                    </div>
                                    <div className="font-regular">
                                        {getTime(apptDetail?.appointment_date)}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row my-auto'>
                                <div className="font-semibold">
                                    Address:&nbsp;
                                </div>
                                <div className="font-regular">
                                    {getAddress()}
                                </div>
                            </div>
                            <div className='flex flex-row my-auto'>
                                <div className="font-semibold">
                                    Price:&nbsp;
                                </div>
                                <div className="font-regular">
                                    {apptDetail?.property.price_per_month + ' Baht / month'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-[80%] h-full mx-auto mt-5">
                    <div className="flex flex-row w-[80%] justify-between mb-5">
                        <UserCard role='Owner' profilePicSrc={apptDetail?.owner.owner_profile_image_url} 
                        name={`${apptDetail?.owner.owner_first_name} ${apptDetail?.owner.owner_last_name}`} tel={apptDetail?.owner.owner_phone_number}/>
                        <UserCard role='Dweller' profilePicSrc={apptDetail?.dweller.dweller_profile_image_url} 
                        name={`${apptDetail?.dweller.dweller_first_name} ${apptDetail?.dweller.dweller_last_name}`} tel={apptDetail?.dweller.dweller_phone_number}/>
                    </div>
                    <div className="flex flex-row text-xl">
                        <div className="font-semibold">
                            Note:&nbsp;
                        </div>
                        <div className="font-regular">
                            {apptDetail?.note}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        ) : null
        }
        </div>
   
    )
}  