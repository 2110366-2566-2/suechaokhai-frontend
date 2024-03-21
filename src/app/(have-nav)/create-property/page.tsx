"use client";

import { useState } from "react";
import ListingDetailPage from "@/components/create-property/ListingDetailPage";
import AdditionalDetailPane from "@/components/create-property/AdditionalDetailPane";
import propertyCreate from "@/services/getCurrentUserRegister";

export interface PropertyInfo {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  img: any;
}

export default function CreateProperty() {
  const [createStage, changeState] = useState(0);

  const [name, setName] = useState<string>("");
  const [listingType, setListingType] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [rentPrice, setRentPrice] = useState<number | undefined>();
  const [salePrice, setSalePrice] = useState<number | undefined>();
  const [description, setDescription] = useState<string>("");
  const [address, setAddress] = useState("");

  const [furnishing, setFurnishing] = useState("fully-furnished");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [floor, setFloor] = useState("");
  const [floorSize, setFloorSize] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [photos, setPhotos] = useState([]);

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");

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
          <AdditionalDetailPane />
          <button onClick={nextStage}>Back</button>
        </div>
      ) : null}
    </div>
  );
}
