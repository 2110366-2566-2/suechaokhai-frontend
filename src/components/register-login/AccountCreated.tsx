"use client";

import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function AccountCreated() {
  return (
    <div className="flex h-[713px] w-full max-w-[1214px] flex-col items-center rounded-[10px] bg-white">
      <div className="pb-[90px] pt-[50px] text-[40px] font-bold">
        Account Created
      </div>

      <div className="flex flex-col gap-[60px]">
        <div className="font-regular flex items-center justify-center text-[24px]">
          <Image
            src={"/img/login-register/blue-valid-icon.svg"}
            width={150}
            height={150}
            alt="BlueValidIcon"
          />
        </div>
        <div className="font-regular flex flex-col items-center justify-center text-center text-[24px]">
          <div>Congratulations!</div>
          <div>Your account has been created successfully.</div>
          <div>
            You will need to log in to your account to enjoy our website.
          </div>
        </div>
        <div className="font-regular flex flex-col items-center justify-center text-[24px]">
          <Link href="/login">
            <button className="h-[60px] w-[510px] rounded-[10px] bg-ci-blue font-bold text-white">
              Let&apos;s Log in with your account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
