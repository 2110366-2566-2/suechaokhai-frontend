export default async function getProperties(query:string,limit:number,page:number) {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/properties?query=${query}&limit=${limit}&page=${page}`,
        
        {
          method: "GET",
        }
        
      );
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error("Error fetching properties:", error);
      throw new Error("Failed to fetch properties");
    }
  }
  