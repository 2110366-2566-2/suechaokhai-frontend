"use client"
import getCurrentUser from "@/services/getCurrentUser";
import { useEffect, useState } from "react";
import UserData from "../models/UserData";
import ChatIcon from "./ChatIcon";

export default function ChatModule(){
    const [user,setUser] = useState<UserData>();
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
    <div className="flex right-5 bottom-5 fixed">
        {user&&
        <div>
            <ChatIcon/>
        </div>}
    </div>)
}