"use client";

import TextField from "@/components/TextField";
import FileUploadField from "@/components/FileUploadField";
import { FormEvent, useRef, useState } from "react";
import Image from "next/image"

export default function LoginPage() {
  const id = useRef("");
  const file = useRef("");
  const [isIdValid, setIsIdValid] = useState(true);
  const [isIdEntered, setIsIdEntered] = useState(false);


  const validateId = () => {
    if(id.current){
      const idRegex = /^[0-9]{13}$/;
      const enteredId = id.current;
      const isValid = idRegex.test(enteredId);
      setIsIdValid(isValid);
  
      return isValid;
    }
    return false
  };

  const handleVerify = (e: FormEvent) => {
    setIsIdEntered(true);
    e.preventDefault();
    const isIdValid = validateId();

    if (isIdValid) {
      console.log("ID is valid:", id);
    } else {
      console.log("Invalid ID number.", id);
    }
  };


  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#B8B8B8] ">
      <div className="flex h-[695px] w-[800px] flex-col items-center rounded-[10px] bg-white p-8">
      <div className="pb-[71px] pt-[19px] text-[40px] font-bold">Verification</div>
        <div className="pb-[71px]">
          <TextField 
          label="ID card number" 
          placeholder="Enter your national ID no."
          onChange={(e) => (id.current = e.target.value)}/>
          {!isIdValid && isIdEntered &&(
            <div className="flex items-center">
              <Image
              alt="Invalid" 
              src="/img/InvalidIcon2.png"
              height={20}
              width={20}
              style={{ maxHeight: '20px', maxWidth: '20px' }}
              className=""/>
              <div className="text-red-500 px-1">Please enter a valid ID number.</div>
            </div>
          )}
        </div>
        <div className="pb-[71px]">
          <FileUploadField/>
        </div>
        <button 
        onClick={handleVerify}
        className="h-[50px] w-[510px] rounded-[10px] bg-[#3AAEEF] font-semibold text-white text-[20px]">
            Verify
        </button>
      </div>
    </div>
  );
}
