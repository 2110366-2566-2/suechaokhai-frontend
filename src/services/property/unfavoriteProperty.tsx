export default async function unfavoriteProperty(property_id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/v1/properties/favorites/${property_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete favorite");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
