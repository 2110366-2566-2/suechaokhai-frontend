import Image from "next/image"
import { useState } from "react"
import ChatBox from "./ChatBox";
export default function ChatIcon(){

    return(
        <div className="rounded-full bg-ci-blue size-16 flex items-center justify-center shadow-xl shadow-slate-400 hover:bg-ci-dark-blue cursor-pointer">
            <Image src="/img/chat/chat_icon.svg" width={40} height={40} alt='ไอบอสสสส'/> 
        </div>
        
    )
}