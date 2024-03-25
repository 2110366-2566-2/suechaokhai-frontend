"use client";
import PropertyNavigationBar from "@/components/property-description/PropertyNavigationBar";
import PropertyDescription from "@/components/property-description/PropertyDescription";
import ImageSlider from "@/components/property-description/ImageSlider";
import RoomTourRes from "@/components/property-description/RoomTourRes";
import { Toaster } from "sonner";
import OwnerInfo from "@/components/property-description/OwnerInfo";
import WestIcon from "@mui/icons-material/West";
import PropertyTag from "@/components/property-description/PropertyTag";
import { useEffect, useState } from "react";
import getPropertyDetail from "@/services/property/getPropertyDetail";
import getOwnerData from "@/services/getOwnerData";
import PropertyData from "@/models/PropertyData";
import UserData from "@/components/models/UserData";
import getCurrentUser from "@/services/getCurrentUser";
import { useParams } from "next/navigation";
// Mock property
type FeatureProps = {
  icon: string;
  feature: string;
};

const propertyName = "Wishdom Sathorn 90 ";
const propertyFeatures: Array<FeatureProps> = [
  { icon: "bed", feature: "2 Bedroom" },
  { icon: "shower", feature: "2 Bathroom" },
  { icon: "square_foot", feature: "38 sqm" },
];
const propertyDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const propertyAddress =
  "Ratchadaphisek Rd, Dao Khanong, Thon Buri, Bangkok 10600";
const propertyPrice = 25000;
const propertyFeature = "1 Bedroom";
const propertyIcon = "Bedroom";
const propertyLatitude = 40.7128; // Replace with actual latitude
const propertyLongitude = -74.006; // Replace with actual longitude
const propertyImages = [
  "/img/Property.png",
  "/img/Boss.png",
  "/img/arthur.JPG",
  "/img/babywinsmoking.JPG",
];
const propertyTag = ["Condomenium", "Sathon", "BTS", "MRT"];
export default function PropertyDescriptionPage() {
  const params = useParams<{ tag: string; item: string; id: string }>();
  const [property, setProperty] = useState<PropertyData | null>(null);
  const [owner, setOwner] = useState<UserData | null>(null);
  const fetchData = async () => {
    const result = await getPropertyDetail(params.id);
    setProperty(result);
    if (result?.owner_id) {
      const ownerResult = await getOwnerData(result.owner_id);
      setOwner(ownerResult);
    }
    if (result.code == 400) {
      window.location.href = "/404";
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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
    <div className=" px-[5%] sm:px-[15%] ">
      <div className="flex flex-row items-center ">
        <WestIcon className="mx-3"></WestIcon>
        <div className="m-3 text-3xl font-bold">
          {property?.project_name || ""}
        </div>
      </div>

      <div className="flex flex-row">
        {propertyTag.map((name: string) => (
          <PropertyTag name={name} key={name} />
        ))}
      </div>

      <ImageSlider images={property?.images.map((value) => value.url) || []} />
      {/* <ImageSlider images={propertyImages} /> */}
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row">
          <PropertyDescription
            name={property?.project_name || ""}
            features={propertyFeatures}
            price={property?.renting.price_per_month || 0}
            description={property?.description || ""}
            address={propertyAddress}
          />
          <div className="lg:ml-auto">
            <RoomTourRes Property={property?.project_name || ""}></RoomTourRes>
          </div>
        </div>
        <OwnerInfo
          name={(owner?.first_name || "") + " " + (owner?.last_name || "")}
          tel={owner?.phone_number || ""}
          mail={owner?.email || ""}
          imgSrc={owner?.profile_image_url || ""}
        ></OwnerInfo>
      </div>

      <Toaster richColors></Toaster>
    </div>
  );
}
