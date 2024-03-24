"use client"
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "@/components/ui/icon";
import { CreatePaymentHomePage } from "@/components/create-payment/CreatePaymentHome";
const CreatePayment = () => {
    type Tab = "QR" | "home";
    const [tab, setTab] = useState<Tab>("home");
    return(
        <div className="flex flex-col m-16">
            <div className="flex flex-row items-center space-x-5">
                <ArrowLeft size={20}/>
                <div className="text-3xl font-bold">Payment</div>
            </div>
            <div className="mt-4">
                <CreatePaymentHomePage/>
            </div>
        </div>
    )
}
export default CreatePayment;