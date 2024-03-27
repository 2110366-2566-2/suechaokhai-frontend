import PropertyData from "@/models/PropertyData"
export default async function updateProperty(propData: PropertyData) {

  const formData = new FormData();

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/v1/properties/${propData.property_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Failed to update property");
    }
    return await response.json();
  } catch (error) {
    console.error("Error updateing property details:", error);
    throw new Error("Failed to update property details");
  }
}
