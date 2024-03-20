"use client";

import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function EmailVerificationPage({
  finReg,
  changeRegState,
}: {
  changeRegState: Function;
  finReg: any;
}) {
  function checkVerification() {
    changeRegState(2);
  }
  return (
    <div>
      {true ? (
        <div className="flex h-full flex-col items-center justify-center gap-y-10 rounded-[10px] bg-white px-14 py-16">
          <div className="text-3xl font-bold">Please Verify Your Email</div>

          <div className="flex flex-col items-center gap-y-10">
            <div className="font-regular flex flex-col items-center justify-center text-center text-lg">
              <Image
                src={"/img/login-register/email-sent.svg"}
                width={150}
                height={150}
                alt="BlueValidIcon"
              />
              <div className="flex flex-col">
                <div className="font-bold">
                  We have sent the verification code to your email.
                </div>
                <div>Please verify your email in 5 minutes.</div>
              </div>
            </div>
          </div>

          <div className="font-regular flex w-full w-full flex-col justify-between gap-y-4 text-xl">
            <input
              type="text"
              className="block h-[50px] w-full rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700"
              placeholder="Enter your verification code"
            ></input>
            <button
              onClick={() => {
                checkVerification();
              }}
              className="h-[60px] w-full rounded-[10px] bg-ci-blue font-bold text-white"
            >
              Verify
            </button>
          </div>
          <div className="flex flex-col gap-y-6 text-center text-lg text-ci-blue">
            <div className="cursor-pointer">Resend verification link</div>
            <div
              onClick={() => {
                changeRegState(0);
              }}
              className="cursor-pointer"
            >
              Back
            </div>
          </div>
        </div>
      ) : (
        <div
          onLoad={() => console.log("test")}
          className="flex h-[713px] w-[1214px] flex-col items-center rounded-[10px] bg-white"
        >
          <CircularProgress className="relative mt-[400px]" />
        </div>
      )}
    </div>
  );
}
