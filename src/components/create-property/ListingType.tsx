<<<<<<< HEAD
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
=======
<<<<<<< HEAD
import React, { useState } from "react";

const ListingType: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [hoveredOption, setHoveredOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
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
<<<<<<< HEAD
=======
    marginRight: "20px",
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
    backgroundColor: "#FFFFFF",
    border: "1px solid #B3B3B3",
    borderRadius: "10px",
    cursor: "pointer",
<<<<<<< HEAD
    width: "100%",
=======
    width: "120px",
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
    height: "60px",
    fontSize: "24px",
    textAlign: "center",
    color: "#0F142E",
<<<<<<< HEAD
    overflow: "hidden",
  };
  const labelStyle3: React.CSSProperties = {
    ...labelStyle,
=======
  };
  const labelStyle3: React.CSSProperties = {
    ...labelStyle,
    width: "200px",
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
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
<<<<<<< HEAD
    <div className="grid gap-6 sm:grid-cols-3">
=======
    <div>
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
      <input
        type="radio"
        id="rent"
        name="type"
        value="rent"
        checked={selectedOption === "rent"}
<<<<<<< HEAD
        onChange={() => handleOptionChange("rent")}
=======
        onChange={handleOptionChange}
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
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
<<<<<<< HEAD
        onChange={() => handleOptionChange("sell")}
=======
        onChange={handleOptionChange}
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
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
<<<<<<< HEAD
        onChange={() => handleOptionChange("rent/sell")}
=======
        onChange={handleOptionChange}
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
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
||||||| b074513
=======
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
>>>>>>> df15c90262049e0e4c2b76616c35e28d9f934767
