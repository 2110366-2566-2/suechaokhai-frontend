import React from "react";
import PropertyFeature from "./PropertyFeature";
import PropertyMap from "./PropertyMap";

type PropertyDescriptionProps = {
  price: number;
  description: string;
  address: string;
};

const PropertyDescription = ({
  price,
  description,
  address,
}: PropertyDescriptionProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <PropertyFeature icon="Bedroom" feature="1 Bedroom" />
        <PropertyFeature icon="Bedroom" feature="1 Bedroom" />
        <PropertyFeature icon="Bedroom" feature="1 Bedroom" />
      </div>
      <h1 className="text-2xl">{price}</h1>
      <p>{description}</p>
      <div>
        <h2 className="text-lg font-bold">Address</h2>
        <p>{address}</p>
        <PropertyMap address={address} />
      </div>
    </div>
  );
};

export default PropertyDescription;
