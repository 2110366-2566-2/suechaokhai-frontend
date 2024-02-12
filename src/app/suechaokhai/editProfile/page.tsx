"use client";

import { FormEvent, useRef, useState } from "react";
import PropertyNavigationBar from "@/components/propertyDesc/PropertyNavigationBar";
import TextBox from "@/components/register-login/TextField";
import Image from "next/image";
import NumberTextField from "@/components/editProfile/NumberTextField";
import UppercaseTextField from "@/components/register-login/UppercaseTextField";
import ExpiryDateInput from "@/components/editProfile/ExpiredDateTextField";
import Dropdown from "@/components/editProfile/DropDown";

export default function editProfilePage() {
  const firstNameInitial = "Praeploy";
  const lastNameInitial = "HewKhaow";
  const phoneNumberInitial = "0999999999";

  const [firstName, setFirstName] = useState(firstNameInitial);
  const [lastName, setLastName] = useState(lastNameInitial);
  const [phoneNumber, setPhoneNumber] = useState(
    formatPhoneNumber(phoneNumberInitial)
  );

  function initial(phoneNumber: string) {
    formatPhoneNumber(phoneNumber);
  }

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

  const hiddenFileInput = useRef(null);

  function handleClick() {
    if (hiddenFileInput.current != null) {
      hiddenFileInput.current.click();
    }
  }

  function resetInformation() {
    setFirstName(firstNameInitial);
    setLastName(lastNameInitial);
    setPhoneNumber(formatPhoneNumber(phoneNumberInitial));
  }

  function userReg1(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCVV] = useState("");
  const [bank, setBank] = useState("");
  const [banknum, setBanknum] = useState("");

  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10",
  ];

  const handleSelect = (option: any) => {
    setBank(option);
  };

  function validateInformation() {
    return (
      name !== "" &&
      card !== "" &&
      card.length == 19 &&
      month !== "" &&
      month.length == 2 &&
      [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ].includes(month) &&
      year !== "" &&
      year.length == 2 &&
      cvv !== "" &&
      cvv.length == 3 &&
      bank !== "" &&
      banknum !== "" &&
      banknum.length == 13
    );
  }

  function submit() {
    // TODO: submit to backend
    console.log("TODO: submit to backend");
  }

  return (
    <div onLoad={() => initial(phoneNumber)}>
      <div className="flex">
        {/* column 1 */}
        <div className="flex flex-col items-center pl-[100px] pt-[40px] ">
          <h1 className="text-[40px] font-bold">Edit Profile</h1>
          {/* Profile Picture */}
          <Image
            src="/img/ProfilePhoto_square.png"
            alt="profilePic"
            width={220}
            height={220}
            className="pt-[40px]"
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
        </div>

        {/* column 2 */}
        <div className="justify-center pl-[100px] pt-[150px]">
          <div className="pb-[25px] text-[35px] font-bold">
            Personal Information
          </div>
          <form className="pl-[10px] text-left text-[20px]" onSubmit={userReg1}>
            <div className="flex">
              <div className="flex-col">
                <div className="flex flex-col gap-[22px] pt-[22px]">
                  <TextBox
                    label="First Name"
                    placeholder="Enter your first name"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setFirstName(e.target.value);
                    }}
                    value={firstName}
                  ></TextBox>
                </div>
                <div className="flex flex-col gap-[22px] pt-[22px]">
                  <TextBox
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    onChange={(e) => {
                      let formattedPhoneNumber = formatPhoneNumber(
                        e.target.value
                      );
                      setPhoneNumber(formattedPhoneNumber);
                    }}
                    value={phoneNumber}
                  ></TextBox>
                </div>
              </div>
              <div className="flex flex-col gap-[22px] pl-[20px] pt-[22px]">
                <TextBox
                  label="Last Name"
                  placeholder="Enter your last name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  value={lastName}
                ></TextBox>
              </div>
            </div>
          </form>

          <div
            className="pb-[9px] pt-[19px] text-[35px] font-bold"
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              marginTop: "30px",
            }}
          >
            Financial Information
          </div>
          <div className="pl-[10px]">
            <div>
              <div className="pb-[9px] pt-[19px] text-[30px] font-semibold">
                Credit Card
              </div>
              <div className="flex gap-[15px]">
                <div className="flex-col">
                  <UppercaseTextField
                    label="Cardholder Name"
                    placeholder="Enter cardholder name"
                    uppercase={true}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <div className="flex gap-[50px] pt-[20px]">
                    <ExpiryDateInput
                      label="Expired Date"
                      setMonth={setMonth}
                      setYear={setYear}
                    />
                    <NumberTextField
                      label="Security Code"
                      placeholder="CVV"
                      maxLength={3}
                      spaceIndices={[]}
                      className="h-[50px] w-[70px] rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700"
                      setNum={setCVV}
                    />
                  </div>
                </div>

                <NumberTextField
                  label="Card Number"
                  placeholder="Enter card number"
                  maxLength={19}
                  spaceIndices={[4, 8, 12]}
                  setNum={setCard}
                />
              </div>
            </div>
            <div>
              <div className="pb-[9px] pt-[19px] text-[30px] font-semibold">
                Bank Account
              </div>
              <div className="flex flex-row gap-[15px]">
                <Dropdown
                  label="Bank Name"
                  options={options}
                  onSelect={handleSelect}
                />
                <NumberTextField
                  label="Bank Account Number"
                  placeholder="Enter your bank account number"
                  maxLength={13}
                  spaceIndices={[3, 4, 9]}
                  setNum={setBanknum}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end space-x-[20px] p-[40px]">
            <button
              onClick={resetInformation}
              className="h-[50px] w-[150px] rounded-[10px] bg-[#B3B3B3] font-bold text-white"
            >
              Cancel
            </button>
            {validateInformation() ? (
              <button
                className="h-[50px] w-[150px] rounded-[10px] bg-[#3AAEEF] font-bold text-white"
                onClick={submit}
              >
                Save
              </button>
            ) : (
              <button
                className="h-[50px] w-[150px] rounded-[10px] bg-[#D9D9D9] font-bold text-white"
                disabled={true} //Gray Button
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
