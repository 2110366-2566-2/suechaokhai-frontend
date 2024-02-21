import { useState } from "react";
import SmallPropertyCard from "./SmallPropertyCard";

export default function FeaturesPropCatalog() {
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(3);
  const property = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <div className="relative flex flex-col gap-y-10 bg-ci-gray px-32 py-24">
      <div className="flex flex-col gap-y-5">
        <div className="text-4xl font-semibold text-ci-blue">
          Featured Listings
        </div>
        <div className="text-2xl">
          Here are some featured listings deals sourced by our experienced real
          estate experts
        </div>
      </div>
      <div className="flex flex-row justify-between">
        {property.slice(start, stop).map((item) => (
          <SmallPropertyCard id={item} />
        ))}
      </div>
    </div>
  );
}
