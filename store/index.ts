import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type NGOStore = {
  ngo: {};
  isLogin: boolean;
  loginNgo: (data: any) => void;
  logoutNgo: () => void;
};

const useStore = create<NGOStore>()(
  persist(
    (set, get) => ({
      ngo: {},
      isLogin: false,
      loginNgo: (data: any) => set({ isLogin: true, ngo: data }),
      logoutNgo: () => set({ isLogin: false, ngo: {} }),
    }),
    {
      name: "ngo-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useStore;
