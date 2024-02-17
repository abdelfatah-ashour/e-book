import { IEBook } from "@/@types/model";
import { create } from "zustand";

interface ListEBook {
  loading: boolean;
  loaded: boolean;
  data: IEBook[];
  error: string | null;
  onStateFetching: (
    loading: boolean,
    loaded: boolean,
    error: string | null
  ) => void;
  setList: (list: IEBook[]) => void;
}

export const useListEBook = create<ListEBook>((set) => ({
  loading: false,
  loaded: false,
  data: [],
  error: "",
  onStateFetching(loading: boolean, loaded: boolean, error: string | null) {
    set(() => ({
      loading,
      loaded,
      error,
    }));
  },
  setList(list) {
    console.log("list", list);

    set(() => ({
      data: list,
    }));
  },
}));
