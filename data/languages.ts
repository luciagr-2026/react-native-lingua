import type { Language } from "../types/learning";

export const languages: Language[] = [
  {
    id: "es",
    name: "Spanish",
    nativeName: "Español",
    flagEmoji: `https://flagcdn.com/w320/es.png`,
    color: "#FFC800",
    isAvailable: true,
  },
  {
    id: "fr",
    name: "French",
    nativeName: "Français",
    flagEmoji: `https://flagcdn.com/w320/fr.png`,
    color: "#4D8BFF",
    isAvailable: true,
  },
  {
    id: "it",
    name: "Italian",
    nativeName: "Italiano",
    flagEmoji: `https://flagcdn.com/w320/it.png`,
    color: "#21C16B",
    isAvailable: true,
  },
];

export function getLanguageById(id: string): Language | undefined {
  return languages.find((language) => language.id === id);
}
