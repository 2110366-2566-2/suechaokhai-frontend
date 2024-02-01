"use client";

import TextField from "@/components/TextField";
import FileUploadField from "@/components/FileUploadField";
import { FormEvent, useRef, useState } from "react";

export default function LoginPage() {
  const id = useRef("");
  const file = useRef("");
  const [isIdValid, setIsIdValid] = useState(true);


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
