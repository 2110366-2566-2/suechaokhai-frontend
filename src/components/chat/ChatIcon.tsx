import Image from "next/image"
import { useState } from "react"
import ChatBox from "./ChatBox";
export default function ChatIcon(){

    return(
        <div>
            <div className="rounded-full bg-ci-blue size-20 flex items-center justify-center shadow-xl shadow-slate-400">
                <Image src="/img/chat/chat_icon.svg" width={48} height={48} alt='ไอบอสสสส'/> 
            </div>
        </div>
        
    )
}