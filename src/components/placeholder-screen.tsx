import type { ReactNode } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PlaceholderScreenProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function PlaceholderScreen({ title, description, children }: PlaceholderScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center gap-3 bg-white px-7">
        <Text className="h2 text-center">{title}</Text>
        <Text className="body-medium max-w-[280px] text-center text-text-secondary">
          {description}
        </Text>
        {children}
      </View>
    </SafeAreaView>
  );
}
