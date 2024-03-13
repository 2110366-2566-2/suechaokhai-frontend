import { CheckCircleIcon, CloseIcon } from "../ui/icon";
import { useState } from "react";
export const CheckModal = ({
  header,
  description,
  className,
  handleClose,
}: {
  header: string;
  description: string;
  className?: string;
  handleClose: Function;
}) => {
  return (
    <div
      className={`${className} fixed bottom-4 right-8 flex h-24 min-w-[480px] transform select-none items-center space-x-2 
    overflow-hidden rounded-2xl bg-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-in-out`}
    >
      <div className="h-full w-8 bg-ci-green"></div>
      <CheckCircleIcon size={40} />
      <div>
        <div className="font-bold">{header}</div>
        <div>{description}</div>
      </div>
      <div
        className="absolute right-4 top-4 cursor-pointer"
        onClick={() => handleClose()}
      >
        <CloseIcon size={10} />
      </div>
    </div>
  );
};
