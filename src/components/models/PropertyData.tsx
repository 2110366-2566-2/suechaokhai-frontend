export default interface PropertyData {
  PropertyId: string;
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
