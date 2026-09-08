import { useAuth, useUser } from "@clerk/expo";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Redirect } from "expo-router";

export default function HomeScreen() {
  const { isLoaded, isSignedIn, signOut } = useAuth();
  const { user } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center gap-4 bg-white px-7">
        <Text className="font-poppins-bold text-[24px] text-text-primary">
          Welcome, {user?.firstName ?? user?.primaryEmailAddress?.emailAddress}!
        </Text>
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
      </View>
    </SafeAreaView>
  );
}
