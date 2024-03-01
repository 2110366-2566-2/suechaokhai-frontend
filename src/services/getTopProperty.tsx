export default async function getTopProperty() {
  const response = await fetch("http://localhost:8000/api/v1/properties/top10");
  if (!response.ok) {
    throw new Error("Failed to fetch top 10 properties");
  }
  return await response.json();
}
