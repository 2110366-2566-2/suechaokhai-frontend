import ChatBox from "./ChatBox"
import ChatIcon from "./ChatIcon"
import Image from "next/image"
import SearchBar from "./SearchBar"

export default function MessageBox({user,setChat}:{user:string,setChat:Function}){
    return (
        <div className="h-[528px] w-96 bg-white shadow-xl shadow-slate-500 px-6 py-5 rounded-t-xl gap-y-4 flex flex-col">
            <div className="flex flex-row justify-between">
                <div className="text-xl font-bold">{user}</div>
                <div className="flex flex-row text-lg gap-x-4">
                    <button className="rounded-md hover:bg-slate-300">
                        <Image src='/img/chat/create-message-icon.svg' width={24} height={24} alt='ไอบอสสส'/>
                    </button>
                    <button className="rounded-md hover:bg-slate-300" onClick={()=>{setChat(false)}}>
                        <Image src='/img/chat/close-icon.svg' width={24} height={24} alt='ไอบอสสส'/>
                    </button>
                </div>
            </div>
            <SearchBar/>
        </div>)
}