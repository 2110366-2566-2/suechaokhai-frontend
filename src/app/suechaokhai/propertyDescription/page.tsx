"use client";
import PropertyNavigationBar from "@/components/propertyDesc/PropertyNavigationBar";
import PropertyDescription from "../../../components/propertyDesc/PropertyDescription";
import ImageSlider from "@/components/propertyDesc/ImageSlider";
import RoomTourRes from "@/components/propertyDesc/RoomTourRes";
import { Toaster} from 'sonner'
import OwnerInfo from "@/components/propertyDesc/OwnerInfo";
import WestIcon from '@mui/icons-material/West';
import PropertyTag from "@/components/propertyDesc/PropertyTag";

// Mock data
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
const propertyOwner = {
  name:"Thanapat",
  tel:"789456123",
  mail:"something@mymail.coom",
  imgSrc:"/img/Boss.png"
};
const propertyTag = [
  "Condomenium",
  "Sathon",
  "BTS",
  "MRT"
]

export default function PropertyDescriptionPage() {
  return (
    <div className="px-40">
      
      <div className="flex flex-row items-center ">
        <WestIcon className="mx-3"></WestIcon>
        <div className="text-3xl font-bold m-3">{propertyName}</div>
      </div>

      <div className="flex flex-row">
        {propertyTag.map((name:string)=>(
          <PropertyTag name={name}/>
        ))}
      </div>

      <ImageSlider images={propertyImages} />
      <div className="flex flex-row">
        <PropertyDescription
          name={propertyName}
          features={propertyFeatures}
          price={propertyPrice}
          description={propertyDescription}
          address={propertyAddress}
        />

        <RoomTourRes Property={propertyName}></RoomTourRes>
      </div>
      <OwnerInfo {...propertyOwner}></OwnerInfo>
        
      <Toaster richColors></Toaster>
    </div>
  );
}
