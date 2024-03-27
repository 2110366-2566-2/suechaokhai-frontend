import { PersonalInfo } from "@/app/(auth)/register/page";

export default async function userRegister(personalInfo: PersonalInfo) {
  const formData = new FormData();
  formData.append("registered_type", personalInfo.registered_type);
  formData.append("email", personalInfo.email);
  formData.append("password", personalInfo.password);
  formData.append("first_name", personalInfo.firstName);
  formData.append("last_name", personalInfo.lastName);
  formData.append(
    "phone_number",
    personalInfo.phoneNumber.replace(/[^\d]/g, "")
  );
  formData.append("profile_image", personalInfo.img);

  console.log(personalInfo.img);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/v1/register`,
      {
        method: "POST",
        credentials: "include",
        body: formData,
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch register");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}