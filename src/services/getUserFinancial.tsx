export default async function getUserFinancial() {
  try {
    const response = await fetch(
      "http://localhost:8000/api/v1/user/me/financial-information",
      {
        method: "GET",
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user financial information");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
