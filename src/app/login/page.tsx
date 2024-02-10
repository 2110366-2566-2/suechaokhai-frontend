"use client";

import TextField from "@/components/register-login/TextField";
import LoginOption from "@/components/register-login/LoginOption";
import GoogleButton from "@/components/register-login/GoogleButton";
import { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import PasswordField from "@/components/register-login/PasswordField";
import userLogin from "@/libs/userLogin";
import { useRouter } from "next/navigation";
import userGreeting from "@/libs/userGreeting";

export default function LoginPage() {
  const email = useRef("");
  const password = useRef("");
  const remember = useRef<boolean>(false);
  const router = useRouter();
  // const cookieStore = cookies();

  const test = () => {
    console.log(email);
    console.log(password.current);
    if (remember) {
      console.log(remember);
    }
    userLogin(email.current, password.current);
    router.push("/propertyDescription");
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#B8B8B8]">
      <div className="flex h-[830px] w-[650px] flex-col items-center rounded-[10px] bg-white">
        <Image
          src="/img/compIcon.png"
          alt="test"
          width={80}
          height={80}
          className="pt-[41px]"
        ></Image>
        <div className="pb-[9px] pt-[19px] text-[40px] font-bold">Login</div>
        <form
          className="px-[70px] text-left text-[20px]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-[18px]">
            <TextField
              label="Email"
              type="email"
              required
              placeholder="Enter your email here"
              onChange={(e) => (email.current = e.target.value)}
            />

            <PasswordField
              label="Password"
              placeholder="Enter your password here"
              type="password"
              required
              // setPassword={setPassword}
              onChange={(e) => (password.current = e.target.value)}
            />
          </div>
          <LoginOption onChange={(e) => (remember.current = e.target.checked)}>
            <div className="relative left-[137px] text-[#3AAEEF]">
              Forgot Password?
            </div>
          </LoginOption>

          <button
            className="h-[60px] w-[510px] rounded-[10px] bg-[#3AAEEF] font-bold text-white"
            onClick={test}
          >
            Log in
          </button>
        </form>
        {/* <button onClick={test2}>test</button> */}
        <GoogleButton />
      </div>
    </div>
  );
}
