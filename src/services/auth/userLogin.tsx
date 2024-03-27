export default async function userLogin(
  userEmail: string,
  userPassword: string
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/v1/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch login");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
