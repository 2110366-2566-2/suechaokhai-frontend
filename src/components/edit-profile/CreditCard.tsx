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
  cardNumber, 
  cardHolderName, 
  cardColor, 
  cardNickname, 
  CVV, 
  month, 
  year,
  tagNumber,
  }:{
  cardNumber:string, 
  cardHolderName:string, 
  cardColor:string, 
  cardNickname:string, 
  CVV:string, 
  month:string, 
  year:string,
  tagNumber: number
  }) => {
  return (
    <div>
      <div className={`flex h-56 min-w-[400px] max-w-[400px] cursor-pointer select-none flex-col items-start rounded-xl bg-ci-${colorMap[cardColor]} hover:bg-opacity-80 hover:text-white p-5`}>
        <div className={textcss}>{cardNickname}</div>
        <div className="w-7/12 bg-white h-[1.25px] mb-6 mt-2">&nbsp;</div>
        <div className={`${textcss} mb-8`}>{cardHolderName}</div>
        <div className="flex flex-row space-x-16 items-center">
          <div className={textcss}>{cardNumber}</div>
          <CreditCardIcon size={60} className="pb-4"/>
        </div>
      </div>
    </div>
  );
};
export default CreditCard;
