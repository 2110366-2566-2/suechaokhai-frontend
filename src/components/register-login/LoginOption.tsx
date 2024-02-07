import React from "react";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  children?: React.ReactNode;
}

const LoginOption = React.forwardRef<HTMLInputElement, IProps>(
  ({ className, children, label, type = "checkbox", error, ...props }, ref) => {
    return (
      <div className="flex w-[507px] flex-row py-[30px]">
        <div className="flex flex-row">
          <input
            autoComplete="off"
            className="h-[30px] w-[30px] rounded-[20px] border border-[#B3B3B3]"
            {...props}
            ref={ref}
            type={type}
          ></input>
          <div className="px-2">Remember me</div>
        </div>

        <div>{children}</div>
      </div>
    );
  }
);

LoginOption.displayName = "LoginOption";
export default LoginOption;
