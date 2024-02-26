import Dropdown from "../register-login/DropDown";
import NumberTextBox from "../register-login/NumberTextField";
import { useState } from "react";
import EmptyCard from "@/components/edit-profile/EmptyCard";
const FinancialPage = () => {
  const [bankNumber, setBankNumber] = useState("");
  const [changed, setChanged] = useState(0);
  const options = [
    "KASIKORN BANK",
    "BANGKOK BANK",
    "KRUNG THAI BANK",
    "BANK OF AYUDHYA",
    "CIMB THAI BANK",
    "TMBTHANACHART BANK",
    "SIAM COMMERCIAL BANK",
    "GOVERNMENT SAVINGS BANK",
    "BANK NOT SELECTED",
  ];
  const handleBankName = () => {};
  return (
    <div className="flex max-w-[100%] flex-col justify-center space-y-4">
      <div className="text-[32px] font-bold">Financial Information</div>
      <div className="text-[20px] font-semibold ">Credit Card</div>
      <div className="flex w-[70%] flex-col justify-center gap-8 sm:flex-row sm:flex-wrap sm:justify-normal">
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
      </div>
      <div className=" text-[20px] font-semibold ">Bank Account</div>
      <div className="flex flex-col space-x-0 xl:flex-row xl:space-x-8">
        <Dropdown
          label="Bank Name"
          options={options}
          onSelect={handleBankName}
          className="w-[400px] lg:w-[510px]"
        />
        <NumberTextBox
          label="Bank Account Number"
          placeholder="Enter your bank account number"
          maxLength={13}
          spaceIndices={[3, 4, 9]}
          setNum={setBankNumber}
          className="w-[400px] lg:w-[510px]"
        />
      </div>
      <div className="mt-40 flex select-none flex-row justify-end space-x-5">
        <button
          className={`rounded-xl bg-${changed ? "ci-gray" : "ci-dark-gray "} px-4 py-2 text-[20px] font-bold text-white`}
          // onClick={handleCancel}
          disabled={!changed}
        >
          Cancel
        </button>
        <button
          className={`rounded-xl bg-${changed ? "ci-blue" : "ci-dark-gray "} px-4 py-2 text-[20px] font-bold text-white`}
          // onClick={handleSave}
          disabled={!changed}
          type="submit"
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default FinancialPage;
