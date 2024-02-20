import Dropdown from "../register-login/DropDown";
import NumberTextField from "@/components/editProfile/NumberTextField";
import { useState } from "react";
import EmptyCard from "@/components/edit-profile/EmptyCard";
const FinancialPage = () => {
  const [bankNumber, setBankNumber] = useState("");
  const options = ["1", "2", "3"];
  const handleBankName = () => {};
  return (
    <div className="space-y-10">
      <div className=" text-[40px] font-bold">Financial Information</div>
      <div className=" text-[30px] font-semibold ">Credit Card</div>
      <div className="flex flex-row flex-wrap gap-8">
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
      </div>
      <div className=" text-[30px] font-semibold ">Bank Account</div>
      <div className="flex flex-row space-x-8">
        <Dropdown
          label="Bank Name"
          options={options}
          onSelect={handleBankName}
        />
        <NumberTextField
          label="Bank Account Number"
          placeholder="Enter your bank account number"
          maxLength={13}
          spaceIndices={[3, 4, 9]}
          setNum={setBankNumber}
        />
      </div>
    </div>
  );
};
export default FinancialPage;
