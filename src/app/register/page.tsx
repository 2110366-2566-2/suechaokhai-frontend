"use client";

import { FormEvent, useRef, useState } from "react";
import RegisterPage1 from "@/components/RegisterPage1";
import PersonalInformation from "@/components/PersonalInformation";
import AccountCreated from "@/components/AccountCreated";
import FinancialPage from "@/components/FinancialPage";

export default function RegisterPage() {
  const [registerStage, changeRegState] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function test() {
    console.log(email);
    console.log(password);
    console.log(conPass);
    console.log(firstName);
    console.log(lastName);
    console.log(phoneNumber);
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
            changeRegState={nextStage}
          />
        </div>
      ) : null}
      {registerStage === 2 ? (
        <div>
          <FinancialPage changeRegState={changeRegState} />
        </div>
      ) : null}
      {registerStage === 3 ? (
        <div>
          <AccountCreated changeRegState={changeRegState} />
        </div>
      ) : null}

      {/* เป็นปุ่มไว้เทส function เฉยๆไม่มีไร */}
      <div className="absolute left-[350px] flex flex-col gap-4">
        <button
          className="h-[60px] w-[60px] rounded-[10px] bg-[#3AAEEF] font-bold text-white"
          onClick={() => nextStage(1)}
        >
          Next Page
        </button>
        <button
          className="h-[60px] w-[60px] rounded-[10px] bg-[#3AAEEF] font-bold text-white"
          onClick={test}
        >
          test
        </button>
      </div>
    </div>
  );
}
