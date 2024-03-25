export default async function verifyCurrentUser(verification: FormData) {
  try {
    const response = await fetch(
      `http://localhost:8000/api/v1/user/me/verify`,
      {
        method: "POST",
        credentials: "include",
        body: verification,
      }
    );
    if (!response.ok) {
      throw new Error("Failed to verify user");
    }
    const verify = await response.json();
    return verify;
  } catch (error) {
    console.error("Error verifying user:", error);
    throw error;
  }
}
