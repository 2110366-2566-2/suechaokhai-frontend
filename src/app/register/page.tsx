"use client";

import TextField from "@/components/TextField";
import { FormEvent, useRef, useState } from "react";
import Image from "next/image";

export default function RegisterPage() {
  const [registerStage, changeRegState] = useState(0);

  const [color1, changeColor1] = useState("#B3B3B3");
  const [passValid, changeValid] = useState(0);
  const [color2, changeColor2] = useState("#B3B3B3");
  const [passValid2, changeValid2] = useState(0);

  const email = useRef("");
  const password = useRef("");
  const conPass = useRef("");

  function isPassValid(password: string) {
    if (password.length === 0) {
      changeColor1("#B3B3B3");
      changeValid(0);
    } else {
      if (!/[0-9]/.test(password) || password.length < 8) {
        changeColor1("#D22F42");
        changeValid(1);
      } else {
        changeColor1("#30AD53");
        changeValid(2);
      }
    }
  }

  function isSame(password2: string) {
    if (password2.length === 0) {
      changeColor2("#B3B3B3");
      changeValid2(0);
    } else {
      if (password2 !== password.current) {
        changeColor2("#D22F42");
        changeValid2(1);
      } else {
        changeColor2("#30AD53");
        changeValid2(2);
      }
    }
  }

  function userReg(event: FormEvent<HTMLFormElement>) {
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
        <div className="pb-[9px] pt-[19px] text-[40px] font-bold">Register</div>
        <form className="px-[70px] text-left text-[20px]" onSubmit={userReg}>
          <div className="flex flex-col gap-[22px]">
            <TextField
              label="Email"
              placeholder="Enter your email here"
              onChange={(e) => (email.current = e.target.value)}
            />

            <div>
              <TextField
                label="Password"
                placeholder="Enter your password"
                type="password"
                onChange={(e) => {
                  password.current = e.target.value;
                  isPassValid(password.current);
                  isSame(conPass.current);
                }}
                style={{ borderColor: color1 }}
              />

              <div className="flex flex-row gap-[7px] pt-[10px] text-[16px]">
                {passValid === 0 ? (
                  <Image
                    src="/img/NormalIcon.png"
                    width={16}
                    height={0}
                    alt={"state"}
                    style={{
                      objectFit: "contain",
                      alignContent: "flex-start",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  />
                ) : null}

                {passValid === 1 ? (
                  <Image
                    src="/img/InvalidIcon.png"
                    width={16}
                    height={0}
                    alt={"state"}
                    style={{
                      objectFit: "contain",
                      alignContent: "flex-start",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  />
                ) : null}

                {passValid === 2 ? (
                  <Image
                    src="/img/ValidIcon.png"
                    width={16}
                    height={0}
                    alt={"state"}
                    style={{
                      objectFit: "contain",
                      alignContent: "flex-start",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  />
                ) : null}

                <div style={{ color: color1 }}>
                  Password must be 8 or more characters and contain <br></br>
                  at least 1 number
                </div>
              </div>
            </div>
            <TextField
              label="Confirm Password"
              placeholder="Re-enter your password"
              type="password"
              onChange={(e) => {
                conPass.current = e.target.value;
                isSame(conPass.current);
              }}
              style={{ borderColor: color2 }}
            />
            <div className="flex flex-row text-[16px]">
              {passValid2 === 0 ? (
                <div className="flex flex-row gap-[7px]">
                  <Image
                    src="/img/NormalIcon.png"
                    width={16}
                    height={0}
                    alt={"state"}
                    style={{
                      objectFit: "contain",
                      alignContent: "flex-start",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  />
                  <div style={{ color: color2 }}>Please confirm password</div>
                </div>
              ) : null}
              {passValid2 === 1 ? (
                <div className="flex flex-row gap-[7px]">
                  <Image
                    src="/img/InvalidIcon.png"
                    width={16}
                    height={0}
                    alt={"state"}
                    style={{
                      objectFit: "contain",
                      alignContent: "flex-start",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  />
                  <div style={{ color: color2 }}>Password do not match</div>
                </div>
              ) : null}

              {passValid2 === 2 ? (
                <div className="flex flex-row gap-[7px]">
                  <Image
                    src="/img/ValidIcon.png"
                    width={16}
                    height={0}
                    alt={"state"}
                    style={{
                      objectFit: "contain",
                      alignContent: "flex-start",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  />
                  <div style={{ color: color2 }}>Password match</div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="pt-[45px]">
            <button className="h-[60px] w-[510px] rounded-[10px] bg-[#3AAEEF] font-bold text-white">
              Confirm
            </button>
          </div>
        </form>

        <div className="flex flex-row items-center justify-center pt-[14px] text-[20px]">
          <div className="">Already have an account?</div>
          <div className="pl-[16px] text-[#3AAEEF] ">Login</div>
        </div>
      </div>
    </div>
  );
}
