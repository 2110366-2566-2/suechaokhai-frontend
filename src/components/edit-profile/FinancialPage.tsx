<<<<<<< HEAD
import Dropdown from "../register-login/DropDown";
import NumberTextBox from "../register-login/NumberTextField";
<<<<<<< HEAD
=======
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
        <NumberTextBox
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
||||||| b074513
=======
import Dropdown from "../register-login/DropDown";
import NumberTextBox from "../register-login/NumberTextField";
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
import { useState, useEffect } from "react";
import EmptyCard from "@/components/edit-profile/EmptyCard";
import getUserFinancial from "@/services/getUserFinancial";
import updateUserFinancial from "@/services/updateUserFinancial";
import { log } from "console";

type UserData = {
  bank_name : string,
  bank_account_number : string,
  created_at:string,
  credit_cards : CreditCardData[]
}
type CreditCardData = {
  card_color: string;
  card_nickname: string;
  card_number: string;
  cardholder_name: string;
  cvv: string;
  expire_month: string;
  expire_year: string;
  tag_number: number;
};
const FinancialPage = ({setIsChangesExist}:{setIsChangesExist:Function}) => {
  const [bankNumber, setBankNumber] = useState("");
  const [changed, setChanged] = useState(0);
  const [bankName, setBankName] = useState("")
  const [isSaved, setIsSaved] = useState(0)
  const [userData, setUserData] = useState<UserData|null>(null);
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
  setIsChangesExist(false);
  const fetchUser = async () => {
    try {
      const data = await getUserFinancial();
      setBankNumber(data.bank_account_number)
      setBankName(data.bank_name)
      console.log(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchUser();
  },[]);
  const handleSave = () => {
    const data: UserData = {
      bank_name: bankName,
      bank_account_number:bankNumber,
      created_at:"123",
      credit_cards: [
        {
          card_color: "BLUE",
          card_nickname: "John's Card",
          card_number: "1234567890123456",
          cardholder_name: "John Doe",
          cvv: "123",
          expire_month: "12",
          expire_year: "2023",
          tag_number: 1
        }
      ]
    };
    setIsChangesExist(false);
    updateUserFinancial(data);
  };
  const handleSelect = (option: any) => {
    setBankName(option);
    setChanged(1)
    setIsChangesExist(true);
    console.log(bankName)
  };
  const handleBankNumber = (no : any) => {
    setBankNumber(no);
    setIsChangesExist(true);
    setChanged(1)
    console.log(bankNumber)

  }
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
          onSelect={handleSelect}
          className="w-[400px] lg:w-[510px]"
        />
        <NumberTextBox
          label="Bank Account Number"
          placeholder="Enter your bank account number"
          maxLength={10}
          spaceIndices={[]}
          setNum={handleBankNumber}
          className="w-[400px] lg:w-[510px]"
          value={bankNumber}
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
          onClick={handleSave}
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
>>>>>>> df15c90262049e0e4c2b76616c35e28d9f934767
