export default async function getCurrentUser() {
<<<<<<< HEAD
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
=======
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
  
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
