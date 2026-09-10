/** Shared types for the hardcoded learning content system (languages, units, lessons). */

export type LanguageCode = "es" | "fr" | "it";

export interface Language {
  id: LanguageCode;
  name: string;
  nativeName: string;
  flagEmoji: string;
  color: string;
  isAvailable: boolean;
}

export interface Unit {
  id: string;
  languageId: LanguageCode;
  order: number;
  title: string;
  description: string;
  color: string;
  icon: string;
  imageUrl: string;
}

export type ActivityType =
  | "multiple-choice"
  | "translate"
  | "match-pairs"
  | "fill-blank"
  | "listen-select";

export interface ActivityOption {
  id: string;
  text: string;
}

export interface Activity {
  id: string;
  type: ActivityType;
  prompt: string;
  options?: ActivityOption[];
  correctOptionId?: string;
  correctAnswer?: string;
  audioUrl?: string;
  imageUrl?: string;
}

export interface VocabularyItem {
  id: string;
  word: string;
  translation: string;
  partOfSpeech?: "noun" | "verb" | "adjective" | "phrase" | "other";
  audioUrl?: string;
  imageUrl?: string;
}

export interface Phrase {
  id: string;
  text: string;
  translation: string;
  audioUrl?: string;
}

export type LessonGoal = string;

/**
 * Prompt context for a future audio-based Vision Agent AI teacher.
 * `systemPrompt` sets the teacher persona/rules; `contextPrompt` summarizes
 * this specific lesson's content so the agent can teach it in real time.
 */
export interface AITeacherPrompt {
  systemPrompt: string;
  contextPrompt: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  order: number;
  title: string;
  xpReward: number;
  goals: LessonGoal[];
  vocabulary: VocabularyItem[];
  phrases: Phrase[];
  activities: Activity[];
  aiTeacherPrompt: AITeacherPrompt;
}
