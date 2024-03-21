export default async function getOneAppointment(appointmentId: string) {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/appointments/${appointmentId}`
      );
      const data = await response.json();
      console.log;
      return data;
    } catch (error) {
      console.error("Error fetching appointments:", error);
      throw new Error("Failed to fetch appointments");
    }
  }
  