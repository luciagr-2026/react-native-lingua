import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { images } from "../../constants/images";
import { languages } from "../../data/languages";
import { LanguageCard } from "../components/language-card";
import { useLanguageStore } from "../store/language-store";
import type { LanguageCode } from "../../types/learning";

export default function LanguageSelectionScreen() {
  const [query, setQuery] = useState("");
  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);
  const setSelectedLanguageId = useLanguageStore((state) => state.setSelectedLanguageId);
  const [selectedId, setSelectedId] = useState<LanguageCode>(
    selectedLanguageId ?? languages[0].id
  );

  const filteredLanguages = languages.filter((language) => {
    const search = query.trim().toLowerCase();
    if (!search) return true;
    return (
      language.name.toLowerCase().includes(search) ||
      language.nativeName.toLowerCase().includes(search)
    );
  });

  const handleConfirm = () => {
    setSelectedLanguageId(selectedId);

    if (router.canGoBack()) {
      router.back();
      return;
    }
    router.replace("/");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 bg-white px-6">
        <View className="mt-2 flex-row items-center justify-center">
          <Pressable
            accessibilityLabel="Go back"
            className="absolute left-0 h-10 w-10 items-center justify-center"
            hitSlop={10}
            onPress={() => router.back()}
          >
            <Text className="font-poppins-regular text-[30px] leading-[32px] text-text-primary">
              ‹
            </Text>
          </Pressable>
          <Text className="font-poppins-semibold text-[19px] leading-[26px] text-text-primary">
            Choose a language
          </Text>
        </View>

        <View className="mt-5 h-[52px] flex-row items-center rounded-[16px] bg-surface px-4">
          <Ionicons color="#6B7280" name="search" size={20} />
          <TextInput
            className="ml-3 flex-1 font-poppins-regular text-[15px] text-text-primary"
            onChangeText={setQuery}
            placeholder="Search languages"
            placeholderTextColor="#6B7280"
            value={query}
          />
        </View>

        <ScrollView
          className="mt-6 flex-1"
          contentContainerStyle={{ paddingBottom: 24 }}
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
        >
          <Text className="font-poppins-semibold text-[13px] leading-[18px] text-text-primary">
            Popular
          </Text>

          <View className="mt-3 gap-3">
            {filteredLanguages.map((language) => (
              <LanguageCard
                isSelected={language.id === selectedId}
                key={language.id}
                language={language}
                onPress={() => setSelectedId(language.id)}
              />
            ))}
          </View>

          <Image
            accessibilityLabel="Illustration of world landmarks on a globe"
            className="mt-8 h-[370px] w-full"
            resizeMode="contain"
            source={images.earth}
          />
        </ScrollView>

        <Pressable
          className="mb-5 h-[60px] items-center justify-center rounded-[20px] bg-lingua-purple"
          onPress={handleConfirm}
        >
          <Text className="font-poppins-semibold text-[18px] text-white">Confirm</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
