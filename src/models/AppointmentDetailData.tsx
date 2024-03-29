interface Image {
    created_at: string;
    url: string;
  }
  
  interface Renting {
    created_at: string;
    is_occupied: boolean;
    price_per_month: number;
  }
  
  interface Selling {
    created_at: string;
    is_sold: boolean;
    price: number;
  }

export default interface AppointmentDetailData {
    appointment_id: string;
    property_id: string;
    owner_user_id: string;
    dweller_user_id: string;
    appointment_date: string;
    address: string;
    alley: string;
    bathrooms: number;
    bedrooms: number;
    country: string;
    created_at: string;
    district: string;
    floor: number;
    floor_size: number;
    floor_size_unit: string;
    furnishing: string;
    images: Image[];
    is_favorite: boolean;
    owner_id: string;
    postal_code: string;
    property_description: string;
    property_name: string;
    property_type: string;
    province: string;
    renting: Renting;
    selling: Selling;
    street: string;
    sub_district: string;
    unit_number: number;
    status: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    profile_image_url: string;
}