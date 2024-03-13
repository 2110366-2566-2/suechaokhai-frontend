import React, { useState } from "react";
const Dropdown = ({
  label,
  options,
  onSelect,
  className,
}: {
  label: string;
  options: Array<string>;
  onSelect: any;
  className?: string;
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelect = ({ option }: { option: string }) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div>
      {label && (
        <label className="block pb-2 text-[20px] font-medium" htmlFor="txt">
          {label} :
        </label>
      )}
      <select
        className={`${className} dropdown-select block h-[50px] w-[510px] rounded-[10px] border border-[#B3B3B3] p-2 text-gray-700`}
        value={selectedOption}
        onChange={(e) => handleSelect({ option: e.target.value })}
      >
        <option value=""></option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
