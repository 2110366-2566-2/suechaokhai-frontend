export default async function updateUserFinancial(data: any) {
  console.log(data);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/v1/user/me/financial-information`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bank_account_number: data.bank_account_number,
          bank_name: data.bank_name,
          credit_cards: data.credit_cards,
        }),
        credentials: "include",
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
