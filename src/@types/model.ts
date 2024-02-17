export interface IEBook {
  id: string;
  type: string;
  attributes: {
    name: string;
    description: null | string;
    available_on: Date;
    slug: string;
    meta_description: unknown | null;
    meta_keywords: unknown | null;
    updated_at: Date;
    sku: string;
    public_metadata: unknown;
    purchasable: boolean;
    in_stock: boolean;
    backorderable: boolean;
    available: boolean;
    currency: string;
    price: number;
    display_price: string;
    compare_at_price: string;
    display_compare_at_price: string;
    product_type: string;
    avg_review: number;
    num_of_reviews: number;
    book: {
      type: string;
      id: number;
      title: string;
      description: string;
      image_url: string;
      num_of_pages: number;
      num_of_chapters: number;
      product_id: number;
      created_at: Date;
      updated_at: Date;
    };
    is_available_to_purchase: boolean;
    is_purchased_by_current_user: boolean;
    is_added_to_cart_by_current_user: boolean;
  };
  relationships: {
    variants: {
      data: [];
    };
    option_types: {
      data: [];
    };
    product_properties: {
      data: [];
    };
    taxons: {
      data: [];
    };
    images: {
      data: [];
    };
    default_variant: {
      data: {
        id: string;
        type: string;
      };
    };
    primary_variant: {
      data: {
        id: string;
        type: string;
      };
    };
  };
}
