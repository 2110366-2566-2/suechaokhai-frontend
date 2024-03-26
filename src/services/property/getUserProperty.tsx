export default async function getUserProperty(limit: number, page: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/v1/user/me/properties?limit=${limit}&page=${page}`,

      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching property details:", error);
    throw new Error("Failed to fetch property details");
  }
}
