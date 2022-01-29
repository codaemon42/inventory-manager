export interface Accounts {
		id: number;
		product_id: number;
		product_title: string;
		variant_id: number;
		variant_title: string;
		catalog_id: number;
		catalog_title: string;
		total_price: number;
		total_quantity: number;
		created_at: string;
		modified_at: string;
}

export interface AccountsRes {
  success: boolean;
  data: {
    page: number;
    result: Accounts[];
  };
  message: string;
}
