import { create } from "zustand";

type State = {
  type: string;
  page: number;
};

type Action = {
  updateType: (firstName: State["type"]) => void;
  updatePage: (lastName: State["page"]) => void;
};

export const useApiParmsStore = create<State & Action>((set) => ({
  type: "all",
  page: 1,
  updateType: (type) => set(() => ({ type: type })),
  updatePage: (page) => set(() => ({ page: page })),
}));
