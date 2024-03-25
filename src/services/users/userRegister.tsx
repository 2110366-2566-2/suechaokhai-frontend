<<<<<<< HEAD
import { PersonalInfo } from "@/app/(auth)/register/page";

export default async function userRegister(personalInfo: PersonalInfo) {
  const formData = new FormData();
<<<<<<< HEAD
  formData.append("registered_type", personalInfo.registered_type);
=======
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
  formData.append("email", personalInfo.email);
  formData.append("password", personalInfo.password);
  formData.append("first_name", personalInfo.firstName);
  formData.append("last_name", personalInfo.lastName);
  formData.append(
    "phone_number",
    personalInfo.phoneNumber.replace(/[^\d]/g, "")
  );
  formData.append("profile_image", personalInfo.img);

<<<<<<< HEAD
  console.log(personalInfo.img);
=======
  console.log(formData.get("email"));
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4

  const response = await fetch("http://localhost:8000/api/v1/register", {
    method: "POST",
    credentials: "include",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Failed to fetch register");
  }
  return await response.json();
}
||||||| b074513
=======
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
    const response = await fetch("http://localhost:8000/api/v1/register", {
      method: "POST",
      credentials: "include",
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Failed to fetch register");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
<<<<<<< HEAD
  return await response.json();
}
>>>>>>> df15c90262049e0e4c2b76616c35e28d9f934767
=======
}
>>>>>>> dev
