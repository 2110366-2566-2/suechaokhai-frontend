'use client';
import AppointmentList from "@/components/my-appointment/AppointmentList";
import ToggleSwitch from "@/components/my-appointment/ToggleSwitch";

export default function MyAppointment() {
    return (
        <div className="w-[80%] mt-8 mx-auto h-full">
            <div className="flex flex-row">
                <div className="text-5xl font-bold mr-3">
                    My Appointment
                </div>
                <ToggleSwitch 
                    toggled='toggled'
                    onToggle={() => {
                        alert('TOGGLED!')
                    }}
                />
            </div>
            <div className="flex flex-row">
                <div className="text-xl font-bold my-5">
                    Sort By
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