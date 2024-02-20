import Image from "next/Image";
import getCurrentUser from "@/services/getCurrentUser";
import UserData from "../models/UserData";
import TextBox from "../register-login/TextField";
import updateCurrentUser from "@/services/updateCurrentUser";
import { useRef, useState, ChangeEvent, useEffect } from "react";
const PersonalPage = () => {
  const file = useRef(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [img, setImg] = useState<any>();
  const [userId, setUserId] = useState("");
  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setImg(e.target.files[0]);
    setProfileUrl(URL.createObjectURL(e.target.files[0]));
  };
  const fetchUser = async () => {
    try {
      const data = await getCurrentUser();
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setPhoneNumber(data.phone_number);
      setProfileUrl(URL.createObjectURL(data.profile_image_url));
      setUserId(data.UserId);
      console.log(data.profile_image_url);
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
  const handleSave = () => {
    const updatedUserData = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber.replace(/[^\d]/g, ""),
      profile_image: profileUrl,
    };
    updateCurrentUser(updatedUserData, userId).then(() =>
      window.location.reload()
    );
  };
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
      <div className="mt-40 flex flex-row justify-end">
        <button
          className="rounded-xl bg-ci-blue px-4 py-2 text-[20px] font-bold text-white"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default PersonalPage;
