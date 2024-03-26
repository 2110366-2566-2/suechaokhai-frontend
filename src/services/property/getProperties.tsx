export default async function getProperties(
  query: string,
  limit: number,
  page: number,
  filter:string
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/v1/properties?query=${query}&limit=${limit}&page=${page}&filter=${filter}`,

      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw new Error("Failed to fetch properties");
  }
}
