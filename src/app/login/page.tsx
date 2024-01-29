"use client";

import TextField from "@/components/TextField";
import LoginOption from "@/components/LoginOption";
import { useRef } from "react";
import Image from "next/image";

export default function LoginPage() {
  const email = useRef("");
  const password = useRef("");
  const remember = useRef(false);

  const test = () => {
    console.log(email);
    console.log(password);
    if (remember) {
      console.log(remember);
    }
  };

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
        <div className="pb-[9px] pt-[19px] text-[40px] font-bold">Login</div>
        <form className="px-[70px] text-left text-[20px]">
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

          <div className="flex w-[507px] flex-row py-[20px]">
            <div className="flex flex-row">
              <input
                autoComplete="off"
                className="h-[30px] w-[30px] rounded-[20px] border border-[#B3B3B3]"
                type="checkbox"
              ></input>
              <div className="px-2">Remember me</div>
              <div className="relative left-[137px] text-[#3AAEEF]">
                Forgot Password?
              </div>
            </div>
          </div>

          <button className="my-[10px] h-[60px] w-[510px] rounded-[10px] bg-[#3AAEEF] font-[24px] font-bold text-white">
            Log in
          </button>

          <div className="my-[26px] flex flex-row items-center justify-center">
            <div className="mx-[8px]">Doesn’t have an account yet?</div>
            <div className="mx-[8px] text-[#3AAEEF]"> Register here</div>
          </div>

          <div className="flex flex-row items-center justify-center">
            <div>Or continue with</div>
          </div>
        </form>
        <button onClick={test} className="bg-slate-400 p-3">
          test
        </button>
      </div>
    </div>
  );
}
