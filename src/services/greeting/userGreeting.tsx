export default async function userGreeting() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/v1/user/greeting`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch greeting");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
