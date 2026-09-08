import { useAuth, useUser } from "@clerk/expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Redirect } from "expo-router";

import { getLanguageById } from "../../data/languages";
import { useLanguageStore } from "../store/language-store";

export default function HomeScreen() {
  const { isLoaded, isSignedIn, signOut } = useAuth();
  const { user } = useUser();
  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);
  const hasHydrated = useLanguageStore((state) => state.hasHydrated);
  const clearSelectedLanguageId = useLanguageStore((state) => state.clearSelectedLanguageId);

  if (!isLoaded || !hasHydrated) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  if (!selectedLanguageId) {
    return <Redirect href="/language-selection" />;
  }

  const selectedLanguage = getLanguageById(selectedLanguageId);

  const handleClearStorage = async () => {
    await AsyncStorage.clear();
    clearSelectedLanguageId();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center gap-4 bg-white px-7">
        <Text className="font-poppins-bold text-[24px] text-text-primary">
          Welcome, {user?.firstName ?? user?.primaryEmailAddress?.emailAddress}!
        </Text>
        {selectedLanguage ? (
          <View className="h-[76px] w-full flex-row items-center rounded-[18px] border border-border bg-white px-4">
            <Image
              accessibilityLabel={`${selectedLanguage.name} flag`}
              className="h-11 w-11 rounded-full"
              resizeMode="cover"
              source={{ uri: selectedLanguage.flagEmoji }}
            />
            <View className="ml-4 flex-1">
              <Text className="font-poppins-semibold text-[17px] leading-[22px] text-text-primary">
                {selectedLanguage.name}
              </Text>
              <Text className="mt-0.5 font-poppins-regular text-[13px] leading-[18px] text-text-secondary">
                {selectedLanguage.nativeName}
              </Text>
            </View>
          </View>
        ) : null}
        <Link asChild href="/language-selection">
          <Pressable className="h-[52px] items-center justify-center rounded-[16px] border border-border px-8">
            <Text className="font-poppins-semibold text-[17px] text-text-primary">
              Choose a language
            </Text>
          </Pressable>
        </Link>

        <Pressable
          className="h-[52px] items-center justify-center rounded-[16px] bg-lingua-purple px-8"
          onPress={() => signOut()}
        >
          <Text className="font-poppins-semibold text-[17px] text-white">Sign out</Text>
        </Pressable>

        <Pressable
          className="h-[52px] items-center justify-center rounded-[16px] border border-border px-8"
          onPress={handleClearStorage}
        >
          <Text className="font-poppins-semibold text-[17px] text-text-primary">
            Clear async storage (test)
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
