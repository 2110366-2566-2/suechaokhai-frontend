"use client";

import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function EmailVerificationPage({
  finReg,
}: {
  changeRegState: Function;
  finReg: any;
}) {
  return (
    <div>
      {finReg.message == "User created" ? (
        <div className="flex h-[713px] w-[1214px] flex-col items-center rounded-[10px] bg-white">
          <div className="pb-[90px] pt-[50px] text-[40px] font-bold">
            Please Verify Your Email
          </div>

          <div className="flex flex-col gap-[60px]">
            <div className="font-regular flex items-center justify-center text-[24px]">
              <Image
                src={"/img/login-register/email-sent.svg"}
                width={150}
                height={150}
                alt="BlueValidIcon"
              />
            </div>
            <div className="font-regular flex flex-col items-center justify-center text-center text-[24px]">
              <div>We have sent the verification link to your email.</div>
              <div>Please verify your email in 5 minutes.</div>
            </div>
            <div className="font-regular flex flex-col items-center justify-center gap-4 text-[24px]">
              <Link href="/login">
                <button className="h-[60px] w-[510px] rounded-[10px] bg-ci-blue font-bold text-white">
                  Back to Login page
                </button>
              </Link>

              <Link href="/login">
                <div className="text-ci-blue">Resend verification link</div>
              </Link>
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
