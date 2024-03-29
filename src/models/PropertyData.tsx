export default interface PropertyImages {
  created_at: string;
  image_url: string;
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
  property_images: PropertyImages[];
  is_favorite: boolean;
  owner_id: string;
  postal_code: string;
  property_description: string;
  property_id: string;
  property_name: string;
  property_type: string;
  province: string;
  renting_property: Renting;
  selling_property: Selling;
  street: string;
  sub_district: string;
  unit_number: number;
}
