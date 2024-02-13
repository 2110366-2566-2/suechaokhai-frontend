export default async function getOwnerData(ownerId: string) {
  try {
    const response = await fetch(
      `http://localhost:8000/api/v1/user/${ownerId}`
    );
    const data = await response.json();
    console.log;
    return data;
  } catch (error) {
    console.error("Error fetching owner details:", error);
    throw new Error("Failed to fetch owner details");
  }
}
