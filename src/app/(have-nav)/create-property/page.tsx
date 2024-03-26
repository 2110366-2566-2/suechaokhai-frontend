"use client";

import { useState } from "react";
import ListingDetailPage from "@/components/create-property/ListingDetailPage";
import AdditionalDetailPane from "@/components/create-property/AdditionalDetailPane";
import propertyCreate from "@/services/propertyCreate";

export interface ListingDetailPageProps {
  name: string;
  listingType: string;
  propertyType: string;
  rentPrice: string;
  salePrice: string;
  description: string;
  address: string;
}

export interface AdditionalDetailPaneProps {
  furnishing: string;
  bedrooms: string;
  bathrooms: string;
  floor: string;
  floorSize: string;
  unitNumber: string;
  photos: File[];
}

export interface PropertyInfo {
  name: string;
  furnishing: string;
  photos: Blob[];
}

export default function CreateProperty() {
  const [createStage, changeState] = useState(0);

  const [listingDetailPageProps, setListingDetailPageProps] =
    useState<ListingDetailPageProps>({
      name: "",
      listingType: "",
      propertyType: "",
      rentPrice: "",
      salePrice: "",
      description: "",
      address: "",
    });

  const [additionalDetailPaneProps, setAdditionalDetailPaneProps] =
    useState<AdditionalDetailPaneProps>({
      furnishing: "",
      bedrooms: "",
      bathrooms: "",
      floor: "",
      floorSize: "",
      unitNumber: "",
      photos: [],
    });

  const [name, setName] = useState<string>("");
  const [listingType, setListingType] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [rentPrice, setRentPrice] = useState<string>("");
  const [salePrice, setSalePrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [address, setAddress] = useState("");

  const [furnishing, setFurnishing] = useState("fully-furnished");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [floor, setFloor] = useState("");
  const [floorSize, setFloorSize] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");

  const createProperty = async () => {
    console.log(name);
    const propertyCreateRes = await propertyCreate({
      name: name,
      furnishing: furnishing,
      photos: additionalDetailPaneProps.photos,
    });
    console.log(propertyCreateRes);
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
        <div>
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
          <button onClick={nextStage}>Back</button>
        </div>
      ) : null}
      {createStage === 1 ? (
        <div>
          <AdditionalDetailPane
            additionalDetailPaneProps={additionalDetailPaneProps}
            setAdditionalDetailPaneProps={setAdditionalDetailPaneProps}
            createProperty={createProperty}
          />
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
