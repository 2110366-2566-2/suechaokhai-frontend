<<<<<<< HEAD
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

export default interface PropertyData {
=======
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
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
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
  property_id: string;
  property_name: string;
  property_type: string;
  province: string;
  renting: Renting;
  selling: Selling;
  street: string;
  sub_district: string;
  unit_number: number;
}
<<<<<<< HEAD

=======
>>>>>>> df15c90262049e0e4c2b76616c35e28d9f934767
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
