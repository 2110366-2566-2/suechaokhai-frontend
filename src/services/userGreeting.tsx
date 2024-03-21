export default async function userGreeting() {
  try {
    const response = await fetch("http://localhost:8000/api/v1/user/greeting", {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch greeting");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
