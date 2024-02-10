export default async function userLogin(
  userEmail: string,
  userPassword: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("http://localhost:8000/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch login");
  }
  return await response.json();
}
