export type ProduitData = {
  product: {
    image_front_small_url: string;
    nutriments: {
      fat_100g: number;
      salt_100g: number;
      "saturated-fat_100g": number;
      sodium_100g: number;
    };
    nutriscore_grade: string;
    ecoscore_data: { grade: string };
    nova_groups: string;
  };
  status: number;
};
