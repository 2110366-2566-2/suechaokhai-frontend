import PropertyDescription from "../components/PropertyDescription";

// Mock data
const propertyDescription = "A beautiful property with amazing features...";
const propertyAddress = "123 Main St, Cityville, State, Country";
const propertyPrice = 25000;
const propertyFeature = "1 Bedroom";
const propertyIcon = "Bedroom";
const propertyLatitude = 40.7128; // Replace with actual latitude
const propertyLongitude = -74.006; // Replace with actual longitude

export default function PropertyDescriptionPage() {
  return (
    <PropertyDescription
      price={propertyPrice}
      description={propertyDescription}
      address={propertyAddress}
    />
  );
}
