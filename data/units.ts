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
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  },
  {
    id: "fr-unit-1",
    languageId: "fr",
    order: 1,
    title: "Basics 1",
    description: "Greetings and introducing yourself",
    color: "#4D8BFF",
    icon: "👋",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
  },
  {
    id: "it-unit-1",
    languageId: "it",
    order: 1,
    title: "Basics 1",
    description: "Greetings and introducing yourself",
    color: "#21C16B",
    icon: "👋",
    imageUrl: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&q=80",
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
