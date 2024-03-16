import { FormEvent, SetStateAction, useEffect, useRef, useState } from "react";
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
  setImg,
  register,
}: {
  firsttmp: string;
  lasttmp: string;
  numtemp: string;
  changeRegState: Function;
  setFirstName: Function;
  setLastName: Function;
  setPhoneNumber: Function;
  setImg: Function;
  register: Function;
}) {
  const [nextColor, setNextColor] = useState("ci-grey");
  const firstName = useRef("");
  const lastName = useRef("");
  const phoneNumber = useRef("");

  const [src, setSrc] = useState("/img/login-register/prof_pic.png");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.select();
  }, []);

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
    } else if (phoneLength <= 6) {
      phoneNumber.current = `${currentPhoneNumber.slice(0, 3)} ${currentPhoneNumber.slice(3)}`;
    } else {
      phoneNumber.current = `${currentPhoneNumber.slice(0, 3)} ${currentPhoneNumber.slice(3, 6)} ${currentPhoneNumber.slice(6, 10)}`;
    }

    setPhoneNumber(phoneNumber.current);

    if (phoneLength >= 10) {
      setNextColor("ci-blue");
    } else {
      setNextColor("ci-gray");
    }
  }

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (hiddenFileInput.current != null) {
      hiddenFileInput.current.click();
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setImg(e.target.files[0]);
      setSrc(URL.createObjectURL(e.target.files[0]));
    }
  };

  async function nextPageStatus() {
    if (nextColor == "ci-blue") {
      const reg = await register();
      console.log(reg);
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
      <div className="h-[167px] w-[167px] overflow-hidden rounded-full">
        <Image
          src={src}
          alt="Your Image"
          width={167}
          height={167}
          layout="responsive"
        />
      </div>

      <form className="px-[67px] text-left text-[20px]" onSubmit={userReg1}>
        <div className="flex flex-col items-center justify-center pt-[12px] text-[20px] font-bold text-ci-blue">
          <input
            type="file"
            accept="image/*"
            id="profile_img"
            name="profile_img"
            ref={hiddenFileInput}
            style={{ display: "none" }}
            onChange={handleChange}
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
        <div className="flex flex-col gap-[22px] pt-[22px]">
          <TextBox
            label="First Name"
            placeholder="Enter your first name"
            onChange={(e) => {
              firstName.current = e.target.value;
              setFirstName(firstName.current);
            }}
            value={firsttmp}
            ref={inputRef}
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
            className="h-[60px] w-[190px] rounded-[10px] bg-ci-dark-gray text-[24px] font-bold text-white"
          >
            Back
          </button>
        </div>
        <div>
          <button
            type="submit"
            onClick={nextPageStatus}
            className={`h-[60px] w-[190px] rounded-[10px] bg-${nextColor} text-[24px] font-bold text-white`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}