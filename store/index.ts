import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type NGOStore = {
  ngo: {};
  footer: {};
  isLogin: boolean;
  loginNgo: (data: any) => void;
  logoutNgo: () => void;
};

const useStore = create<NGOStore>()(
  persist(
    (set, get) => ({
      ngo: {},
      footer: {},
      isLogin: false,
      setFooter: (data: any) => set({ footer: data }),
      loginNgo: (data: any) => set({ isLogin: true, ngo: data }),
      logoutNgo: () => set({ isLogin: false, ngo: {} }),
    }),
    {
      name: "ngo-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
