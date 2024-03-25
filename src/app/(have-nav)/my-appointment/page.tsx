'use client';
import { useEffect, useRef, useState } from "react"
import Image from "next/image";
import AppointmentList from "@/components/my-appointment/AppointmentList";
import ToggleSwitch from "@/components/my-appointment/ToggleSwitch";
import getUserAppointment from "@/services/getUserAppointment";
import AppointmentData from "@/components/models/AppointmentData";
import PropertyData from "@/components/models/PropertyData";
import getPropertyDetail from "@/services/getPropertyDetail";
import AppointmentDetailData from "@/components/models/AppointmentDetailData";
import getOwnerData from "@/services/getOwnerData";

export default function MyAppointment() {

    const [appointmentData, setAppointmentData] = useState<AppointmentData[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [appointmentDetail, setAppointmentDetail] = useState<AppointmentDetailData[]>([]);
    const [finishFetching, setFinishFetching] = useState<boolean>(false);

    const [selectOn, setSelectOn] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [showFilter, setShowFilter] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<Array<string>>(["Archive", "Cancelled", "Confirm", "Pending", "Rejected"]);
    
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setShowFilter(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserAppointment();
            console.log(data)
            setAppointmentData(data);
            setTotal(data.length);
        }    
        fetchData()
        setFinishFetching(true)
    }, [])

    // useEffect(() => {
    //     const fetchPropertyData = async () => {
    //         const dataDetail = [];
    //         for (let i = 0; i < total; i++) {
    //             const dataObject = await getPropertyDetail(appointmentData[i].property.property_id);
    //             console.log(appointmentData[i]);
    //             console.log(dataObject);
    //             const ownerDetail = await getOwnerData(appointmentData[i].owner.owner_user_id);
    //             const newJSON = Object.assign({}, appointmentData[i], dataObject, ownerDetail); 
    //             dataDetail.push(newJSON);
    //         }
    //         setAppointmentDetail(dataDetail);
    //     }
    //     fetchPropertyData();
    //     setFinishFetching(true);
    // }, [appointmentData])

    useEffect(() => {
        console.log(appointmentData);
        console.log(total)
    }, [appointmentData])

    useEffect(() => {
        console.log(appointmentDetail)
    }, [appointmentDetail])

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('Checkbox value:', event.target.value);
        // Handle checkbox change logic here
    };

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

    return (
        <div className="w-[80%] mt-8 mx-auto h-full">
            <div className="flex flex-row">
                <div className="text-5xl font-bold mr-auto">
                    My Appointment
                </div>
                <div className="pt-1">
                    <ToggleSwitch 
                        label1="Dweller"
                        label2="Owner"
                        selectOn={selectOn}
                        setSelectOn={setSelectOn}
                    />
                </div>
                
            </div>
            <div className="flex flex-row my-5">
                <div className="text-xl font-bold">
                    Sort By
                </div>
                <div className="ml-1">
                    <select 
                        className="font-semibold text-xl text-ci-blue block w-full rounded-md focus:border-none focus-within:border-none hover:cursor-pointer"
                        value={selectedOption} onChange={handleChange}
                    >
                        <option className="hover:bg-ci-light-gray hover:shadow-inner" value="latest">Latest Appointment First</option>
                        <option className="hover:bg-ci-light-gray hover:shadow-inner" value="oldest">Oldest Appointment First</option>
                    </select>
                </div>
                <div 
                    className="flex flex-row text-xl font-bold ml-2 place-items-start relative"
                >
                    <div
                        className="flex flex-row hover:cursor-pointer"
                        onClick={() => {
                            setShowFilter(!showFilter)
                        }}
                    >
                        Filter Status Type
                        <Image 
                            className="mx-1 hover:cursor-pointer"
                            src="img/my-appointment/filter.svg"
                            alt="filter"
                            width={25}
                            height={25}
                        />
                    </div>
                    
                    {showFilter? (
                        <div ref={ref} className="absolute flex flex-col z-40 border border-black bg-white items-center w-full top-full -right-40">
                            {selectedStatus.map(selected => (
                                <div className="flex flex-row w-full h-[50px] bg-slate-200 p-3 mx-auto">
                                    <input className="w-1/5 accent-ci-light-gray" type="checkbox" value={selected} onChange={handleCheckboxChange} checked={true}/>
                                    <div className="w-4/5">
                                        {selected}
                                    </div> 
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
                
            </div>

            <div className="h-[80px] rounded-t-3xl bg-ci-dark-blue text-white text-2xl font-semibold">
                <div className="flex flex-row w-[90%] h-full mx-auto my-auto">
                    <div className="ml-2 w-[40%] my-auto">
                        Property
                    </div>
                    <div className="mx-[80px] my-auto">
                        Date - Time
                    </div>
                    <div className="mx-[80px] my-auto">
                        Status
                    </div>
                </div>
            </div>
            {finishFetching?
                <div>
                {appointmentData.map(appt => {
                    return (
                        <AppointmentList apptId={appt.appointment_id} propertyImgSrc={(appt.property.property_images.length === 0) ? '/img/my-appointment/mhadaeng.png': appt.property.property_images[0].image_url} 
                            propertyName={appt.property.property_name} 
                            propertySubName={appt.property.property_type.charAt(0) + appt.property.property_type.toLowerCase().slice(1)} 
                            ownerImgSrc={appt.owner.owner_profile_image_url} ownerName={appt.owner.owner_first_name + ' ' + appt.owner.owner_last_name} 
                            date={getDate(appt.appointment_date)} time={getTime(appt.appointment_date)} 
                            status={appt.status.charAt(0) + appt.status.    toLowerCase().slice(1)}
                        />
                    )
                })} 
                </div>
            : null}
            
            {/* <AppointmentList apptId="abc" propertyImgSrc="/img/my-appointment/mhadaeng.png" propertyName="Bhan Mha Daeng 3" propertySubName="Project House of Mha Daeng" ownerImgSrc="/img/my-appointment/owapapi.png" ownerName="Owa Papi" date="1 Apr 2005" time="13:39" status="Pending"/>
            <AppointmentList apptId="abc" propertyImgSrc="/img/my-appointment/mhadaeng.png" propertyName="Bhan Mha Daeng 2" propertySubName="Project House of Mha Daeng" ownerImgSrc="/img/my-appointment/owapapi.png" ownerName="Owa Papi" date="1 Apr 2003" time="13:26" status="Cancelled"/>
            <AppointmentList apptId="abc" propertyImgSrc="/img/my-appointment/mhadaeng.png" propertyName="Bhan Mha Daeng 1" propertySubName="Project House of Mha Daeng" ownerImgSrc="/img/my-appointment/owapapi.png" ownerName="Owa Papi" date="30 Dec 2002" time="19:00" status="Archive"/> */}
            <div className="flex h-20 place-items-center justify-center w-full mx-auto font-medium text-2xl">
                {total} lists
            </div>
        </div>
    )
}