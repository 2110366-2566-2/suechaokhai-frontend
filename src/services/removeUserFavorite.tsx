export default async function deleteUserFavorite(property_id: string) {
  const response = await fetch(
    "http://localhost:8000/api/v1/property/favorites/" + property_id,
    {
      method: "DELETE",
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to delete favorite");
  }
  return await response.json();
}
