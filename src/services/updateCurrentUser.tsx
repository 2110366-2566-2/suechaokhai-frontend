export default async function updateCurrentUser(updatedUserData: FormData) {
  try {
    const response = await fetch(`http://localhost:8000/api/v1/user/me/personal-information`, {
      method: "PUT",
      credentials: "include",
      body: updatedUserData,
    });
    if (!response.ok) {
      throw new Error("Failed to fetch update current user data");
    }
    const updatedUser = await response.json();
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}
