import PropertyData from "@/models/PropertyData";
import Image from "next/image";
import PropertyFeatures from "./PropertyFeatures";
import PropertyMap from "../property-description/PropertyMap";
import RelatedProperty from "./RelatedProperty";

export default function PropertyDetail({ property }: { property: PropertyData }) {

    const propertyAddress =
        (property?.address || "") +
        ", " +
        (property?.alley || "") +
        ", " +
        (property?.street || "") +
        ", " +
        (property?.district || "") +
        ", " +
        (property?.sub_district || "") +
        ", " +
        (property?.province || "") +
        " " +
        (property?.postal_code || "");

    return (
        <div className="flex flex-col w-11/12 text-xl gap-y-8 py-6">
            <div className="text-4xl font-bold">{property.property_name}</div>
            <div className="">{propertyAddress}</div>
            <div className="font-bold">฿{property.renting_property.price_per_month}/month</div>
            <div className="flex">
                <div className={`rounded-lg px-4 py-3 ${property.renting_property.is_occupied ? "bg-ci-red" : "bg-ci-green"}`}>
                    {property.renting_property.is_occupied ?
                        <div className="flex flex-row gap-x-4">
                            <Image src="/img/property/cross.svg" width={24} height={24} alt='test' />
                            Not Available
                        </div>
                        :
                        <div className="flex flex-row gap-x-4">
                            <Image src="/img/property/check.svg" width={24} height={24} alt='test' />
                            Available
                        </div>}
                </div>
            </div>
            <PropertyFeatures property={property} />
            <PropertyMap name={property.property_name} />
            <RelatedProperty street={property.street} />
        </div>
    )
}