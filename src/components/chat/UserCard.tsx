import Image from "next/image";
import { useState } from "react";
import MessageBox from "./MessageBox";

export default function UserCard({userId}:{userId:string}){
    const [isChat,setChat] = useState<boolean>(false);
    return(
        <div>
            {isChat&&
                <div className="absolute right-0 bottom-0 mr-[120px]">
                    <MessageBox user={userId} setChat={setChat}/>
                </div>
            }
            <div className="flex flex-row w-full h-20 justify-start items-center hover:bg-ci-gray rounded-xl p-2 cursor-pointer" 
                onClick={()=>{setChat(!isChat)}}>
                <div className="h-16 w-16 overflow-hidden rounded-full justify-center items-center flex">
                    <Image src='/img/babywinsmoking.jpg' alt='รูปปก' 
                    width={16}
                    height={16}
                    draggable={false}
                    layout="responsive"/>
                </div>
                <div className="text-xl font-bold px-8">
                    {userId}
                </div>
            </div>
        </div>
    )
}