import { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import TextBox from "./TextField";

export default function PersonalInformation({
  firsttmp,
  lasttmp,
  numtemp,
  changeRegState,
  setFirstName,
  setLastName,
  setPhoneNumber,
}: {
  firsttmp: string;
  lasttmp: string;
  numtemp: string;
  changeRegState: Function;
  setFirstName: Function;
  setLastName: Function;
  setPhoneNumber: Function;
}) {
  const [nextColor, setNextColor] = useState("#D9D9D9");
  const firstName = useRef("");
  const lastName = useRef("");
  const phoneNumber = useRef("");

  function initial(fname: string, lname: string, pnum: string) {
    firstName.current = fname;
    lastName.current = lname;
    phoneNumber.current = pnum;
    formatPhoneNumber(pnum);
  }

  function formatPhoneNumber(phoneNum: String) {
    const currentPhoneNumber = phoneNum.replace(/[^\d]/g, "");
    const phoneLength = currentPhoneNumber.length;

    if (phoneLength <= 3) {
      phoneNumber.current = currentPhoneNumber;
      setPhoneNumber(phoneNumber.current);
    } else if (phoneLength <= 6) {
      phoneNumber.current = `${currentPhoneNumber.slice(0, 3)} ${currentPhoneNumber.slice(3)}`;
      setPhoneNumber(phoneNumber.current);
    } else {
      phoneNumber.current = `${currentPhoneNumber.slice(0, 3)} ${currentPhoneNumber.slice(3, 6)} ${currentPhoneNumber.slice(6, 10)}`;
      setPhoneNumber(phoneNumber.current);
    }

    if (phoneLength >= 10) {
      setNextColor("#3AAEEF");
    } else {
      setNextColor("#D9D9D9");
    }
  }

  const hiddenFileInput = useRef(null);

  function handleClick() {
    if (hiddenFileInput.current != null) {
      hiddenFileInput.current.click();
    }
  }

  function nextPageStatus() {
    if (nextColor == "#3AAEEF") {
      changeRegState(2);
    }
  }

  function back() {
    changeRegState(0);
  }

  function userReg1(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <div
      onLoad={() => initial(firsttmp, lasttmp, numtemp)}
      className="flex h-[830px] w-[650px] flex-col items-center rounded-[10px] bg-white"
    >
      <div className="pb-[25px] pt-[50px] text-[40px] font-bold">
        Personal Information
      </div>
      <Image
        src="/img/ProfilePhoto_square.png"
        alt="profilePic"
        width={220}
        height={220}
      ></Image>
      <div className="text-[20px] font-bold text-[#3AAEEF]">
        <input
          type="file"
          accept="image/*"
          ref={hiddenFileInput}
          style={{ display: "none" }}
        />
        <div
          onClick={() => {
            handleClick();
          }}
          style={{ cursor: "pointer" }}
        >
          Upload your photo
        </div>
      </div>
      <form className="px-[67px] text-left text-[20px]" onSubmit={userReg1}>
        <div className="flex flex-col gap-[22px] pt-[22px]">
          <TextBox
            label="First Name"
            placeholder="Enter your first name"
            onChange={(e) => {
              firstName.current = e.target.value;
              setFirstName(firstName.current);
            }}
            value={firsttmp}
          ></TextBox>
        </div>
        <div className="flex flex-col gap-[22px] pt-[22px]">
          <TextBox
            label="Last Name"
            placeholder="Enter your last name"
            onChange={(e) => {
              lastName.current = e.target.value;
              setLastName(lastName.current);
            }}
            value={lasttmp}
          ></TextBox>
        </div>
        <div className="flex flex-col gap-[22px] pt-[22px]">
          <TextBox
            label="Phone Number"
            placeholder="Enter your phone number"
            onChange={(e) => {
              formatPhoneNumber(e.target.value);
            }}
            value={numtemp}
          ></TextBox>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-x-[130px] pt-[50px]">
        <div>
          <button
            onClick={back}
            className="h-[60px] w-[190px] rounded-[10px] bg-[#B3B3B3] text-[24px] font-bold text-white"
          >
            Back
          </button>
        </div>
        <div>
          <button
            onClick={nextPageStatus}
            className={`h-[60px] w-[190px] rounded-[10px] bg-[${nextColor}] text-[24px] font-bold text-white`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
