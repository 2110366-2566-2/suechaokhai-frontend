export default async function userLogout() {
  try {
    const response = await fetch("http://localhost:8000/api/v1/logout", {
      method: "POST",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch logout");
    }
    return await response;
  } catch (error) {
    console.error(error);
  }
}
