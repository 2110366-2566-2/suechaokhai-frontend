"use client";
import React, { useRef } from "react";
import { useState } from "react";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  children?: React.ReactNode;
  setEmail?: Function;
  setPassword?: Function;
}

const PasswordField = React.forwardRef<HTMLInputElement, IProps>(
  ({ children, label, type, error, ...props }, ref) => {
    const [isShow, setShow] = useState<boolean>(false);
    const password = useRef("");
    return (
      <div className="gap-[8px]">
        {label && (
          <label className="inline-block pb-[8px] font-bold" htmlFor="txt">
            {label}:
          </label>
        )}
        {isShow ? (
          <div className="flex flex-row">
            <input
              id="txt"
              autoComplete="off"
              className="block h-[50px] w-[510px] rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700"
              {...props}
              ref={ref}
              type="text"
            ></input>
            <button
              className="absolute ml-[440px] py-[10px] font-bold"
              onClick={(e) => setShow(!isShow)}
            >
              Hide
            </button>
          </div>
        ) : (
          <div className="flex flex-row">
            <input
              id="txt"
              autoComplete="off"
              className="block h-[50px] w-[510px] rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700"
              {...props}
              ref={ref}
              type={type}
            ></input>
            <button
              className="absolute ml-[440px] py-[10px] font-bold"
              onClick={(e) => setShow(!isShow)}
            >
              Show
            </button>
          </div>
        )}

        <div className="flex">{children}</div>
      </div>
    );
  }
);

PasswordField.displayName = "TextBox";
export default PasswordField;
