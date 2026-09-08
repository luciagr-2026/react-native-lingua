import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

/** Today's fixed learning checklist. A new day's plan is generated from the current lesson. */
type TodayPlanCompletion = {
  lesson: boolean;
  aiConversation: boolean;
  newWords: boolean;
};

type ProgressState = {
  streakCount: number;
  xpEarnedToday: number;
  dailyGoalXp: number;
  todayPlanCompleted: TodayPlanCompletion;
  hasHydrated: boolean;
  completeTodayPlanItem: (item: keyof TodayPlanCompletion, xpReward: number) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      streakCount: 12,
      xpEarnedToday: 15,
      dailyGoalXp: 20,
      todayPlanCompleted: { lesson: true, aiConversation: false, newWords: false },
      hasHydrated: false,
      completeTodayPlanItem: (item, xpReward) =>
        set((state) => {
          if (state.todayPlanCompleted[item]) return state;
          return {
            todayPlanCompleted: { ...state.todayPlanCompleted, [item]: true },
            xpEarnedToday: state.xpEarnedToday + xpReward,
          };
        }),
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      name: "progress-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        streakCount: state.streakCount,
        xpEarnedToday: state.xpEarnedToday,
        dailyGoalXp: state.dailyGoalXp,
        todayPlanCompleted: state.todayPlanCompleted,
      }),
    }
  )
);

useProgressStore.persist.onFinishHydration(() => {
  useProgressStore.setState({ hasHydrated: true });
});

if (useProgressStore.persist.hasHydrated()) {
  useProgressStore.setState({ hasHydrated: true });
}
