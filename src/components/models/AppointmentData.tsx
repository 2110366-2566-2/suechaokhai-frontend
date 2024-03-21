// export default interface AppointmentData {
//     propertyImgSrc: string;
//     propertyName: string;
//     propertySubName: string;
//     ownerImgSrc: string;
//     ownerName: string;
//     date: string;
//     time: string;
//     status: string;
// }

export default interface AppointmentData {
    appointment_id: string;
    property_id: string;
    owner_user_id: string;
    dweller_user_id: string;
    appointment_date: string;   
    status: string;
}