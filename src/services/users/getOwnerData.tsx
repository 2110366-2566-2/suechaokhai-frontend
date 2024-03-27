export default async function getOwnerData(ownerId: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/v1/user/${ownerId}`
    );
    const data = await response.json();
    console.log;
    return data;
  } catch (error) {
    console.error("Error fetching owner details:", error);
    throw new Error("Failed to fetch owner details");
  }
}
