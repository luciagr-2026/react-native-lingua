import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { colors } from "../theme";

export type LessonCardStatus = "completed" | "in-progress" | "locked";

type LessonCardProps = {
  order: number;
  title: string;
  status: LessonCardStatus;
  exerciseCount: number;
  onPress: () => void;
};

export function LessonCard({ order, title, status, exerciseCount, onPress }: LessonCardProps) {
  const isInProgress = status === "in-progress";

  return (
    <Pressable
      accessibilityLabel={`Lesson ${order}: ${title}`}
      accessibilityState={{ selected: isInProgress }}
      className={`mb-3 flex-row items-center rounded-card border px-4 py-4 ${
        isInProgress ? "border-lingua-purple bg-[#F5F3FF]" : "border-border bg-white"
      }`}
      onPress={onPress}
    >
      <View className="flex-1">
        <Text
          className={`font-poppins-regular text-[13px] ${
            isInProgress ? "text-lingua-purple" : "text-text-secondary"
          }`}
        >
          Lesson {order}
        </Text>
        <Text className="mt-0.5 font-poppins-semibold text-[17px] leading-[22px] text-text-primary">
          {title}
        </Text>
        {isInProgress ? (
          <Text className="mt-0.5 font-poppins-medium text-[13px] text-lingua-purple">
            In progress
          </Text>
        ) : null}
        {status === "locked" ? (
          <Text className="mt-0.5 font-poppins-regular text-[13px] text-text-secondary">
            0 / {exerciseCount} lessons
          </Text>
        ) : null}
      </View>

      {status === "completed" ? (
        <View className="h-7 w-7 items-center justify-center rounded-full bg-lingua-green">
          <Ionicons color="#FFFFFF" name="checkmark" size={16} />
        </View>
      ) : null}

      {isInProgress ? (
        <View className="h-11 w-11 items-center justify-center rounded-control bg-lingua-purple/10">
          <Ionicons color={colors.brand.purple} name="school" size={22} />
        </View>
      ) : null}

      {status === "locked" ? (
        <Ionicons color={colors.neutral.textSecondary} name="lock-closed" size={18} />
      ) : null}
    </Pressable>
  );
}
