export type Product = {
  id: string;
  name: string;
  value: number;
  created: Date;
  updated: Date;
};

export type ProductInput = Omit<Product, "id" | "created" | "updated">;

export type ProductCreate = {
  name: string;
  value: number;
};
