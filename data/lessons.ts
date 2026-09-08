import type { Lesson } from "../types/learning";

export const lessons: Lesson[] = [
  {
    id: "es-unit-1-lesson-1",
    unitId: "es-unit-1",
    order: 1,
    title: "Hello",
    xpReward: 10,
    goals: [
      "Greet someone in Spanish",
      "Introduce yourself with 'me llamo'",
      "Say goodbye",
    ],
    vocabulary: [
      { id: "es-v1", word: "hola", translation: "hello", partOfSpeech: "phrase" },
      { id: "es-v2", word: "adiós", translation: "goodbye", partOfSpeech: "phrase" },
      { id: "es-v3", word: "sí", translation: "yes", partOfSpeech: "other" },
      { id: "es-v4", word: "no", translation: "no", partOfSpeech: "other" },
      { id: "es-v5", word: "el hombre", translation: "the man", partOfSpeech: "noun" },
      { id: "es-v6", word: "la mujer", translation: "the woman", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "es-p1", text: "Hola, ¿cómo estás?", translation: "Hello, how are you?" },
      { id: "es-p2", text: "Me llamo Ana.", translation: "My name is Ana." },
      { id: "es-p3", text: "Mucho gusto.", translation: "Nice to meet you." },
    ],
    activities: [
      {
        id: "es-a1",
        type: "multiple-choice",
        prompt: "Which word means 'hello'?",
        options: [
          { id: "opt-1", text: "adiós" },
          { id: "opt-2", text: "hola" },
          { id: "opt-3", text: "no" },
        ],
        correctOptionId: "opt-2",
      },
      {
        id: "es-a2",
        type: "translate",
        prompt: "Translate: 'goodbye'",
        correctAnswer: "adiós",
      },
      {
        id: "es-a3",
        type: "fill-blank",
        prompt: "Me ___ Ana. (My name is Ana.)",
        correctAnswer: "llamo",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging Spanish teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers basic Spanish greetings: hola, adiós, sí, no, and the phrase 'me llamo' for introducing yourself. Guide the student through greeting you, introducing themselves, and saying goodbye.",
    },
  },
  {
    id: "fr-unit-1-lesson-1",
    unitId: "fr-unit-1",
    order: 1,
    title: "Hello",
    xpReward: 10,
    goals: [
      "Greet someone in French",
      "Introduce yourself with 'je m'appelle'",
      "Say goodbye",
    ],
    vocabulary: [
      { id: "fr-v1", word: "bonjour", translation: "hello", partOfSpeech: "phrase" },
      { id: "fr-v2", word: "au revoir", translation: "goodbye", partOfSpeech: "phrase" },
      { id: "fr-v3", word: "oui", translation: "yes", partOfSpeech: "other" },
      { id: "fr-v4", word: "non", translation: "no", partOfSpeech: "other" },
      { id: "fr-v5", word: "l'homme", translation: "the man", partOfSpeech: "noun" },
      { id: "fr-v6", word: "la femme", translation: "the woman", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "fr-p1", text: "Bonjour, comment ça va?", translation: "Hello, how are you?" },
      { id: "fr-p2", text: "Je m'appelle Léo.", translation: "My name is Léo." },
      { id: "fr-p3", text: "Enchanté.", translation: "Nice to meet you." },
    ],
    activities: [
      {
        id: "fr-a1",
        type: "multiple-choice",
        prompt: "Which word means 'hello'?",
        options: [
          { id: "opt-1", text: "au revoir" },
          { id: "opt-2", text: "non" },
          { id: "opt-3", text: "bonjour" },
        ],
        correctOptionId: "opt-3",
      },
      {
        id: "fr-a2",
        type: "translate",
        prompt: "Translate: 'goodbye'",
        correctAnswer: "au revoir",
      },
      {
        id: "fr-a3",
        type: "fill-blank",
        prompt: "Je m'___ Léo. (My name is Léo.)",
        correctAnswer: "appelle",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging French teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers basic French greetings: bonjour, au revoir, oui, non, and the phrase 'je m'appelle' for introducing yourself. Guide the student through greeting you, introducing themselves, and saying goodbye.",
    },
  },
  {
    id: "it-unit-1-lesson-1",
    unitId: "it-unit-1",
    order: 1,
    title: "Hello",
    xpReward: 10,
    goals: [
      "Greet someone in Italian",
      "Introduce yourself with 'mi chiamo'",
      "Say goodbye",
    ],
    vocabulary: [
      { id: "it-v1", word: "ciao", translation: "hello", partOfSpeech: "phrase" },
      { id: "it-v2", word: "arrivederci", translation: "goodbye", partOfSpeech: "phrase" },
      { id: "it-v3", word: "sì", translation: "yes", partOfSpeech: "other" },
      { id: "it-v4", word: "no", translation: "no", partOfSpeech: "other" },
      { id: "it-v5", word: "l'uomo", translation: "the man", partOfSpeech: "noun" },
      { id: "it-v6", word: "la donna", translation: "the woman", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "it-p1", text: "Ciao, come stai?", translation: "Hello, how are you?" },
      { id: "it-p2", text: "Mi chiamo Marco.", translation: "My name is Marco." },
      { id: "it-p3", text: "Piacere.", translation: "Nice to meet you." },
    ],
    activities: [
      {
        id: "it-a1",
        type: "multiple-choice",
        prompt: "Which word means 'hello'?",
        options: [
          { id: "opt-1", text: "arrivederci" },
          { id: "opt-2", text: "no" },
          { id: "opt-3", text: "ciao" },
        ],
        correctOptionId: "opt-3",
      },
      {
        id: "it-a2",
        type: "translate",
        prompt: "Translate: 'goodbye'",
        correctAnswer: "arrivederci",
      },
      {
        id: "it-a3",
        type: "fill-blank",
        prompt: "Mi ___ Marco. (My name is Marco.)",
        correctAnswer: "chiamo",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging Italian teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers basic Italian greetings: ciao, arrivederci, sì, no, and the phrase 'mi chiamo' for introducing yourself. Guide the student through greeting you, introducing themselves, and saying goodbye.",
    },
  },
];

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}
