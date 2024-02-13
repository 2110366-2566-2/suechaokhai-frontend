"use client";
import Image from "next/image";
import TextField from "./TextField";
import { FormEvent, useEffect, useRef, useState } from "react";
import PasswordField from "./PasswordField";
import Link from "next/link";
import { CircularProgress } from "@mui/material";

export default function RegisterPage1({
  emailtmp,
  passtmp,
  conpasstmp,
  setEmail,
  setPassword,
  setConPass,
  changeRegState,
  isGoogle,
  user,
}: {
  emailtmp: string;
  passtmp: string;
  conpasstmp: string;
  setEmail: Function;
  setPassword: Function;
  setConPass: Function;
  changeRegState: Function;
  isGoogle: boolean;
  user: undefined;
}) {
  const [color1, changeColor1] = useState("#B3B3B3");
  const [passValid, changeValid] = useState(0);
  const [color2, changeColor2] = useState("#B3B3B3");
  const [passValid2, changeValid2] = useState(0);
  const [isValidColor, setValidColor] = useState("#D9D9D9");
  const [isInfoValid, setInfoValid] = useState(0);

  const email = useRef("");
  const password = useRef("");
  const conPass = useRef("");

  async function initial(emailtmp: string, pass: string, conpass: string) {
    if (!isGoogle) {
      email.current = emailtmp;
      password.current = pass;
      conPass.current = conpass;

      isPassValid(password.current);
      isSame(conPass.current);
    } else {
      setInfoValid(1);
      setValidColor("#3AAEEF");
    }
  }

  function isPassValid(password: string) {
    if (password.length === 0) {
      changeColor1("#B3B3B3");
      changeValid(0);
      setValidColor("#D9D9D9");
      setInfoValid(0);
    } else {
      if (!/\d/.test(password) || !/[a-zA-Z]/.test(password) || password.length < 8) {
        changeColor1("#D22F42");
        changeValid(1);
        setValidColor("#D9D9D9");
        setInfoValid(0);
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
      setValidColor("#D9D9D9");
      setInfoValid(0);
    } else {
      if (password2 !== password.current) {
        changeColor2("#D22F42");
        changeValid2(1);
        setValidColor("#D9D9D9");
        setInfoValid(0);
      } else {
        changeColor2("#30AD53");
        changeValid2(2);
        if (email.current.length !== 0) {
          setInfoValid(1);
          setValidColor("#3AAEEF");
        }
      }
    }
  }

  function userReg1(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function nextStage() {
    if (isInfoValid == 1) {
      changeRegState(1);
    }
  }

  return (
    <div
      onLoad={() => initial(emailtmp, passtmp, conpasstmp)}
      className="flex h-[830px] w-[650px] flex-col items-center rounded-[10px] bg-white"
    >
      <Image
        src="/img/compIcon.png"
        alt="test"
        width={80}
        height={80}
        className="pt-[41px]"
      ></Image>
      <div className="pb-[9px] pt-[19px] text-[40px] font-bold">Register</div>
      <form className="px-[70px] text-left text-[20px]" onSubmit={userReg1}>
        <div>
          {user ? (
            <div>
              {isGoogle ? (
                <div className="flex flex-col items-center justify-center py-[40px]">
                  <Image
                    src="/img/google2.png"
                    alt={"google"}
                    width={220}
                    height={220}
                  />
                  <p className="py-[20px]">
                    You have register with Google account
                  </p>
                  <p className="text-[#3AAEEF]">{emailtmp}</p>
                </div>
              ) : (
                <div className="flex flex-col gap-[18px]">
                  <TextField
                    label="Email"
                    placeholder="Enter your email here"
                    type="email"
                    required
                    onChange={(e) => {
                      email.current = e.target.value;
                      setEmail(email.current);
                    }}
                    value={emailtmp}
                    readOnly={isGoogle}
                  />
                  <div>
                    <PasswordField
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      onChange={(e) => {
                        password.current = e.target.value;
                        setPassword(password.current);
                        isPassValid(password.current);
                        isSame(conPass.current);
                      }}
                      style={{ borderColor: color1 }}
                      value={passtmp}
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
                        Password must be 8 or more characters and contain{" "}
                        <br></br>
                        at least 1 number
                      </div>
                    </div>
                  </div>
                  <PasswordField
                    label="Confirm Password"
                    placeholder="Re-enter your password"
                    type="password"
                    onChange={(e) => {
                      conPass.current = e.target.value;
                      setConPass(conPass.current);
                      isSame(conPass.current);
                    }}
                    style={{ borderColor: color2 }}
                    value={conpasstmp}
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
                        <div style={{ color: color2 }}>
                          Please confirm password
                        </div>
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
                        <div style={{ color: color2 }}>
                          Password do not match
                        </div>
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
              )}
            </div>
          ) : null}
        </div>

        {user ? (
          <div className="pt-[45px]">
            <button
              className={`h-[60px] w-[510px] rounded-[10px] bg-[${isValidColor}] font-bold text-white`}
              onClick={nextStage}
            >
              Confirm
            </button>
          </div>
        ) : null}
      </form>

      {user ? (
        <div className="flex flex-row items-center justify-center pt-[30px] text-[20px]">
          <div className="">Already have an account?</div>
          <Link href="/login">
            <div className="pl-[16px] text-[#3AAEEF] ">Login</div>
          </Link>
        </div>
      ) : null}

      {!user ? <CircularProgress className="absolute mt-[400px]" /> : null}
    </div>
  );
}
