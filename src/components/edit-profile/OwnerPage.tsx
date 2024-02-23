import { useState, useRef, FormEvent, ChangeEvent } from "react";
import FileUploadField from "../register-login/FileUploadField";
import Image from "next/image";
import TextField from "@/components/register-login/TextField";
const OwnerPage = () => {
  const id = useRef("");
  const file = useRef(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isIdValid, setIsIdValid] = useState(true);
  const [isIdEntered, setIsIdEntered] = useState(false);
  const [formattedId, setFormattedId] = useState("");
  const [idCardUrl, setIdCardUrl] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setUploadedFile(file || null);
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        setIdCardUrl(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };
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
  const idCard = idCardUrl ? idCardUrl : "/img/edit-profile/citizen-card.svg";
  const invalidIcon = "/img/InvalidIcon.png";
  return (
    <div className="ml-10 flex flex-col items-center space-y-2">
      <div className=" pt-4 text-[40px] font-bold">Owner Verification</div>
      <div className="flex flex-col justify-center space-y-8 overflow-hidden rounded-lg">
        <Image
          alt="idCard"
          src={idCard}
          height={0}
          width={0}
          style={{ height: "280px", width: "auto" }}
          className=""
        />
        <label>
          <input
            type="file"
            accept="image/*"
            ref={file}
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="mt-8 flex cursor-pointer items-center justify-center rounded-lg border border-[#B3B3B3] bg-ci-blue p-2 text-[24px] font-bold text-white">
            Upload Citizen Card Photo
          </div>
        </label>
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
                src={invalidIcon}
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
