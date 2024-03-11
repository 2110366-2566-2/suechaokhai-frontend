import TextField from "@/components/register-login/TextField";
import NumberTextBox from "../register-login/NumberTextField";
import ExpiryDateInput from "../register-login/ExpiredDateTextField";
import { useState } from "react";
const AddCard = () => {
  const [CVV, setCVV] = useState("");
  const [color, setColor] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [card, setCard] = useState("");
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-20">
      <div className="flex flex-col items-center space-y-8 rounded-3xl bg-white px-12 py-5">
        <div className="text-[36px] font-bold">Add a Credit Card</div>
        <div className="flex flex-col justify-start space-y-2">
          <TextField
            label="Credit Card Nickname"
            placeholder="Enter Card Nickname"
            className="block h-12 w-[420px] rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700"
          />
          <TextField
            label="Cardholder Name"
            placeholder="Enter Cardholder Name"
            className="block h-12 w-[420px] rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700"
          />
          <NumberTextBox
            label="Card Number"
            placeholder="Enter Card Number"
            className="block h-12 w-[420px] rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700"
            maxLength={19}
            setNum={setCard}
            spaceIndices={[4, 8, 12]}
          />
          <ExpiryDateInput
            label="Expired Date"
            setMonth={setMonth}
            setYear={setYear}
          />
          <NumberTextBox
            label="Security Code"
            placeholder="CVV"
            maxLength={3}
            spaceIndices={[]}
            className=" w-14 rounded-lg border border-ci-dark-gray p-2 text-gray-700 "
            setNum={setCVV}
          />
          <div className="font-bold">Color:</div>
          <div className="flex flex-row space-x-2">
            <div
              className={`h-8 w-8 rounded-full  bg-ci-light-blue  ${color == "lightblue" ? "border-2 border-black" : "border-ci-gray hover:border-2"}`}
              onClick={() => setColor("lightblue")}
            />
            <div
              className={`h-8 w-8 rounded-full  bg-ci-blue  ${color == "blue" ? "border-2 border-black" : "border-ci-gray hover:border-2"}`}
              onClick={() => setColor("blue")}
            />
            <div
              className={`h-8 w-8 rounded-full  bg-ci-dark-blue  ${color == "darkblue" ? "border-2 border-black" : "border-ci-gray hover:border-2"}`}
              onClick={() => setColor("darkblue")}
            />
            <div
              className={`h-8 w-8 rounded-full  bg-ci-very-dark-blue  ${color == "verydarkblue" ? "border-2 border-black" : "border-ci-gray hover:border-2"}`}
              onClick={() => setColor("verydarkblue")}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center space-x-4">
          <button className="rounded-xl bg-ci-gray px-8 py-2 text-[24px] font-bold text-white">
            Cancel
          </button>
          <button className="rounded-xl bg-ci-light-gray px-8 py-2 text-[24px] font-bold text-white">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddCard;
