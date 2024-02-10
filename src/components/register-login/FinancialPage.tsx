"use client";

import NumberTextField from "@/components/register-login/NumberTextField";
import UppercaseTextField from "@/components/register-login/UppercaseTextField";
import ExpiryDateInput from "@/components/register-login/ExpiredDateTextField";
import Dropdown from "@/components/register-login/DropDown";
import React, { FormEvent, useRef, useState } from "react";
import { FinancialInfo } from "@/app/register/page";

export default function FinancialPage({
  changeRegState,
  setFinanceInfo,
  register,
}: {
  changeRegState: Function;
  setFinanceInfo: Function;
  register: Function;
}) {
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

  function userReg1(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function submit() {
    setFinanceInfo({
      name: name,
      card: card,
      month: month,
      year: year,
      cvv: cvv,
      bank: bank,
      bankNum: banknum,
    });
    register();
    changeRegState(3);
  }

  function skip() {
    setFinanceInfo({
      name: "",
      card: "",
      month: "",
      year: "",
      cvv: "",
      bank: "",
      bankNum: "",
    });
    changeRegState(3);
  }

  function back() {
    changeRegState(1);
  }

  return (
    <div
      className="flex h-[830px] w-[650px] flex-col items-center rounded-[10px] bg-white"
      style={{ overflowY: "scroll" }}
    >
      <form className="px-[50px] text-left text-[20px]" onSubmit={userReg1}>
        <div className="flex flex-col gap-[30px]">
          <div
            className="pb-[9px] pt-[19px] text-[40px] font-bold"
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              marginTop: "30px",
            }}
          >
            Financial Information
          </div>
          <div>
            <div className="pb-[9px] pt-[19px] text-[30px] font-semibold">
              Credit Card
            </div>
            <div className="flex flex-col gap-[15px]">
              <UppercaseTextField
                label="Cardholder Name"
                placeholder="Enter cardholder name"
                uppercase={true}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <NumberTextField
                label="Card Number"
                placeholder="Enter card number"
                maxLength={19}
                spaceIndices={[4, 8, 12]}
                setNum={setCard}
              />

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
          <div>
            <div className="pb-[9px] pt-[19px] text-[30px] font-semibold">
              Bank Account
            </div>

            <div className="flex flex-col gap-[15px]">
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
          <div className="flex justify-center">
            <button
              onClick={back}
              className="h-[50px] w-[150px] rounded-[10px] bg-[#B3B3B3] font-bold text-white"
            >
              Back
            </button>
            {name !== "" &&
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
            banknum.length == 13 ? (
              <button
                className="h-[50px] w-[150px] rounded-[10px] bg-[#3AAEEF] font-bold text-white"
                style={{ marginLeft: "135px" }} //Blue Button
                onClick={submit}
              >
                Done
              </button>
            ) : (
              <button
                className="h-[50px] w-[150px] rounded-[10px] bg-[#D9D9D9] font-bold text-white"
                style={{ marginLeft: "135px" }}
                disabled={true} //Gray Button
              >
                Done
              </button>
            )}
          </div>

          <div className="text-center text-[15px] font-normal">
            <div>This information is optional.</div>
            <div>You can add the information later.</div>
            <button
              className="mt-[10px] cursor-pointer pb-[20px] text-center text-[15px] font-normal text-[#3AAEEF]"
              onClick={skip}
            >
              Skip and Create an Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
