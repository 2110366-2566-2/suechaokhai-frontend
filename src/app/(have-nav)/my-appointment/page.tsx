'use client';
import { useEffect, useRef, useState } from "react"
import Image from "next/image";
import AppointmentList from "@/components/my-appointment/AppointmentList";
import ToggleSwitch from "@/components/my-appointment/ToggleSwitch";
import getUserAppointment from "@/services/getUserAppointment";

export default function MyAppointment() {

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
            console.log(data);
        }
        fetchData()
    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('Checkbox value:', event.target.value);
        // Handle checkbox change logic here
    };

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
            <AppointmentList propertyImgSrc="/img/my-appointment/mhadaeng.png" propertyName="Bhan Mha Daeng 3" propertySubName="Project House of Mha Daeng" ownerImgSrc="/img/my-appointment/owapapi.png" ownerName="Owa Papi" date="1 Apr 2005" time="13:39" status="Pending"/>
            <AppointmentList propertyImgSrc="/img/my-appointment/mhadaeng.png" propertyName="Bhan Mha Daeng 2" propertySubName="Project House of Mha Daeng" ownerImgSrc="/img/my-appointment/owapapi.png" ownerName="Owa Papi" date="1 Apr 2003" time="13:26" status="Cancelled"/>
            <AppointmentList propertyImgSrc="/img/my-appointment/mhadaeng.png" propertyName="Bhan Mha Daeng 1" propertySubName="Project House of Mha Daeng" ownerImgSrc="/img/my-appointment/owapapi.png" ownerName="Owa Papi" date="30 Dec 2002" time="19:00" status="Archive"/>
        </div>
    )
}