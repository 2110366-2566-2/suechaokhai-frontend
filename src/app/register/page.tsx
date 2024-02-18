"use client";

import { useEffect, useState } from "react";
import RegisterPage1 from "@/components/register-login/RegisterPage1";
import PersonalInformation from "@/components/register-login/PersonalInformation";
import AccountCreated from "@/components/register-login/AccountCreated";
import FinancialPage from "@/components/register-login/FinancialPage";
import userRegister from "@/libs/userRegister";
import { redirect } from "next/navigation";
import getCurrentUserRegister from "@/libs/getCurrentUserRegister";

export interface PersonalInfo {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  img: any;
}

export default function RegisterPage() {
  const [registerStage, changeRegState] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [img, setImg] = useState();

  const [user, setUser] = useState();
  const [isGoogle, setIsGoogle] = useState(false);

  useEffect(() => {
    async function getUser() {
      try {
        const data = await getCurrentUserRegister();

        if (
          data.registered_type === "GOOGLE" &&
          data.session_type === "REGISTER"
        ) {
          setUser(data);
          console.log(data);
          setEmail(data.email);
          setIsGoogle(true);
        } else if (data.session_type === "LOGIN") {
          redirect("/");
        } else {
          setUser(Object);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getUser();
  }, []);

  const [finReg, setFinReg] = useState(null);
  const register = async () => {
    const userRegis = await userRegister({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      img: img,
    });
    console.log(userRegis);
    setFinReg(userRegis);
  };

  function test() {
    console.log(email);
    console.log(password);
    console.log(conPass);
    console.log(firstName);
    console.log(lastName);
    console.log(phoneNumber);
    console.log(img);
  }

  function nextStage() {
    changeRegState((registerStage + 1) % 4);
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#B8B8B8]">
      {registerStage === 0 ? (
        <RegisterPage1
          emailtmp={email}
          passtmp={password}
          conpasstmp={conPass}
          setEmail={setEmail}
          setPassword={setPassword}
          setConPass={setConPass}
          changeRegState={nextStage}
          isGoogle={isGoogle}
          user={user}
        />
      ) : null}

      {registerStage === 1 ? (
        <div>
          <PersonalInformation
            firsttmp={firstName}
            lasttmp={lastName}
            numtemp={phoneNumber}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setPhoneNumber={setPhoneNumber}
            changeRegState={changeRegState}
            setImg={setImg}
            register={register}
          />
        </div>
      ) : null}

      {registerStage === 2 ? (
        <div>
          <AccountCreated changeRegState={changeRegState} finReg={finReg} />
        </div>
      ) : null}
    </div>
  );
}
