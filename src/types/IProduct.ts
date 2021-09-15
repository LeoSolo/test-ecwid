export interface IProduct {
  id: number;
  name: string;
  price: string;
  smallThumbnailUrl: string;
  categories: ICategory[];
  categoryIds: number[];
}

export interface ICategory {
  enabled: boolean;
  id: number;
}
