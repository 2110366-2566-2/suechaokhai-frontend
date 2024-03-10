import React, { useState } from "react";

const Dropdown = ({
  label,
  options,
  onSelect,
  placeholder,
}: {
  label: string;
  options: Array<string>;
  onSelect: any;
  placeholder: string;
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelect = ({ option }: { option: string }) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="flex flex-col gap-[24px]">
      {label && (
        <label className="text-[28px] font-medium text-ci-black" htmlFor="txt">
          {label}
        </label>
      )}
      <select
        className="dropdown-select font-regular block h-[60px] w-full rounded-[10px] border border-ci-dark-gray p-2 text-[20px] text-ci-dark-gray"
        value={selectedOption}
        onChange={(e) => handleSelect({ option: e.target.value })}
      >
        <option value="" style={{ fontSize: "20px", color: "#B3B3B3" }}>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
            style={{ fontSize: "20px", color: "#0F142E" }}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
