import { FinancialInfo, PersonalInfo } from "@/app/register/page";

export default async function userRegister(
  personalInfo: PersonalInfo,
  financeInfo: FinancialInfo
) {

  const formData = new FormData();
  formData.append('email',personalInfo.email)
  formData.append("password",personalInfo.password)
  formData.append("first_name",personalInfo.firstName)
  formData.append("last_name",personalInfo.lastName)
  formData.append("phone_number",personalInfo.phoneNumber.replace(/[^\d]/g, ""))
  formData.append("profile_image",personalInfo.img)
  formData.append("credit_cardholder_name",financeInfo.name)
  formData.append("credit_card_number",financeInfo.card.replace(/[^\d]/g, ""))
  formData.append("credit_card_expiration_month",financeInfo.month)
  formData.append("credit_card_expiration_year",financeInfo.year)
  formData.append("credit_card_cvv",financeInfo.cvv)
  formData.append("bank_name",financeInfo.bank)
  formData.append("bank_account_number",financeInfo.bankNum.replace(/[^\d]/g, ""))

  console.log(formData.get('email'))

  const response = await fetch("http://localhost:8000/api/v1/register", {
    method: "POST",
    credentials: "include",
    body: formData
  });
  if (!response.ok) {
    throw new Error("Failed to fetch register");
  }
  return await response.json();
}
