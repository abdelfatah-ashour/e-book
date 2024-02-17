import { IEBook } from "@/@types/model";
import { create } from "zustand";

interface ListEBook {
  loading: boolean;
  loaded: boolean;
  data: IEBook[];
  error: string | null;
  fetchData: () => void;
}

export const useListEBook = create<ListEBook>((set) => ({
  loading: false,
  loaded: false,
  data: [],
  error: "",
  async fetchData() {
    set(() => ({
      loading: true,
    }));

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_API_URL
        }/api/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book`
      );

      const result = await response.json();
      set(() => ({
        loading: false,
        loaded: true,
        data: result.data,
      }));
    } catch (error) {
      console.log("Error: ", error);
      set(() => ({
        loading: false,
        error: "something went wrong!",
      }));
    }
  },
}));
