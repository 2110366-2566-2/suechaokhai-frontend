import AppointmentList from "@/components/my-appointment/AppointmentList";
import ToggleSwitch from "@/components/my-appointment/ToggleSwitch";

export default function MyAppointment() {
    return (
        <div className="w-[80%] mt-8 mx-auto h-full">
            <div className="flex flex-row">
                <div className="text-5xl font-bold mr-3">
                    My Appointment
                </div>
                <ToggleSwitch/>
            </div>
            <div className="flex flex-row">
                <div className="text-xl font-bold my-5">
                    Sort By
                </div>
            </div>
            <div className="flex flex-row h-[80px] rounded-3xl bg-ci-dark-blue text-white font-semibold">
                <div className="mx-[80px] my-auto">
                    Property
                </div>
                <div className="mx-[80px] my-auto">
                    Date - Time
                </div>
                <div className="mx-[80px] my-auto">
                    Status
                </div>
            </div>
            <AppointmentList />
            <AppointmentList />
            <AppointmentList />
        </div>
    )
}