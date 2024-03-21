export default async function addUserFavorite(property_id: string) {
  try {
    const response = await fetch(
      "http://localhost:8000/api/v1/property/favorites/" + property_id,
      {
        method: "POST",
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to add favorite");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
