import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../../constants/images";
import { getLanguageById, languages } from "../../../data/languages";
import { getLessonsByUnit } from "../../../data/lessons";
import { getUnitsByLanguage } from "../../../data/units";
import { XPBar } from "../../components/xp-bar";
import { useLanguageStore } from "../../store/language-store";
import { useProgressStore } from "../../store/progress-store";
import { colors } from "../../theme";

const GREETINGS: Record<string, string> = {
  es: "Hola",
  fr: "Salut",
  it: "Ciao",
};

const AI_TEACHER_AVATAR = "https://picsum.photos/seed/lingua-ai-teacher/200/200";

type PlanItemKey = "lesson" | "aiConversation" | "newWords";

export default function HomeScreen() {
  const { user } = useUser();
  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);

  const streakCount = useProgressStore((state) => state.streakCount);
  const xpEarnedToday = useProgressStore((state) => state.xpEarnedToday);
  const dailyGoalXp = useProgressStore((state) => state.dailyGoalXp);
  const todayPlanCompleted = useProgressStore((state) => state.todayPlanCompleted);

  const language = getLanguageById(selectedLanguageId ?? languages[0].id) ?? languages[0];
  const currentUnit = getUnitsByLanguage(language.id)[0];
  const currentLesson = currentUnit ? getLessonsByUnit(currentUnit.id)[0] : undefined;

  const firstName = user?.firstName ?? "there";
  const greeting = GREETINGS[language.id] ?? "Hello";

  const planItems: {
    key: PlanItemKey;
    icon: keyof typeof Ionicons.glyphMap;
    iconBg: string;
    title: string;
    subtitle: string;
    completed: boolean;
  }[] = [
      {
        key: "lesson",
        icon: "book",
        iconBg: "bg-lingua-purple",
        title: "Lesson",
        subtitle: currentLesson?.title ?? "New lesson",
        completed: todayPlanCompleted.lesson,
      },
      {
        key: "aiConversation",
        icon: "headset",
        iconBg: "bg-lingua-purple",
        title: "AI Conversation",
        subtitle: "Talk about your day",
        completed: todayPlanCompleted.aiConversation,
      },
      {
        key: "newWords",
        icon: "chatbubble-ellipses",
        iconBg: "bg-[#FF6B6B]",
        title: "New words",
        subtitle: `${currentLesson?.vocabulary.length ?? 0} words`,
        completed: todayPlanCompleted.newWords,
      },
    ];

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Image
              accessibilityLabel={`${language.name} flag`}
              className="h-10 w-10 rounded-full"
              resizeMode="cover"
              source={{ uri: language.flagEmoji }}
            />
            <Text className="ml-3 font-poppins-semibold text-[19px] leading-[26px] text-text-primary">
              {greeting}, {firstName}! 👋
            </Text>
          </View>

          <View className="flex-row items-center gap-4">
            <View className="flex-row items-center gap-1">
              <Image
                accessibilityLabel="Streak"
                resizeMode="contain"
                source={images.streakFire}
                style={{ width: 24, height: 24 }}
              />
              <Text className="font-poppins-bold text-[16px] text-text-primary" >
                {streakCount}
              </Text>
            </View>
            <Pressable accessibilityLabel="Notifications" hitSlop={8}>
              <Ionicons color={colors.neutral.textPrimary} name="notifications-outline" size={24} />
            </Pressable>
          </View>
        </View>

        {/* Daily goal */}
        <View className="mt-5 flex-row items-center justify-between rounded-card bg-[#FDEEDD] px-5 py-4">
          <View className="flex-1">
            <Text className="font-poppins-regular text-[14px] text-text-secondary">
              Daily goal
            </Text>

            <View className="flex-row items-baseline">
              <Text className="mt-1 font-poppins-bold text-[26px] leading-[32px] text-text-primary">
                {xpEarnedToday}
              </Text>

              <Text className="mt-1 font-poppins-bold text-[14px] leading-[32px] text-text-secondary">
                / {dailyGoalXp} XP
              </Text>
            </View>
            
            <View className="mt-3">
              <XPBar
                fillClassName="bg-[#FF8A00]"
                progress={xpEarnedToday / dailyGoalXp}
                trackClassName="bg-[#F6DCB8]"
              />
            </View>
          </View>
          <Image
            accessibilityLabel="Treasure chest"
            className="ml-3"
            resizeMode="contain"
            source={images.treasure}
            style={{ width: 90, height: 78 }}
          />
        </View>

        {/* Continue learning */}
        <View className="mt-4 overflow-hidden rounded-card" style={{ minHeight: 168 }}>
          <LinearGradient
            colors={[colors.brand.purple, colors.brand.deepPurple]}
            end={{ x: 1, y: 1 }}
            start={{ x: 0, y: 0 }}
            style={{ flex: 1, padding: 20, justifyContent: "space-between" }}
          >
            <View>
              <Text className="font-poppins-regular text-[14px] text-white/80">
                Continue learning
              </Text>
              <Text className="mt-1 font-poppins-bold text-[26px] leading-[32px] text-white">
                {language.name}
              </Text>
              <Text className="mt-1 font-poppins-regular text-[14px] text-white/80">
                A1 • Unit {currentUnit?.order ?? 1}
              </Text>
            </View>

            <Pressable
              accessibilityLabel="Continue lesson"
              className="mt-4 h-11 w-[120px] items-center justify-center rounded-pill bg-white"
            >
              <Text className="font-poppins-semibold text-[16px] text-lingua-purple">
                Continue
              </Text>
            </Pressable>

            <Image
              accessibilityLabel="Landmark illustration"
              className="absolute -right-2 bottom-0"
              resizeMode="contain"
              source={images.palace}
              style={{ width: 150, height: 140 }}
            />
          </LinearGradient>
        </View>

        {/* Today's plan */}
        <View className="mt-6 flex-row items-center justify-between">
          <Text className="h4">Today&apos;s plan</Text>
          <Pressable accessibilityLabel="View all">
            <Text className="font-poppins-medium text-[14px] text-lingua-purple">View all</Text>
          </Pressable>
        </View>

        <View className="mt-3">
          {planItems.map((item) => (
            <View className="flex-row items-center py-2.5" key={item.key}>
              <View
                className={`h-11 w-11 items-center justify-center rounded-control ${item.iconBg}`}
              >
                <Ionicons color="#FFFFFF" name={item.icon} size={20} />
              </View>
              <View className="ml-3 flex-1">
                <Text className="font-poppins-medium text-[15px] text-text-primary">
                  {item.title}
                </Text>
                <Text className="mt-0.5 font-poppins-regular text-[13px] text-text-secondary">
                  {item.subtitle}
                </Text>
              </View>
              {item.completed ? (
                <View className="h-6 w-6 items-center justify-center rounded-full bg-lingua-purple">
                  <Ionicons color="#FFFFFF" name="checkmark" size={15} />
                </View>
              ) : (
                <View className="h-6 w-6 rounded-full border-2 border-border" />
              )}
            </View>
          ))}
        </View>

        {/* Next up */}
        <View className="mt-5 flex-row items-center justify-between rounded-card bg-[#EAF4E7] px-4 py-4">
          <View className="flex-1">
            <Text className="font-poppins-regular text-[13px] text-text-secondary">Next up</Text>
            <Text className="mt-1 font-poppins-semibold text-[16px] text-text-primary">
              AI Video Call
            </Text>
            <Text className="mt-0.5 font-poppins-regular text-[13px] text-text-secondary">
              Practice speaking
            </Text>
          </View>

          <View className="ml-3" style={{ width: 64, height: 64 }}>
            <Image
              accessibilityLabel="AI teacher"
              className="h-16 w-16 rounded-full"
              resizeMode="cover"
              source={{ uri: AI_TEACHER_AVATAR }}
            />
            <View
              className="absolute bottom-0 right-0 h-7 w-7 items-center justify-center rounded-full bg-lingua-green"
              style={{ borderWidth: 2, borderColor: "#EAF4E7" }}
            >
              <Ionicons color="#FFFFFF" name="videocam" size={14} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
