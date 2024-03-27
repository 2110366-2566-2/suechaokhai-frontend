import TextField from "@/components/register-login/TextField";
import TextBox from "@/components/register-login/TextField";
import NumberTextBox from "../register-login/NumberTextField";
import ExpiryDateInput from "../register-login/ExpiredDateTextField";
import { CreditCardData } from "./FinancialPage";
import { useState, useEffect } from "react";
const AddCard = ({setDisplay, handleSave, creditCards}:{setDisplay:Function, handleSave:Function, creditCards:CreditCardData[]}) => {
  const [CVV, setCVV] = useState("");
  const [color, setColor] = useState("");
  const [cardColor, setCardColor] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [card, setCard] = useState("");
  const [nickname, setNickname] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [confirm, setConfirm] = useState(false);
  const handleSaveCard = () => {
    const newCard = {
      card_color: cardColor,
      card_nickname: nickname,
      card_number: card.replace(/[^\d]/g, ""),
      cardholder_name: cardholderName,
      cvv: CVV,
      expire_month: month,
      expire_year: "20" + year,
      tag_number: creditCards.length + 1
    };
    creditCards.push(newCard)
    handleSave(creditCards)
  };
  const handleInfo = () => {
    const cardNumber = card.replace(/[^\d]/g,"")
    const yearNum = +year
    const monthNum = +month
    if(CVV.length == 3 && color != "" && month.length == 2 && year.length == 2 && cardNumber.length == 16 && cardholderName != "" && nickname != "" && monthNum <= 12){
      setConfirm(true)
    }
    else{
      setConfirm(false)
    }
  }
  useEffect(() => {
    handleInfo()
  },[CVV,color,cardColor,month,year,card,cardholderName,nickname])
  return (
    <div className="fixed left-0 -top-4 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-20">
      <div className="flex flex-col items-center space-y-8 rounded-3xl bg-white px-12 py-5">
        <div className="text-[36px] font-bold">Add a Credit Card</div>
        <div className="flex flex-col justify-start space-y-2">
          <TextBox
            label="Credit Card Nickname"
            placeholder="Enter Card Nickname"
            addedClass="block h-12 w-[420px] rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700"
            onChange={(e) => {setNickname(e.target.value)}}
          />
          <TextBox
            label="Cardholder Name"
            placeholder="Enter Cardholder Name"
            addedClass="block h-12 w-[420px] rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700"
            onChange={(e) => {setCardholderName(e.target.value)}}

          />
          <NumberTextBox
            label="Card Number"
            placeholder="Enter Card Number"
            addedClass="block h-12 w-[420px] rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700"
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
            addedClass=" w-16 rounded-lg border border-ci-dark-gray p-2 text-gray-700 "
            setNum={setCVV}
          />
          <div className="font-bold">Color:</div>
          <div className="flex flex-row space-x-2">
            <div
              className={`h-8 w-8 rounded-full  bg-ci-light-blue  ${color == "lightblue" ? "border-2 border-black" : "border-ci-gray hover:border-2"}`}
              onClick={() => {setColor("lightblue")
                            setCardColor("LIGHT_BLUE")}}
        
            />
            <div
              className={`h-8 w-8 rounded-full  bg-ci-blue  ${color == "blue" ? "border-2 border-black" : "border-ci-gray hover:border-2"}`}
              onClick={() => {setColor("blue")
                            setCardColor("BLUE")}}
            />
            <div
              className={`h-8 w-8 rounded-full  bg-ci-dark-blue  ${color == "darkblue" ? "border-2 border-black" : "border-ci-gray hover:border-2"}`}
              onClick={() => {setColor("darkblue")
                            setCardColor("DARK_BLUE")}}
            />
            <div
              className={`h-8 w-8 rounded-full  bg-ci-very-dark-blue  ${color == "verydarkblue" ? "border-2 border-black" : "border-ci-gray hover:border-2"}`}
              onClick={() => {setColor("verydarkblue")
                            setCardColor("VERY_DARK_BLUE")}}  
            />
          </div>
        </div>
        <div className="flex flex-row justify-center space-x-4">
          <button className="rounded-xl bg-ci-gray px-8 py-2 text-[24px] font-bold text-white"
          onClick={() => {setDisplay(false)}}
          >
            Cancel
          </button>
          <button className="rounded-xl  px-8 py-2 text-[24px] font-bold text-white disabled:bg-ci-light-gray bg-ci-blue"
          onClick={() => {handleSaveCard()}}
          disabled={!confirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddCard;
