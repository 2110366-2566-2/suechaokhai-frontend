export default interface PropertyData {
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
  images: {
    created_at: string;
    url: string;
  };
  owner_id: string;
  postal_code: string;
  propertyId: string;
  property_description: string;
  property_name: string;
  property_type: string;
  province: string;
  renting: {
    created_at: string;
    is_occupied: boolean;
    price_per_month: number;
  };
  selling: {
    created_at: string;
    is_sold: boolean;
    price: number;
  };
  street: string;
  sub_district: string;
  unit_number: number;
}
