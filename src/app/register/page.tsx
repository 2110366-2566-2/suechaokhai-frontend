"use client";

import TextField from "@/components/TextField";
import { useRef, useState } from "react";
import Image from "next/image";

export default function RegisterPage() {
  const [registerStage, changeRegState] = useState(0);
  const email = useRef("");
  const password = useRef("");

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#B8B8B8]">
      <div className="flex h-[830px] w-[650px] flex-col items-center rounded-[10px] bg-white">
        <Image
          src="/img/compIcon.png"
          alt="test"
          width={80}
          height={80}
          className="mt-[41px]"
        ></Image>
        <div className="pb-[9px] pt-[19px] text-[40px] font-bold">Register</div>
        <form className="px-[70px] text-left text-[20px]">
          <div className="flex flex-col gap-[18px]">
            <TextField
              label="Email"
              placeholder="Enter your email here"
              onChange={(e) => (email.current = e.target.value)}
            />

            <TextField
              label="Password"
              placeholder="Enter your password here"
              type="password"
              onChange={(e) => (password.current = e.target.value)}
            />
          </div>

          <button className="h-[60px] w-[510px] rounded-[10px] bg-[#3AAEEF] font-bold text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
