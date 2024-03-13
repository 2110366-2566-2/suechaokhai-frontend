<<<<<<< HEAD
"use client";

import ListingType from "./ListingType";
import TrackingCircle from "./TrackingCircle";

export default function ListingDetailPage() {
  return (
    <div>
      <TrackingCircle page="Listing" />
      <div className="flex">
        <div className="m-20 flex-grow rounded-[20px] border border-2 border-gray-300 p-10">
          <div className="pb-10 text-[36px] font-bold text-ci-black">
            Listing Details
          </div>
          <div className="flex gap-[60px]">
            <div className="flex flex-col gap-[24px]">
              <div className="text-[28px] font-medium text-ci-black">Name</div>
              <input
                id="txt"
                autoComplete="off"
                className="block h-[60px] w-[480px] rounded-[10px] border border-ci-dark-gray p-2"
                type="text"
                placeholder="Property Name"
                style={{ fontSize: "20px" }}
              ></input>
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="text-[28px] font-medium text-ci-black">
                Listing Type
              </div>
              <ListingType />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
||||||| b074513
=======
"use client";

import { useState, FormEvent } from "react";
import Dropdown from "./DropDown";
import ListingType from "./ListingType";
import TrackingCircle from "./TrackingCircle";
import NumberTextBox from "./NumberTextField";
import Map from "./Map";

export default function ListingDetailPage({
  changeCreateState,
  name,
  listingType,
  propertyType,
  rentPrice,
  salePrice,
  description,
  address,
  setName,
  setListingType,
  setPropertyType,
  setRentPrice,
  setSalePrice,
  setDescription,
  setAddress,
}: {
  changeCreateState: Function;
  name: string;
  listingType: string;
  propertyType: string;
  rentPrice: number | undefined;
  salePrice: number | undefined;
  description: string;
  address: string;
  setName: Function;
  setListingType: Function;
  setPropertyType: Function;
  setRentPrice: Function;
  setSalePrice: Function;
  setDescription: Function;
  setAddress: Function;
}) {
  const [nametmp, setNametmp] = useState<string>("");
  const [selectedListingType, setSelectedListingType] = useState<string>("");
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>("");
  const [rentPricetmp, setRentPricetmp] = useState<number | undefined>();
  const [salePricetmp, setSalePricetmp] = useState<number | undefined>();
  const [descriptiontmp, setDescriptiontmp] = useState<string>("");
  const [addresstmp, setAddresstmp] = useState("");

  const propertyTypes = [
    "Condominium",
    "Apartment",
    "Semi-detached House",
    "House",
    "Serviced Apartment",
    "Townhouse",
  ];

  function initial(
    name: string,
    listingType: string,
    propertyType: string,
    rentPrice: number | undefined,
    salePrice: number | undefined,
    description: string,
    address: string
  ) {
    setNametmp(name);
    setSelectedListingType(listingType);
    setSelectedPropertyType(propertyType);
    setRentPricetmp(rentPrice);
    setSalePricetmp(salePrice);
    setDescriptiontmp(description);
    setAddresstmp(address);
  }

  const handleSelectPropertyType = (option: string) => {
    setSelectedPropertyType(option);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescriptiontmp(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddresstmp(event.target.value);
  };

  async function nextPage() {
    setName(nametmp);
    setListingType(selectedListingType);
    setPropertyType(selectedPropertyType);
    setRentPrice(rentPricetmp);
    setSalePrice(salePricetmp);
    setDescription(descriptiontmp);
    setAddress(addresstmp);
    changeCreateState(1);
  }

  function listingCreate1(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div
      onLoad={() =>
        initial(
          name,
          listingType,
          propertyType,
          rentPrice,
          salePrice,
          description,
          address
        )
      }
    >
      <button
        onClick={() => {
          console.log(nametmp);
          console.log(selectedListingType);
          console.log(selectedPropertyType);
          console.log(rentPricetmp);
          console.log(salePricetmp);
          console.log(descriptiontmp);
          console.log(addresstmp);
        }}
      >
        test
      </button>
      <TrackingCircle page="Listing" />
      <div className="flex">
        <div className="m-20 flex-grow rounded-[20px] border-2 border-gray-300 p-10">
          <form onSubmit={listingCreate1}>
            <div className="flex w-full flex-col gap-10">
              <div className="text-[36px] font-bold text-ci-black">
                Listing Details
              </div>
              <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
                <div className="grid gap-6">
                  <div className="text-[28px] font-medium text-ci-black">
                    Name
                  </div>
                  <input
                    id="txt"
                    autoComplete="off"
                    className="block h-[60px] w-full rounded-[10px] border border-ci-dark-gray p-2"
                    type="text"
                    placeholder="Property Name"
                    style={{ fontSize: "20px" }}
                    value={name}
                    onChange={(e) => {
                      setNametmp(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="grid gap-6">
                  <div className="text-[28px] font-medium text-ci-black">
                    Listing Type
                  </div>
                  <ListingType
                    selectedType={listingType}
                    onOptionChange={(e) => {
                      setSelectedListingType(e);
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
                <div className="grid gap-6">
                  <Dropdown
                    label="Property Type"
                    options={propertyTypes}
                    onSelect={handleSelectPropertyType}
                    placeholder="Select Property Type"
                  />
                </div>
                <div className="grid gap-6">
                  <NumberTextBox
                    label="Rent Price/m (THB)"
                    placeholder="฿"
                    style={{ fontSize: "20px" }}
                    value={rentPrice}
                    setNum={(value: string) => {
                      const parsedValue = parseInt(value.replace(/,/g, ""), 10);
                      setRentPricetmp(isNaN(parsedValue) ? 0 : parsedValue);
                    }}
                  />
                </div>
                <div className="grid gap-6">
                  <NumberTextBox
                    label="Sale Price (THB)"
                    placeholder="฿"
                    style={{ fontSize: "20px" }}
                    value={salePrice}
                    setNum={(value: string) => {
                      const parsedValue = parseInt(value.replace(/,/g, ""), 10);
                      setSalePricetmp(isNaN(parsedValue) ? 0 : parsedValue);
                    }}
                  />
                </div>
              </div>
              <div className="grid">
                <div className="grid gap-6">
                  <div className="text-[28px] font-medium text-ci-black">
                    Description
                  </div>
                  <textarea
                    className="flex w-full rounded-[10px] border border-ci-dark-gray p-2"
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    rows={3}
                    cols={40}
                    placeholder="Description"
                    style={{
                      fontSize: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="grid">
                <div className="grid gap-6">
                  <div className="text-[28px] font-medium text-ci-black">
                    Address
                  </div>
                  <input
                    type="text"
                    value={address}
                    className="block h-[60px] rounded-[10px] border border-ci-dark-gray p-2"
                    onChange={handleInputChange}
                    placeholder="Address"
                    style={{ fontSize: "20px" }}
                  ></input>
                  <Map name="" />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  onClick={nextPage}
                  className="font- h-[60px] w-[190px] rounded-[10px] bg-ci-light-blue px-10 py-2 text-[24px] font-medium text-white"
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
>>>>>>> df15c90262049e0e4c2b76616c35e28d9f934767
