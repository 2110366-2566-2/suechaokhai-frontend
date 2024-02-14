export default async function getCurrentUser() {
    const response = await fetch(
      "http://localhost:8000/api/v1/user/me",
      {
        method: "GET",
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch current user");
    }
    return await response.json();
  }
  