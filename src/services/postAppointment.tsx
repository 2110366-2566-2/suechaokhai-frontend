import AppointmentData from "@/components/models/AppointmentData";

export default async function postAppointment({
  propertyId,
  ownerId,
  dwellerId,
  apptDate
} : {
  propertyId: string | undefined,
  ownerId: string | undefined,
  dwellerId: string,
  apptDate: Date[]
}) {
    const apptISODate = [];
    for (let i = 0; i < apptDate.length; i++) {apptISODate.push(apptDate[i].toISOString().slice(0, -5) + 'Z')}
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/appointments`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
              // property_id: propertyId,
              // owner_user_id: ownerId,
              // dweller_user_id: dwellerId,
              // appointment_date: apptDate,
              property_id: propertyId,
              owner_user_id: ownerId,
              dweller_user_id: dwellerId,
              appointment_dates: apptISODate,     
            })
        }
      );
      if (!response.ok) {
        throw new Error("Failed to post appointment");
      }
      return await response.json()
    } catch (error) {
      console.log(error);
    }
  }
  