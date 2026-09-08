import { Image, Pressable, Text, View } from "react-native";

import type { Language } from "../../types/learning";

type LanguageCardProps = {
  language: Language;
  isSelected: boolean;
  onPress: () => void;
};

export function LanguageCard({ language, isSelected, onPress }: LanguageCardProps) {
  return (
    <Pressable
      accessibilityLabel={`Select ${language.name}`}
      accessibilityState={{ selected: isSelected }}
      className={`h-[76px] flex-row items-center rounded-[18px] border px-4 ${
        isSelected ? "border-lingua-purple bg-[#F5F3FF]" : "border-border bg-white"
      }`}
      onPress={onPress}
    >
      <Image
        accessibilityLabel={`${language.name} flag`}
        className="h-11 w-11 rounded-full"
        resizeMode="cover"
        source={{ uri: language.flagEmoji }}
      />
      <View className="ml-4 flex-1">
        <Text className="font-poppins-semibold text-[17px] leading-[22px] text-text-primary">
          {language.name}
        </Text>
        <Text className="mt-0.5 font-poppins-regular text-[13px] leading-[18px] text-text-secondary">
          {language.nativeName}
        </Text>
      </View>

      {isSelected ? (
        <View className="h-7 w-7 items-center justify-center rounded-full bg-lingua-purple">
          <Text className="font-poppins-bold text-[14px] text-white">✓</Text>
        </View>
      ) : (
        <Text className="font-poppins-regular text-[22px] text-text-secondary">›</Text>
      )}
    </Pressable>
  );
}
