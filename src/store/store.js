import create from "zustand";
import { persist } from "zustand/middleware";

const useFishStore = create(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: "profile",
      getStorage: () => sessionStorage,
    }
  )
);
