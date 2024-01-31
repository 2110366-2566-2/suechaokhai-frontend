import React from "react";
import PropertyFeature from "./PropertyFeature";
import { PropertyFeatureProps } from "./PropertyFeature";
import PropertyMap from "./PropertyMap";

type PropertyDescriptionProps = {
  name: string;
  features: Array<PropertyFeatureProps>;
  price: number;
  description: string;
  address: string;
};

const PropertyDescription = ({
  name,
  features,
  price,
  description,
  address,
}: PropertyDescriptionProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-0">
        {/* TODO: Fix each child should have unique key */}
        {features.map((feature, index) => (
          <PropertyFeature
            icon={feature.icon}
            key={index}
            feature={feature.feature}
          />
        ))}
      </div>
      <h1 className="text-2xl">{price}</h1>
      <p>{description}</p>
      <div>
        <h2 className="text-lg font-bold">Address</h2>
        <p>{address}</p>
        <PropertyMap name={name} />
      </div>
    </div>
  );
};

export default PropertyDescription;
