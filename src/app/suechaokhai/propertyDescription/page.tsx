"use client";
import PropertyNavigationBar from "@/components/propertyDesc/PropertyNavigationBar";
import PropertyDescription from "../../../components/propertyDesc/PropertyDescription";
import ImageSlider from "@/components/propertyDesc/ImageSlider";
import RoomTourRes from "@/components/propertyDesc/RoomTourRes";
import { Toaster } from "sonner";
import OwnerInfo from "@/components/propertyDesc/OwnerInfo";
import WestIcon from "@mui/icons-material/West";
import PropertyTag from "@/components/propertyDesc/PropertyTag";
import { useEffect, useState } from "react";
import getPropertyDetail from "@/libs/getPropertyDetail";
import getOwnerData from "@/libs/getOwnerData";
import PropertyData from "@/components/models/PropertyData";
import UserData from "@/components/models/UserData";

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
// const propertyOwner = {
//   name: "Thanapat",
//   tel: "789456123",
//   mail: "something@mymail.coom",
//   imgSrc: "/img/Boss.png",
// };
const propertyTag = ["Condomenium", "Sathon", "BTS", "MRT"];

export default function PropertyDescriptionPage() {
  const [property, setProperty] = useState<PropertyData | null>(null);
  const [owner, setOwner] = useState<UserData | null>(null);
  const fetchData = async () => {
    const result = await getPropertyDetail(
      "500aee79-4a97-4797-9495-76f7d290f8db"
    );
    setProperty(result);
    if (result?.owner_id) {
      const ownerResult = await getOwnerData(result.owner_id);
      setOwner(ownerResult);
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
    <div className=" px-[15%] ">
      <div className="flex flex-row items-center ">
        <WestIcon className="mx-3"></WestIcon>
        <div className="m-3 text-3xl font-bold">
          {property?.project_name || ""}
        </div>
      </div>

      <div className="flex flex-row">
        {propertyTag.map((name: string) => (
          <PropertyTag name={name} />
        ))}
      </div>

      {/* <ImageSlider images={property?.images.map((value) => value.url) || []} /> */}
      <ImageSlider images={propertyImages} />
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row">
          <PropertyDescription
            name={property?.project_name || ""}
            features={propertyFeatures}
            price={property?.renting.price_per_month || 0}
            description={property?.description || ""}
            address={propertyAddress}
          />
          <RoomTourRes Property={property?.project_name || ""}></RoomTourRes>
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
