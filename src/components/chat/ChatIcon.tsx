import Image from "next/image"
import { useState } from "react"
export default function ChatIcon(){
    const [isOpen,setOpen] = useState<boolean>(false);
    return(
        <div className="flex flex-row">
            {isOpen&&
            <div>
                test
            </div>}
            <div className="rounded-full bg-ci-blue size-20 flex items-center justify-center shadow-xl shadow-slate-400" 
                 onClick={()=>{setOpen(!isOpen)}}>
                <Image src="/img/chat/chat_icon.svg" width={48} height={48} alt='ไอบอสสสส'/> 
            </div>
        </div>
        
    )
}