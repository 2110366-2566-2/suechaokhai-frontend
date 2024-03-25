export default async function sendVerification(emails: string[]) {
  try {
    const response = await fetch("http://localhost:8000/api/v1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emails: emails }),
    });
    if (!response.ok) {
      throw new Error("Failed to send email");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
