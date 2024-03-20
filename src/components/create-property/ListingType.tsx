import React, { useState, useEffect } from "react";

interface ListingTypeProps {
  selectedType: string;
  onOptionChange: (type: string) => void;
}

const ListingType: React.FC<ListingTypeProps> = ({
  selectedType,
  onOptionChange,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [hoveredOption, setHoveredOption] = useState("");

  useEffect(() => {
    setSelectedOption(selectedType);
  }, [selectedType]);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    onOptionChange(option);
  };

  const handleMouseEnter = (option: string) => {
    setHoveredOption(option);
  };

  const handleMouseLeave = () => {
    setHoveredOption("");
  };

  const labelStyle: React.CSSProperties = {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #B3B3B3",
    borderRadius: "10px",
    cursor: "pointer",
    width: "100%",
    height: "60px",
    fontSize: "24px",
    textAlign: "center",
    color: "#0F142E",
    overflow: "hidden",
  };
  const labelStyle3: React.CSSProperties = {
    ...labelStyle,
  };

  const selectedStyle: React.CSSProperties = {
    ...labelStyle,
    backgroundColor: "#0F142E",
    color: "#FFFFFF",
  };

  const selectedStyle3: React.CSSProperties = {
    ...labelStyle3,
    backgroundColor: "#0F142E",
    color: "#FFFFFF",
  };

  const hoverStyle: React.CSSProperties = {
    ...labelStyle,
    backgroundColor: "#B3B3B3",
  };

  const hoverStyle3: React.CSSProperties = {
    ...labelStyle3,
    backgroundColor: "#B3B3B3",
  };

  return (
    <div className="grid gap-6 sm:grid-cols-3">
      <input
        type="radio"
        id="rent"
        name="type"
        value="rent"
        checked={selectedOption === "rent"}
        onChange={() => handleOptionChange("rent")}
        style={{ display: "none" }}
      />
      <label
        htmlFor="rent"
        style={{
          ...labelStyle,
          ...(hoveredOption === "rent" ? hoverStyle : {}),
          ...(selectedOption === "rent" ? selectedStyle : {}),
        }}
        onMouseEnter={() => handleMouseEnter("rent")}
        onMouseLeave={handleMouseLeave}
      >
        Rent
      </label>

      <input
        type="radio"
        id="sell"
        name="type"
        value="sell"
        checked={selectedOption === "sell"}
        onChange={() => handleOptionChange("sell")}
        style={{ display: "none" }}
      />
      <label
        htmlFor="sell"
        style={{
          ...labelStyle,
          ...(hoveredOption === "sell" ? hoverStyle : {}),
          ...(selectedOption === "sell" ? selectedStyle : {}),
        }}
        onMouseEnter={() => handleMouseEnter("sell")}
        onMouseLeave={handleMouseLeave}
      >
        Sell
      </label>

      <input
        type="radio"
        id="rent/sell"
        name="type"
        value="rent/sell"
        checked={selectedOption === "rent/sell"}
        onChange={() => handleOptionChange("rent/sell")}
        style={{ display: "none" }}
      />
      <label
        htmlFor="rent/sell"
        style={{
          ...labelStyle3,
          ...(hoveredOption === "rent/sell" ? hoverStyle3 : {}),
          ...(selectedOption === "rent/sell" ? selectedStyle3 : {}),
        }}
        onMouseEnter={() => handleMouseEnter("rent/sell")}
        onMouseLeave={handleMouseLeave}
      >
        Rent/Sell
      </label>
    </div>
  );
};

export default ListingType;