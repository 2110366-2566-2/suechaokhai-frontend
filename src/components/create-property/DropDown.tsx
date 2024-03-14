import React, { useState, useEffect } from "react";

const Dropdown = ({
  label,
  placeholder,
  options,
  onSelect,
  selected,
}: {
  label: string;
  placeholder: string;
  options: Array<string>;
  onSelect: any;
  selected: string;
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  useEffect(() => {
    setSelectedOption(selected);
  }, [selected]);

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
        className={`dropdown-select font-regular block h-[60px] w-full rounded-[10px] border border-ci-dark-gray p-2 text-[20px] ${
          selectedOption === "" ? "text-ci-dark-gray" : "text-ci-black"
        }`}
        value={selectedOption}
        onChange={(e) => handleSelect({ option: e.target.value })}
      >
        <option value="" className="text-[20px] text-ci-dark-gray">
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option
            className="text-[20px] text-ci-black"
            key={index}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.displayName = "Dropdown";
export default Dropdown;
