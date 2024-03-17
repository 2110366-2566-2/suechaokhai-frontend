export default async function getTopProperty() {
  try {
    const response = await fetch(
      "http://localhost:8000/api/v1/properties/top10"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
