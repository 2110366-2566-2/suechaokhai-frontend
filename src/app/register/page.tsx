"use client";

import TextField from "@/components/TextField";
import { FormEvent, useRef, useState } from "react";
import Image from "../../../node_modules/next/image";
import RegisterPage1 from "@/components/RegisterPage1";
import PersonalInformation from "@/components/PersonalInformation";

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
    changeRegState((registerStage + 1) % 3);
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#B8B8B8]">
      {registerStage === 0 ? (
        <RegisterPage1
          setEmail={setEmail}
          setPassword={setPassword}
          setConPass={setConPass}
          changeRegState={changeRegState}
        />
      ) : null}

      {registerStage === 1 ? (
        <div>
          <PersonalInformation
            setFirstName={setFirstName}
            setLastName={setLastName}
            setPhoneNumber={setPhoneNumber}
            changeRegState={nextStage}
          />
        </div>
      ) : null}
      {registerStage === 2 ? <div>Stage 3</div> : null}
      {registerStage === 3 ? <div>Stage 4</div> : null}

      {/* เป็นปุ่มไว้เทส function เฉยๆไม่มีไร */}
      <div className="absolute left-[350px] flex flex-col gap-4">
        <button
          className="h-[60px] w-[60px] rounded-[10px] bg-[#3AAEEF] font-bold text-white"
          onClick={nextStage}
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
