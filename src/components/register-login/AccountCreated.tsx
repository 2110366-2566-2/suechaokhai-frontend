"use client";

import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function AccountCreated() {
  return (
    <div className="flex max-h-[713px] w-full max-w-[1214px] flex-col items-center justify-center gap-y-6 rounded-[10px] bg-white px-20 py-16">
      <div className=" text-3xl font-bold">Account Created</div>

      <div className="flex flex-col gap-y-10">
        <div className="font-regular flex items-center justify-center">
          <Image
            src={"/img/login-register/blue-valid-icon.svg"}
            width={150}
            height={150}
            alt="BlueValidIcon"
          />
        </div>
        <div className="font-regular flex flex-col items-center justify-center text-center text-lg">
          <div>Congratulations!</div>
          <div>Your account has been created successfully.</div>
          <div>
            You will need to log in to your account to enjoy our website.
          </div>
        </div>
        <div className="font-regular flex flex-col items-center justify-center text-lg">
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
