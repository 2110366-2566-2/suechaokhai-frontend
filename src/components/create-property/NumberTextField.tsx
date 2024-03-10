import React, { useEffect, useRef } from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  children?: React.ReactNode;
  maxLength?: number;
  spaceIndices?: number[];
  setNum: (value: string) => void;
}

const NumberTextBox = React.forwardRef<HTMLInputElement, IProps>(
  ({ children, label, maxLength, spaceIndices, setNum, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      const formatNumber = (event: Event) => {
        const target = event.target as HTMLInputElement;
        let input = target.value.replace(/\D/g, "").substring(0, maxLength);
        let number: number | undefined =
          input === "" ? undefined : parseInt(input, 10); // Handle empty input
        const formatter = new Intl.NumberFormat("en-US"); // Create a number formatter
        const formattedValue =
          number === undefined ? "" : formatter.format(number); // Handle empty number case
        target.value = formattedValue;
        setNum(formattedValue);
      };

      if (inputRef.current) {
        inputRef.current.addEventListener("input", formatNumber);
        return () => {
          if (inputRef.current) {
            inputRef.current.removeEventListener("input", formatNumber);
          }
        };
      }
    }, [maxLength, setNum]);

    return (
      <div className="flex flex-col gap-[24px]">
        {label && (
          <label
            className="text-[28px] font-medium text-ci-black"
            htmlFor="txt"
          >
            {label}
          </label>
        )}
        <input
          id="txt"
          autoComplete="off"
          className="block h-[60px] w-full rounded-[10px] border border-ci-dark-gray p-2 text-[20px] text-ci-black"
          {...props}
          ref={(input) => {
            inputRef.current = input;
            if (ref) {
              if (typeof ref === "function") {
                ref(input);
              } else if (typeof ref === "object") {
                ref.current = input;
              }
            }
          }}
          type="text"
          maxLength={maxLength}
        />

        <div className="flex">{children}</div>
      </div>
    );
  }
);

NumberTextBox.displayName = "NumberTextBox";
export default NumberTextBox;
