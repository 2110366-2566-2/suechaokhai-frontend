export default async function userLogout() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/v1/logout`,
      {
        method: "POST",
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch logout");
    }
    return await response;
  } catch (error) {
    console.error(error);
  }
}
