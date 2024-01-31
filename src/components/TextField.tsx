import React from "react";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  children?: React.ReactNode;
}

const TextBox = React.forwardRef<HTMLInputElement, IProps>(
  ({ children, label, type = "text", error, ...props }, ref) => {
    return (
      <div className="gap-[8px]">
        {label && (
          <label className="inline-block pb-[8px] font-bold" htmlFor="txt">
            {label}:
          </label>
        )}
        {type === "password" ? (
          <div className="flex flex-row">
            <input
              id="txt"
              autoComplete="off"
              className="block h-[50px] w-[510px] rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700"
              {...props}
              ref={ref}
              type={type}
            ></input>
            <button className="absolute ml-[440px] py-[10px] font-bold">
              Show
            </button>
          </div>
        ) : (
          <input
            id="txt"
            autoComplete="off"
            className="block h-[50px] w-[510px] rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700"
            {...props}
            ref={ref}
            type={type}
          ></input>
        )}

        <div className="flex">{children}</div>
      </div>
    );
  }
);

TextBox.displayName = "TextBox";
export default TextBox;
