// @ts-nocheck
import create from "zustand";
import { persist } from "zustand/middleware";

const useAuthenticate = create(
  persist(
    (set) => ({
      isLogin: false,
      profile: null,
      setLogin: (value) => set({ isLogin: value }),
      setProfile: (value) => set({ profile: value }),
      setToken: (value) => set({ token: value }),
      login: (values) =>
        set({
          isLogin: true,
          profile: values.profile,
        }),
      logout: () =>
        set({
          isLogin: false,
          profile: null,
        }),
    }),
    {
      name: "@authenticate",
    }
  )
);

export default useAuthenticate;
