export default async function UpdateAppointmentStatus({
    appointmentId, 
    status
} : {
    appointmentId: string,
    status: string
}) {
    try {
        const response = await fetch(
            `http://localhost:8000/api/v1/appointments/${appointmentId}`, {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify({
                    status: status
                })
            }
        );
        if (!response.ok) {
            throw new Error("Error updating appointment status");
        }
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}