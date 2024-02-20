"use client";

import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function AccountCreated({
  changeRegState,
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
            Account Created
          </div>

          <div className="flex flex-col gap-[60px]">
            <div
              className="font-regular text-[24px]"
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
              }}
            >
              <Image
                src={"/img/login-register/blue-valid-icon.svg"}
                width={150}
                height={150}
                alt="BlueValidIcon"
              />
            </div>
            <div
              className="font-regular text-[24px]"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ alignSelf: "center", marginBottom: "1px" }}>
                Congratulations!
              </div>
              <div style={{ alignSelf: "center", marginBottom: "1px" }}>
                Your account has been created successfully.
              </div>
              <div style={{ alignSelf: "center", marginBottom: "1px" }}>
                You will need to log in to your account to enjoy our website.
              </div>
            </div>
            <div
              className="font-regular text-[24px]"
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
              }}
            >
              <Link href="/login">
                <button className="h-[60px] w-[510px] rounded-[10px] bg-ci-blue font-bold text-white">
                  Let's Log in with your account
                </button>
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
