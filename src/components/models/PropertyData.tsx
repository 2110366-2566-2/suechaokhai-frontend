<<<<<<< HEAD
export default interface PropertyData {
  owner_id: string;
  description: string;
  images: any[];
  project_name: string;
  // address
  address: string;
  alley: string;
  street: string;
  district: string;
  sub_district: string;
  province: string;
  postal_code: string;
  // tags
  residental_type: string;
  renting: {
    price_per_month: number;
  };
}
||||||| b074513
=======
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
>>>>>>> df15c90262049e0e4c2b76616c35e28d9f934767
