import { useState, useRef, FormEvent, ChangeEvent, useEffect } from "react";
import FileUploadField from "../register-login/FileUploadField";
import Image from "next/image";
import TextField from "@/components/register-login/TextField";
import getCurrentUser from "@/services/getCurrentUser";
import updateCurrentUser from "@/services/updateCurrentUser";
import { BlueValidIcon, InvalidIcon } from "../ui/icon";
const OwnerPage = () => {
  const id = useRef("");
  const file = useRef(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isIdValid, setIsIdValid] = useState(true);
  const [isIdEntered, setIsIdEntered] = useState(false);
  const [formattedId, setFormattedId] = useState("");
  const [idCardUrl, setIdCardUrl] = useState("");
  const [citizenId, setCitizenId] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [changed, setChanged] = useState(0);
  const fetchUser = async () => {
    try {
      const data = await getCurrentUser();
      // setIsVerified(data.is_verified);
      console.log("current ID:", data.citizen_id);
      console.log("verify?:", data.is_verified);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchUser();
  }),
    [];
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setChanged(1);
    setImg(file);
    if (file != undefined) {
      setProfileUrl(URL.createObjectURL(file));
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
      const formData = new FormData();
      setIsVerified(true);
      // formData.append("is_verified", "true" );
      formData.append("is_verified", "false");
      formData.append("citizen_id", citizenId);
      updateCurrentUser(formData);
    } else {
      console.log("Invalid ID number.", id.current);
    }
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedId = formatId(inputValue);
    console.log(citizenId);
    if (inputValue.length <= 17) {
      id.current = inputValue.replace(/\s/g, "");
    }
    setFormattedId(formattedId);
    setCitizenId(formattedId.replace(/[^\d]/g, ""));
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

  return (
    <div className="">
      {isVerified ? (
        <div className="ml-[50%] flex  w-full flex-col items-center justify-center space-y-12">
          <div className=" pt-4 text-[40px] font-bold">Owner Verification</div>
          <BlueValidIcon size={150} />
          <div className="flex flex-col items-center justify-center text-[24]">
            <div>You account has been verified.</div>
            <div>You are an owner now.</div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className=" pt-4 text-[40px] font-bold">Owner Verification</div>
          <div className="flex flex-col justify-start space-y-8 overflow-hidden rounded-lg">
            <Image
              alt="idCard"
              src={idCard}
              height={0}
              width={0}
              style={{ height: "280px", width: "auto  " }}
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
              <div className="mt-8 flex h-[50px] w-[510px] cursor-pointer items-center justify-center rounded-lg border border-[#B3B3B3] bg-ci-blue p-2 text-[24px] font-bold text-white">
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
                  <InvalidIcon size={20} />
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
      )}
    </div>
  );
};
export default OwnerPage;
