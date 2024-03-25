export default async function deleteProperty(property_id:string) {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/properties/${property_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        
      });
      if (!response.ok) {
        throw new Error("Failed to fav a property");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
  