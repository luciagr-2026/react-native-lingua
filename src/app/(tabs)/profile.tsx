import { useAuth, useUser } from "@clerk/expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pressable, Text } from "react-native";

import { PlaceholderScreen } from "../../components/placeholder-screen";
import { useLanguageStore } from "../../store/language-store";

export default function ProfileScreen() {
  const { signOut } = useAuth();
  const { user } = useUser();
  const clearSelectedLanguageId = useLanguageStore((state) => state.clearSelectedLanguageId);

  const handleClearStorage = async () => {
    await AsyncStorage.clear();
    clearSelectedLanguageId();
  };

  return (
    <PlaceholderScreen
      description={`Signed in as ${user?.firstName ?? user?.primaryEmailAddress?.emailAddress ?? "you"}. Settings and stats will live here.`}
      title="Profile"
    >
      <Pressable
        className="mt-4 h-[52px] items-center justify-center rounded-[16px] bg-lingua-purple px-8"
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
    </PlaceholderScreen>
  );
}
