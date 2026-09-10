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
  completedLessonIds: string[];
  hasHydrated: boolean;
  completeTodayPlanItem: (item: keyof TodayPlanCompletion, xpReward: number) => void;
  completeLesson: (lessonId: string, xpReward: number) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};

// Mock progress so the lessons list has something to show before real lesson
// completion is wired up (see prompt 12 — the audio lesson screen).
const DEFAULT_COMPLETED_LESSON_IDS = [
  "es-unit-1-lesson-1",
  "es-unit-1-lesson-2",
  "fr-unit-1-lesson-1",
  "fr-unit-1-lesson-2",
  "it-unit-1-lesson-1",
  "it-unit-1-lesson-2",
];

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      streakCount: 12,
      xpEarnedToday: 15,
      dailyGoalXp: 20,
      todayPlanCompleted: { lesson: true, aiConversation: false, newWords: false },
      completedLessonIds: DEFAULT_COMPLETED_LESSON_IDS,
      hasHydrated: false,
      completeTodayPlanItem: (item, xpReward) =>
        set((state) => {
          if (state.todayPlanCompleted[item]) return state;
          return {
            todayPlanCompleted: { ...state.todayPlanCompleted, [item]: true },
            xpEarnedToday: state.xpEarnedToday + xpReward,
          };
        }),
      completeLesson: (lessonId, xpReward) =>
        set((state) => {
          if (state.completedLessonIds.includes(lessonId)) return state;
          return {
            completedLessonIds: [...state.completedLessonIds, lessonId],
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
        completedLessonIds: state.completedLessonIds,
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
