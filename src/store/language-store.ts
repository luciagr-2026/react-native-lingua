import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { LanguageCode } from "../../types/learning";

type LanguageState = {
  selectedLanguageId: LanguageCode | null;
  hasHydrated: boolean;
  setSelectedLanguageId: (id: LanguageCode) => void;
  clearSelectedLanguageId: () => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguageId: null,
      hasHydrated: false,
      setSelectedLanguageId: (id) => set({ selectedLanguageId: id }),
      clearSelectedLanguageId: () => set({ selectedLanguageId: null }),
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ selectedLanguageId: state.selectedLanguageId }),
    }
  )
);

// Runs after `create()` returns, so it's safe to reference `useLanguageStore` here.
// `onFinishHydration` fires whether hydration succeeds or fails, which keeps the
// app from getting stuck on a blank screen if AsyncStorage read throws.
useLanguageStore.persist.onFinishHydration(() => {
  useLanguageStore.setState({ hasHydrated: true });
});

if (useLanguageStore.persist.hasHydrated()) {
  useLanguageStore.setState({ hasHydrated: true });
}
