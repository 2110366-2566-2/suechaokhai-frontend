import Image from "next/Image";
import getCurrentUser from "@/services/getCurrentUser";
import UserData from "../models/UserData";
import TextBox from "../register-login/TextField";
import { useRef, useState, ChangeEvent, useEffect } from "react";
const PersonalPage = () => {
  const file = useRef(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setUploadedFile(file || null);
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        setProfileUrl(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  const fetchUser = async () => {
    try {
      const data = await getCurrentUser();
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setPhoneNumber(data.phone_number);
      setProfileUrl(data.profile_image_url);
      console.log(profileUrl);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  function formatPhoneNumber(phoneNumber: string) {
    const currentPhoneNumber = phoneNumber.replace(/[^\d]/g, "");
    const phoneLength = currentPhoneNumber.length;

    if (phoneLength <= 3) {
      return currentPhoneNumber;
    } else if (phoneLength <= 6) {
      return `${currentPhoneNumber.slice(0, 3)} ${currentPhoneNumber.slice(3)}`;
    } else {
      return `${currentPhoneNumber.slice(0, 3)} ${currentPhoneNumber.slice(3, 6)} ${currentPhoneNumber.slice(6, 10)}`;
    }
  }
  useEffect(() => {
    fetchUser();
  }, []);
  const profileIcon =
    profileUrl == "" ? "/img/ProfilePhoto_square.png" : profileUrl;
  // const profileIcon = "/img/ProfilePhoto_square.png";
  const handleSave = () => {};
  return (
    <div className="">
      <div className="ml-10 text-[40px] font-bold">Personal Information</div>
      <div className="ml-40 mt-10 flex flex-row">
        <div className="flex flex-col items-center">
          <div className="aspect-square w-40 overflow-hidden rounded-full ">
            <Image
              src={profileIcon}
              alt="profilePic"
              width={160}
              height={160}
              draggable={false}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <label>
            <input
              type="file"
              accept="image/*"
              ref={file}
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="mt-4 cursor-pointer text-[20px] font-bold text-ci-blue">
              Upload Your Photo
            </div>
          </label>
        </div>
        <form onSubmit={handleSave} className="ml-48 space-y-5">
          <TextBox
            label="First Name"
            placeholder="Enter Your First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              console.log(firstName);
            }}
          />
          <TextBox
            label="Last Name"
            placeholder="Enter Your Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              console.log(lastName);
            }}
          />
          <TextBox
            label="Phone Number"
            placeholder="Enter Your Phone Number"
            value={formatPhoneNumber(phoneNumber)}
            onChange={(e) => {
              setPhoneNumber(formatPhoneNumber(e.target.value));
              console.log(phoneNumber);
            }}
          />
        </form>
      </div>
    </div>
  );
};
export default PersonalPage;
