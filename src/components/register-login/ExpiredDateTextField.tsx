import React, { useEffect, useRef, useState } from "react";
import NumberTextBox from "./NumberTextField";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  children?: React.ReactNode;
  monthValue? : string
  yearValue? : string
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
}

const ExpiryDateInput = React.forwardRef<HTMLInputElement, IProps>(
  (
    { children, label, type = "text", error, monthValue, yearValue, setMonth, setYear, ...props },
    ref
  ) => {
    const monthRef = useRef<HTMLInputElement>(null);
    const yearRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      const monthInput = monthRef.current;
      const yearInput = yearRef.current;

      if (monthInput && yearInput) {
        monthInput.addEventListener("input", handleMonthInput);
        yearInput.addEventListener("input", handleYearInput);
      }
      return () => {
        if (monthInput && yearInput) {
          monthInput.removeEventListener("input", handleMonthInput);
          yearInput.removeEventListener("input", handleYearInput);
        }
      };
    }, []);

    const handleMonthInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const input = target.value.replace(/\D/g, "").substring(0);
      target.value = input;
      setMonth(input);
    };

    const handleYearInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const input = target.value.replace(/\D/g, "").substring(0);
      target.value = input;
      setYear(input);
    };

    return (
      <div>
        {label && (
          <label className="inline-block pb-[8px] font-bold" htmlFor="txt">
            {label} :
          </label>
        )}
        <div className="flex items-center gap-[5px]">
          <div>
            <NumberTextBox
              placeholder="MM"
              maxLength={2}
              spaceIndices={[]}
              className="h-[50px] w-[60px] rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700"
              setNum={setMonth}
              value={monthValue}
            />
          </div>
          <span className="px-1">/</span>
          <div>
            <NumberTextBox
              placeholder="YY"
              maxLength={2}
              spaceIndices={[]}
              className="h-[50px] w-[60px] rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700"
              setNum={setYear}
              value={yearValue}
            />
          </div>
        </div>
        <div className="flex">{children}</div>
      </div>
    );
  }
);

ExpiryDateInput.displayName = "ExpiryDateInput";
export default ExpiryDateInput;
