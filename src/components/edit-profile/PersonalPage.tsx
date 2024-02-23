import Image from "next/image";
import getCurrentUser from "@/services/getCurrentUser";
import UserData from "../models/UserData";
import TextBox from "../register-login/TextField";
import updateCurrentUser from "@/services/updateCurrentUser";
import { useRef, useState, useEffect, FormEvent } from "react";
import { CheckModal } from "./CheckModal";
import { NotSavedPopUp } from "./NotSavedPopUp";
const PersonalPage = ({
  setIsChangesExist,
}: {
  setIsChangesExist: Function;
}) => {
  const file = useRef(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [profileUrl, setProfileUrl] = useState<string>(
    "/img/login-register/ProfilePhoto_square.png"
  );
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [img, setImg] = useState<any>();
  const [changed, setChanged] = useState(0);
  const handleChange = () => {
    console.log(firstName, lastName, phoneNumber);
    if (
      firstName != userData?.first_name ||
      lastName != userData.last_name ||
      phoneNumber != userData.phone_number ||
      profileUrl != userData.profile_image_url
    ) {
      setChanged(1);
      setIsChangesExist(true);
    } else {
      setChanged(0);
      setIsChangesExist(false);
    }
  };
  const handleClose = () => {
    setIsSaved(false);
    console.log("close");
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setChanged(1);
    setImg(file);
    if (file != undefined) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };
  const handleCancel = () => {
    setFirstName(userData!.first_name);
    setLastName(userData!.last_name);
    setPhoneNumber(userData!.phone_number);
    setProfileUrl(userData!.profile_image_url);
  };
  const fetchUser = async () => {
    try {
      const data = await getCurrentUser();
      setUserData(data);
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setPhoneNumber(data.phone_number);
      setProfileUrl(data.profile_image_url);
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
  useEffect(() => {
    handleChange();
  }, [firstName, lastName, phoneNumber, img]);
  useEffect(() => {
    if (isSaved) {
      const timer = setTimeout(() => {
        setIsSaved(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSaved]);
  const handleSave = () => {
    setIsSaved(true);
    const updatedUserData = new FormData();
    updatedUserData.append("first_name", firstName);
    updatedUserData.append("last_name", lastName);
    updatedUserData.append("phone_number", phoneNumber.replace(/[^\d]/g, ""));
    updatedUserData.append("profile_image", img);
    // updateCurrentUser(updatedUserData).then(() => window.location.reload());
    updateCurrentUser(updatedUserData);
  };
  function personalInfo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <div className="">
      <div className="ml-12 text-[36px] font-bold">Personal Information</div>
      <div className="mt-10 flex flex-col items-center 2xl:ml-40 2xl:flex-row">
        <div className="flex flex-col items-center">
          <div className="aspect-square w-40 overflow-hidden rounded-full ">
            <Image
              src={profileUrl}
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
            <div className="mt-4 cursor-pointer text-[20px] font-bold text-ci-blue hover:opacity-75">
              Upload Your Photo
            </div>
          </label>
        </div>
        <form onSubmit={personalInfo} className="ml-0 space-y-5 2xl:ml-48">
          <TextBox
            label="First Name"
            placeholder="Enter Your First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            className="w-[300px] md:w-[400px]"
          />
          <TextBox
            label="Last Name"
            placeholder="Enter Your Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              console.log(lastName);
            }}
            className="w-[300px] md:w-[400px]"
          />
          <TextBox
            label="Phone Number"
            placeholder="Enter Your Phone Number"
            value={formatPhoneNumber(phoneNumber)}
            onChange={(e) => {
              setPhoneNumber(formatPhoneNumber(e.target.value));
              console.log(phoneNumber);
            }}
            className="w-[300px] md:w-[400px]"
          />
        </form>
      </div>
      <div className="mt-40 flex select-none flex-row justify-end space-x-5">
        <button
          className={`rounded-xl bg-${changed ? "ci-gray" : "ci-dark-gray "} px-4 py-2 text-[20px] font-bold text-white`}
          onClick={handleCancel}
          disabled={!changed}
        >
          Cancel
        </button>
        <button
          className={`rounded-xl bg-${changed ? "ci-blue" : "ci-dark-gray "} px-4 py-2 text-[20px] font-bold text-white`}
          onClick={handleSave}
          disabled={!changed}
          type="submit"
        >
          Saves
        </button>
      </div>
      <CheckModal
        className={`${isSaved ? "translate-x-0" : "translate-x-[150%]"}`}
        handleClose={handleClose}
        header={"Saved"}
        description={"Your changes have been successfully saved."}
      />
    </div>
  );
};
export default PersonalPage;
