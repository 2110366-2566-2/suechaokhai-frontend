import { FinancialInfo, PersonalInfo } from "@/app/register/page";

export default async function userRegister(
  personalInfo: PersonalInfo,
  financeInfo: FinancialInfo
) {
  const response = await fetch("http://localhost:8000/api/v1/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email: personalInfo.email,
      password: personalInfo.password,
      first_name: personalInfo.firstName,
      last_name: personalInfo.lastName,
      phone_number: personalInfo.phoneNumber.replace(/[^\d]/g, ""),
      profile_image_url: "",
      credit_cardholder_name: financeInfo.name,
      credit_card_number: financeInfo.card.replace(/[^\d]/g, ""),
      credit_card_expiration_month: financeInfo.month,
      credit_card_expiration_year: financeInfo.year,
      credit_card_cvv: financeInfo.cvv,
      bank_name: financeInfo.bank,
      bank_account_number: financeInfo.bankNum.replace(/[^\d]/g, ""),
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch register");
  }
  return await response.json();
}
