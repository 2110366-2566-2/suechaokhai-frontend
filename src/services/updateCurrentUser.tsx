export default async function updateCurrentUser(
  updatedUserData: any,
  userId: string
) {
  try {
    const response = await fetch(
      `http://localhost:8000/api/v1/user/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserData),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch update user data");
    }
    const updatedUser = await response.json();
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}
