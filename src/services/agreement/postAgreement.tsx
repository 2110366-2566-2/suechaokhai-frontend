import AgreementData from "@/models/AgreementData";

export default async function postAgreement({
  propertyId,
  ownerId,
  dwellerId,
  agreementDate,
  depositAmt,
  rentFee,
  rentalDuration
} : {
  propertyId: string | undefined,
  ownerId: string | undefined,
  dwellerId: string,
  agreementDate: string,
  depositAmt: number,
  rentFee: number,
  rentalDuration: number 
}) {
    // const apptISODate = apptDate.toISOString()
    // console.log(apptISODate)
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/agreements`, {
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
              agreement_date: agreementDate,
              // appointment_dates: apptDate,
              depositAmt: depositAmt,
              rentFee: rentFee,
              rentalDuration: rentalDuration
            })
        }
      );
      if (!response.ok) {
        throw new Error("Failed to post agreement");
      }
      return await response.json()
    } catch (error) {
      console.log(error);
    }
  }
  