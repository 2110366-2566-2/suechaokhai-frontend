export default async function userLogin() {
  const response = await fetch("http://localhost:5000/login");
  if (!response.ok) {
    throw new Error("Failed to fetch login");
  }
  return await response.json();
}
