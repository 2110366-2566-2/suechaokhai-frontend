import Image from "next/image";
import ChatList from "./ChatList";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function ChatBox({setOpen}:{setOpen:Function}){
    const [isChat,setChat] = useState<boolean>(false);
    const peopleNames = [
        "John",
        "Emma",
        "Michael",
        "Sophia",
        "William",
        "Olivia",
        "James",
        "Ava",
        "Alexander",
        "Isabella"
      ];
    return(
        <div className="h-[528px] w-96 bg-white shadow-xl shadow-slate-500 px-6 py-5 rounded-t-xl gap-y-4 flex flex-col">
            <div className="flex flex-row justify-between">
                <div className="text-xl font-bold">Chat</div>
                <div className="flex flex-row text-lg gap-x-4">
                    <button className="rounded-md hover:bg-slate-300">
                        <Image src='/img/chat/create-message-icon.svg' width={24} height={24} alt='ไอบอสสส'/>
                    </button>
                    <button className="rounded-md hover:bg-slate-300" onClick={()=>{setOpen(false)}}>
                        <Image src='/img/chat/close-icon.svg' width={24} height={24} alt='ไอบอสสส'/>
                    </button>
                </div>
            </div>
            <SearchBar/>
            <ChatList userList={peopleNames}/>
        </div>
    )
}