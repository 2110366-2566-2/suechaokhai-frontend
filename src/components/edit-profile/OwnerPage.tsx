import { useState, useRef, FormEvent } from "react";
import FileUploadField from "../register-login/FileUploadField";
import Image from "next/Image";
import TextField from "@/components/register-login/TextField";
const OwnerPage = () => {
  const id = useRef("");
  const file = useRef("");
  const [isIdValid, setIsIdValid] = useState(true);
  const [isIdEntered, setIsIdEntered] = useState(false);
  const [formattedId, setFormattedId] = useState("");

  const validateId = () => {
    if (id.current) {
      const idRegex = /^[0-9]{13}$/;
      const enteredId = id.current;
      const isValid = idRegex.test(enteredId);
      setIsIdValid(isValid);

      return isValid;
    }
    return false;
  };

  const handleVerify = (e: FormEvent) => {
    setIsIdEntered(true);
    e.preventDefault();
    const isIdValid = validateId();

    if (isIdValid) {
      console.log("ID is valid:", id.current);
    } else {
      console.log("Invalid ID number.", id.current);
    }
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedId = formatId(inputValue);
    console.log(inputValue.length);
    if (inputValue.length <= 17) {
      id.current = inputValue.replace(/\s/g, "");
    }
    setFormattedId(formattedId);
  };

  function formatId(e: String): string {
    const currentId = e.replace(/[^\d]/g, "");
    const idLength = currentId.length;

    if (idLength <= 1) {
      return currentId;
    } else if (idLength <= 5) {
      return `${currentId.slice(0, 1)} ${currentId.slice(1, 5)}`;
    } else if (idLength <= 10) {
      return `${currentId.slice(0, 1)} ${currentId.slice(1, 5)} ${currentId.slice(5, 10)}`;
    } else if (idLength <= 12) {
      return `${currentId.slice(0, 1)} ${currentId.slice(1, 5)} ${currentId.slice(5, 10)} ${currentId.slice(10, 12)}`;
    } else {
      return `${currentId.slice(0, 1)} ${currentId.slice(1, 5)} ${currentId.slice(5, 10)} ${currentId.slice(10, 12)} ${currentId.slice(12, 13)}`;
    }
  }

  return (
    <div className="flex h-[695px] w-[800px] flex-col items-center rounded-[10px] bg-white p-8">
      <div className="pb-[71px] pt-[19px] text-[40px] font-bold">
        Owner Verification
      </div>
      <div className="pb-[71px]">
        <FileUploadField
          label="Upload Citizen Card Photo"
          maxFileSize={512000}
          minFileSize={1024}
        />
        <div className="">
          <TextField
            label="Citizen ID"
            placeholder="Enter citizen ID"
            value={formattedId}
            onChange={handleIdChange}
          />
          {!isIdValid && isIdEntered && (
            <div className="flex items-center">
              <Image
                alt="Invalid"
                src="/img/InvalidIcon.png"
                height={20}
                width={20}
                style={{ maxHeight: "20px", maxWidth: "20px" }}
                className=""
              />
              <div className="px-1 text-red-500">
                Please enter a valid ID number.
              </div>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={handleVerify}
        className="h-[50px] w-[510px] rounded-[10px] bg-[#3AAEEF] text-[20px] font-semibold text-white"
      >
        Verify
      </button>
    </div>
  );
};
export default OwnerPage;
