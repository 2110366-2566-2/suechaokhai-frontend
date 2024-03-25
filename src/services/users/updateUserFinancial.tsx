export default async function updateUserFinancial(data: any) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/v1/user/me/financial-information`,
      {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to update current user financial data");
    }
    const updatedUser = await response.json();
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}
