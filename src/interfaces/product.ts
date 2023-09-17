interface IKeyFeatures {
  brand: string;
  model: string;
  specification?: Record<string, unknown>[];
  port?: string;
  type?: string;
  resolution?: string;
  voltage?: string;
}

interface IReview {
  email: string;
  rating: number;
  comment: string;
}

type IProduct = {
  image: string;
  product_name: string;
  category:
    | "cpu_or_processor"
    | "motherboard"
    | "ram"
    | "power_supply_unit"
    | "storage_device"
    | "monitor"
    | "others";
  status: "In Stock" | "Out Of Stock";
  price: number;
  description: string;
  key_features: IKeyFeatures;
  individual_rating: number[];
  reviews: IReview[];
  id?: string;
};

export type { IProduct };
