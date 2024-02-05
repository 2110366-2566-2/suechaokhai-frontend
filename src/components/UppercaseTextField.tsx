import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  uppercase?: boolean;
  children?: React.ReactNode;
  label?: string;
  type?: string;
  error?: string;
}

const UppercaseTextBox = React.forwardRef<HTMLInputElement, IProps>(
  ({ uppercase, children, label, type = "text", error, ...props }, ref) => {
    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
      const value = uppercase
        ? (event.currentTarget.value || "").toUpperCase()
        : event.currentTarget.value;
      event.currentTarget.value = value;
    };

    return (
      <div className="gap-[8px]">
        {label && (
          <label
            className="inline-block pb-[8px] text-[20px] font-medium"
            htmlFor="txt"
          >
            {label} :
          </label>
        )}

        <input
          id="txt"
          autoComplete="off"
          className="block h-[50px] w-[510px] rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700"
          {...props}
          ref={ref}
          type={type}
          onInput={handleInput}
        />

        <div className="flex">{children}</div>
      </div>
    );
  }
);

UppercaseTextBox.displayName = "UppercaseTextBox";
export default UppercaseTextBox;
