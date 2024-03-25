export default async function getOneAppointment(appointmentId: string) {
    try {
      console.log(appointmentId)
      const response = await fetch(
        `http://localhost:8000/api/v1/appointments/${appointmentId}`,
        {
          method: "GET",
          credentials: "include"
        }
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching appointments:", error);
      throw new Error("Failed to fetch appointments");
    }
  }
  