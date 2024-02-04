"use client";

import TextField from "@/components/TextField";
import { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import RegisterPage1 from "@/components/RegisterPage1";
import AccountCreated from "@/components/AccountCreated";
import FinancialPage from "@/components/FinancialPage";

export default function RegisterPage() {
  const [registerStage, changeRegState] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");

  function test() {
    console.log(email);
    console.log(password);
    console.log(conPass);
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

      {registerStage === 1 ? <div>Stage 2</div> : null}
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
