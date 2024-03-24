import Image from "next/image";
import { CreditCardIcon } from "../ui/icon";
import { useState } from "react";
import EditCard from "./EditCard";
const colorMap:{[key:string]:string} = {
    "LIGHT_BLUE":"light-blue", 
    "BLUE":"blue", 
    "DARK_BLUE":"dark-blue", 
    "VERY_DARK_BLUE":"very-dark-blue"
}
const textcss = "text-[24px] font-medium text-white"
const CreditCard = ({
  setDisplayEdit,
  displayEdit,
  setCreditCards,
  handleSave,
  cardNumber, 
  cardHolderName, 
  cardColor, 
  cardNickname, 
  CVV, 
  month, 
  year,
  creditCards,
  tagNumber,
  }:{
  setDisplayEdit:Function,
  displayEdit:boolean,
  setCreditCards:Function
  handleSave:Function,
  cardNumber:string, 
  cardHolderName:string, 
  cardColor:string, 
  cardNickname:string, 
  CVV:string, 
  month:string, 
  year:string,
  creditCards:any,
  tagNumber: number
  }) => {
  const maskedCardNumber = () => {
    return "xxxx xxxx xxxx " + cardNumber.slice(12,16);
  }
  return (
    <div>
      <div className={`flex h-56 min-w-[400px] max-w-[400px] cursor-pointer select-none flex-col items-start rounded-xl bg-ci-${colorMap[cardColor]} hover:bg-opacity-80 hover:text-white p-5`}
      onClick={() => {setDisplayEdit(true)}}>
        <div className={textcss}>{cardNickname}</div>
        <div className="w-7/12 bg-white h-[1.25px] mb-6 mt-2">&nbsp;</div>
        <div className={`${textcss} mb-8`}>{cardHolderName}</div>
        <div className="flex flex-row items-center">
          <div className={`${textcss} min-w-[284px]`}>{maskedCardNumber()}</div>
          <CreditCardIcon size={60} className="pb-4"/>
        </div>
      </div>
        {displayEdit && (
          <EditCard  setDisplay={setDisplayEdit} handleSave={handleSave} creditCards={creditCards} defaultCVV={CVV} defaultColor={cardColor} defaultMonth={month} defaultYear={year} defaultCardNumber={cardNumber} defaultCardholderName={cardHolderName} defaultCardNickname={cardNickname} tagNumber={tagNumber} setCreditCards={setCreditCards}/>
        )}
    </div>
  );
};
export default CreditCard;
