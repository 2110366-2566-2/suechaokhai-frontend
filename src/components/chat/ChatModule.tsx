"use client"
import getCurrentUser from "@/services/getCurrentUser";
import { useEffect, useState } from "react";
import UserData from "../models/UserData";
import ChatIcon from "./ChatIcon";
import ChatBox from "./ChatBox";

export default function ChatModule(){
    const [user,setUser] = useState<UserData>();
    const [isOpen,setOpen] = useState<boolean>(false);
    useEffect(()=>{
        async function getUser(){
                const user = await getCurrentUser();
                if(user){
                    setUser(user);
                }
                console.log(user)
        };
        getUser()
    })
    return (
    <div className="flex right-0 bottom-0 fixed">
        {user&&
        <div className="flex flex-row justify-end items-end gap-x-6">
            {isOpen&&
                <div>
                    <ChatBox/>
                </div>
            }
            <div onClick={()=>{setOpen(!isOpen)}}>
                <ChatIcon/>
            </div>
        </div>}
    </div>)
}