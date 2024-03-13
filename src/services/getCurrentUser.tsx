<<<<<<< HEAD
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
  
||||||| b074513
=======
export default async function getCurrentUser() {
  const response = await fetch(
    "http://localhost:8000/api/v1/user/me/personal-information",
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
>>>>>>> df15c90262049e0e4c2b76616c35e28d9f934767
