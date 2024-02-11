export default async function getCurrentUser() {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    "http://localhost:8000/api/v1/user/me/registered",
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
