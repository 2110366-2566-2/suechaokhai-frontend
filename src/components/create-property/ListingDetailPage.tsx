"use client";

import { useState } from "react";
import Dropdown from "./DropDown";
import ListingType from "./ListingType";
import TrackingCircle from "./TrackingCircle";
import NumberTextBox from "./NumberTextField";

export default function ListingDetailPage() {
  const propertyTypes = [
    "Condominium",
    "Apartment",
    "Semi-detached House",
    "House",
    "Serviced Apartment",
    "Townhouse",
  ];

  const [name, setName] = useState<string>("");
  const [selectedListingType, setSelectedListingType] = useState<string>("");
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>("");
  const [rentPrice, setRentPrice] = useState<number | undefined>(undefined);
  const [salePrice, setSalePrice] = useState<number | undefined>(undefined);

  const handleSelectedListingTypeChange = (type: string) => {
    setSelectedListingType(type);
  };

  const handleSelectPropertyType = (option: string) => {
    setSelectedPropertyType(option);
  };

  return (
    <div>
      <button
        onClick={() => {
          console.log(name);
          console.log(selectedListingType);
          console.log(selectedPropertyType);
          console.log(rentPrice);
          console.log(salePrice);
        }}
      >
        test
      </button>
      <TrackingCircle page="Listing" />
      <div className="flex">
        <div className="m-20 flex-grow rounded-[20px] border border-2 border-gray-300 p-10">
          <div className="flex flex-col gap-[40px]">
            <div className="text-[36px] font-bold text-ci-black">
              Listing Details
            </div>
            <div className="flex w-full gap-[60px]">
              <div className="flex w-1/2 flex-col gap-[24px]">
                <div className="text-[28px] font-medium text-ci-black">
                  Name
                </div>
                <input
                  id="txt"
                  autoComplete="off"
                  className="block h-[60px] rounded-[10px] border border-ci-dark-gray p-2"
                  type="text"
                  placeholder="Property Name"
                  style={{ fontSize: "20px" }}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
              </div>
              <div className="flex w-1/2 flex-col gap-[24px]">
                <div className="text-[28px] font-medium text-ci-black">
                  Listing Type
                </div>
                <ListingType
                  selectedType={selectedListingType}
                  onOptionChange={handleSelectedListingTypeChange}
                />
              </div>
            </div>
            <div className="flex w-full gap-[80px]">
              <div className="flex w-2/5">
                <Dropdown
                  label="Property Type"
                  options={propertyTypes}
                  onSelect={handleSelectPropertyType}
                  placeholder="Select Property Type"
                />
              </div>
              <div className="flex w-2/5">
                <NumberTextBox
                  label="Rent Price/m (THB)"
                  placeholder="฿"
                  style={{ fontSize: "20px" }}
                  setNum={(value: string) => {
                    const parsedValue = parseInt(value.replace(/,/g, ""), 10);
                    setRentPrice(isNaN(parsedValue) ? undefined : parsedValue);
                  }}
                />
              </div>
              <div className="flex w-2/5">
                <NumberTextBox
                  label="Sale Price (THB)"
                  placeholder="฿"
                  style={{ fontSize: "20px" }}
                  setNum={(value: string) => {
                    const parsedValue = parseInt(value.replace(/,/g, ""), 10);
                    setSalePrice(isNaN(parsedValue) ? undefined : parsedValue);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
