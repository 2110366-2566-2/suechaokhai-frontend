import React from "react";
import Image from "next/image";

type PropertyFeatureProps = {
  icon: string;
  feature: string;
};

const PropertyFeature = ({ icon, feature }: PropertyFeatureProps) => {
  return (
    <div>
      <div className="flex space-x-1">
        <Image src="/icon/bedroom.svg" width={50} height={50} alt="Bedroom" />
        <p className="text flex flex-col items-center justify-center text-nowrap align-middle">
          {feature}
        </p>
      </div>
    </div>
  );
};

export default PropertyFeature;
