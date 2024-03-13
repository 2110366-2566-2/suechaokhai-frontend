"use client";

import { useState } from "react";
import ListingDetailPage from "@/components/create-property/ListingDetailPage";

export default function CreateProperty() {
  const [createStage, changeState] = useState(0);

  const [name, setName] = useState<string>("");
  const [listingType, setListingType] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [rentPrice, setRentPrice] = useState<string>("");
  const [salePrice, setSalePrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [address, setAddress] = useState("");

  const create = async () => {
    // const propertyCreate = await {};
  };

  function nextStage() {
    changeState((createStage + 1) % 2);
  }

  function backStage() {
    changeState((createStage - 1) % 2);
  }

  return (
    <div>
      {createStage === 0 ? (
        <ListingDetailPage
          changeCreateState={nextStage}
          name={name}
          listingType={listingType}
          propertyType={propertyType}
          rentPrice={rentPrice}
          salePrice={salePrice}
          description={description}
          address={address}
          setName={setName}
          setListingType={setListingType}
          setPropertyType={setPropertyType}
          setRentPrice={setRentPrice}
          setSalePrice={setSalePrice}
          setDescription={setDescription}
          setAddress={setAddress}
        />
      ) : null}
      {createStage === 1 ? (
        <div>
          <button onClick={nextStage}>Back</button>
          <div></div>
          <button
            onClick={() => {
              console.log(name);
              console.log(listingType);
              console.log(propertyType);
              console.log(rentPrice);
              console.log(salePrice);
              console.log(description);
              console.log(address);
            }}
          >
            test
          </button>
        </div>
      ) : null}
    </div>
  );
}
