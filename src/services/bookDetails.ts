import { IEBook } from "@/@types/model";
import { create } from "zustand";

interface ListEBook {
  loading: boolean;
  loaded: boolean;
  data: IEBook | null;
  error: string | null;
  onStateFetching: (
    loading: boolean,
    loaded: boolean,
    error: string | null
  ) => void;
  setList: (list: IEBook) => void;
}

export const useBookDetails = create<ListEBook>((set) => ({
  loading: false,
  loaded: false,
  data: null,
  error: "",
  onStateFetching(loading, loaded, error) {
    set(() => ({
      loading,
      loaded,
      error,
    }));
  },
  setList(list) {
    set(() => ({
      data: list,
    }));
  },
}));
