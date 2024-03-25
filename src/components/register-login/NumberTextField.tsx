import React, { useEffect, useRef } from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  children?: React.ReactNode;
  maxLength?: number;
  spaceIndices?: number[];
  addedClass?: string;
  setNum: React.Dispatch<React.SetStateAction<string>>;
}

const NumberTextBox = React.forwardRef<HTMLInputElement, IProps>(
  (
    {
      children,
      label,
      maxLength = 19,
      spaceIndices = [4, 8, 12],
      addedClass,
      setNum,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      const formatNumber = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const input = target.value.replace(/\D/g, "").substring(0, maxLength);
        const numbers = [];
        let lastIndex = 0;
        for (let i = 0; i < spaceIndices.length; i++) {
          const index = spaceIndices[i];
          numbers.push(input.substring(lastIndex, index));
          lastIndex = index;
        }
        numbers.push(input.substring(lastIndex));
        const formattedValue = numbers.join(" ").trim();
        target.value = formattedValue;
        setNum(formattedValue);
        console.log(formattedValue);
      };

      if (inputRef.current) {
        inputRef.current.addEventListener("input", formatNumber);
        return () => {
          if (inputRef.current) {
            inputRef.current.removeEventListener("input", formatNumber);
          }
        };
      }
    }, [maxLength, spaceIndices, setNum]);

    return (
      <div className="gap-[8px]">
        {label && (
          <label
            className="inline-block pb-[8px] text-[20px] font-bold"
            htmlFor="txt"
          >
            {label} :
          </label>
        )}
        <div></div>
        <input
          id="txt"
          autoComplete="off"
          className={`block h-[50px] w-[510px] rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700 ${addedClass}`}
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