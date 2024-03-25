import AppointmentData from "@/components/models/AppointmentData";

export default async function postAppointment({
  propertyId,
  ownerId,
  dwellerId,
  apptDate,
  message
} : {
  propertyId: string | undefined,
  ownerId: string | undefined,
  dwellerId: string,
  apptDate: string,
  message: string
}) {
    // const apptISODate = apptDate.toISOString()
    // console.log(apptISODate)
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
              appointment_dates: apptDate,
              // appointment_dates: apptDate,
              note: message
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
  