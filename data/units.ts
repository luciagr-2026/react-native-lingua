import type { Unit } from "../types/learning";

export const units: Unit[] = [
  {
    id: "es-unit-1",
    languageId: "es",
    order: 1,
    title: "Basics 1",
    description: "Greetings and introducing yourself",
    color: "#6C4EF5",
    icon: "👋",
  },
  {
    id: "fr-unit-1",
    languageId: "fr",
    order: 1,
    title: "Basics 1",
    description: "Greetings and introducing yourself",
    color: "#4D8BFF",
    icon: "👋",
  },
  {
    id: "it-unit-1",
    languageId: "it",
    order: 1,
    title: "Basics 1",
    description: "Greetings and introducing yourself",
    color: "#21C16B",
    icon: "👋",
  },
];

export function getUnitsByLanguage(languageId: string): Unit[] {
  return units
    .filter((unit) => unit.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}

export function getUnitById(id: string): Unit | undefined {
  return units.find((unit) => unit.id === id);
}
