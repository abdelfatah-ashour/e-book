import { IEBook } from "@/@types/model";
import { create } from "zustand";

interface ListEBook {
  loading: boolean;
  loaded: boolean;
  data: IEBook | null;
  error: string | null;
  fetchData: (id: string) => void;
}

export const useBookDetails = create<ListEBook>((set) => ({
  loading: false,
  loaded: false,
  data: null,
  error: "",
  async fetchData(id: string) {
    set(() => ({
      loading: true,
    }));
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/api/v2/storefront/products/${id}`
      );

      const result = await response.json();
      set(() => ({
        loading: false,
        loaded: true,
        data: result.data,
      }));
    } catch (error) {
      console.log("Error", error);
      set(() => ({
        loading: false,
        error: "something went wrong!",
      }));
    }
  },
}));
