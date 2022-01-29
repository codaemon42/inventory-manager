export interface Inventory{
		id: number;
		username: string;
		title: string;
		description: string;
		type: string;
		product_id: number;
		product_uuid: string;
		product_title: string;
		variant_id: number;
		variant_title: string;
		catalog_id: number;
		catalog_title: string;
		unit_price: number;
		quantity: number;
		created_at: string;
		modified_at: string;
}

export interface InventoryRes{
  success: boolean;
  data: {
    page: number;
    result: Inventory[];
  };
  message: string;
}
