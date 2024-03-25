export default async function getPropertyDetail(propertyId: string) {
  try {
    const response = await fetch(
      `http://localhost:8000/api/v1/property/${propertyId}`
    );
    const data = await response.json();
    console.log;
    return data;
  } catch (error) {
    console.error("Error fetching property details:", error);
    throw new Error("Failed to fetch property details");
  }
}
