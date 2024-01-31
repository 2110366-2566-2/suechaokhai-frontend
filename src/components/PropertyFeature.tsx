import React from "react";
import Icon from "@mui/material/Icon";

export type PropertyFeatureProps = {
  icon: string;
  feature: string;
};

const PropertyFeature = ({ icon, feature }: PropertyFeatureProps) => {
  return (
    <div className="flex space-x-1">
      {/* TODO: Do this `link` in global */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      {/* TODO: Adjustible size */}
      <Icon>{icon}</Icon>
      <p className="text flex flex-col items-center justify-center text-nowrap align-middle">
        {feature}
      </p>
    </div>
  );
};

export default PropertyFeature;
