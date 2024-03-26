export default async function getCurrentUserRegister() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/v1/user/me/registered`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch current user");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
