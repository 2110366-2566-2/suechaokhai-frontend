export default async function getCurrentUser() {
<<<<<<< HEAD
    const response = await fetch(
      "http://localhost:8000/api/v1/user/me",
=======
  try {
    const response = await fetch(
      "http://localhost:8000/api/v1/user/me/personal-information",
>>>>>>> dev
      {
        method: "GET",
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch current user");
    }
    return await response.json();
<<<<<<< HEAD
  }
  
=======
  } catch (error) {
    console.error(error);
  }
}
>>>>>>> dev
