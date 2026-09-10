import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../../constants/images";
import { getLessonById } from "../../../data/lessons";
import { useProgressStore } from "../../store/progress-store";
import { colors } from "../../theme";

// Placeholder feedback scores. Real speaking/pronunciation/grammar analysis
// will come from the Vision Agent session once it's wired up.
const SESSION_FEEDBACK = [
  { label: "Speaking", value: "Excellent", color: colors.semantic.success },
  { label: "Pronunciation", value: "Great", color: colors.brand.blue },
  { label: "Grammar", value: "Good", color: colors.brand.purple },
];

const SESSION_MINUTES = 12;

// Placeholder learner selfie for the camera preview inset. Real camera
// capture will come from the Vision Agent session once it's wired up.
const CAMERA_PREVIEW_URL = "https://i.pravatar.cc/150?img=12";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lesson = getLessonById(id);
  const completeLesson = useProgressStore((state) => state.completeLesson);

  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(SESSION_MINUTES * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!lesson) {
    return (
      <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View className="flex-1 items-center justify-center bg-white px-6">
          <Text className="h3 text-center">Lesson not found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const teacherPhrase = lesson.phrases[0];
  const minutesLeft = Math.max(1, Math.ceil(secondsLeft / 60));

  const handleEndCall = () => {
    completeLesson(lesson.id, lesson.xpReward);
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/(tabs)/learn" as never);
    }
  };

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pb-3 pt-1">
        <Pressable
          accessibilityLabel="Go back"
          hitSlop={10}
          onPress={() => (router.canGoBack() ? router.back() : router.replace("/(tabs)/learn" as never))}
        >
          <Ionicons color={colors.neutral.textPrimary} name="chevron-back" size={26} />
        </Pressable>

        <View className="items-start">
          <Text className="font-poppins-semibold text-[19px] leading-[24px] text-text-primary">
            AI Teacher
          </Text>
          <View className="mt-0.5 flex-row items-center gap-1.5">
            <View className="h-2 w-2 rounded-full bg-lingua-green" />
            <Text className="font-poppins-regular text-[13px] text-text-secondary">Online</Text>
          </View>
        </View>

        <View className="flex-row items-center gap-2.5">
          <Pressable
            accessibilityLabel={isCameraOn ? "Hide camera preview" : "Show camera preview"}
            className="h-10 w-10 items-center justify-center rounded-full border border-border"
            onPress={() => setIsCameraOn((value) => !value)}
          >
            <Ionicons
              color={isCameraOn ? colors.neutral.textPrimary : colors.neutral.textSecondary}
              name={isCameraOn ? "videocam-outline" : "videocam-off-outline"}
              size={18}
            />
          </Pressable>
          <View className="h-10 w-10 items-center justify-center rounded-full border border-border">
            <Text className="font-poppins-semibold text-[13px] text-text-primary">{minutesLeft}</Text>
          </View>
          <Pressable
            accessibilityLabel="Replay teacher's last message"
            className="h-10 w-10 items-center justify-center rounded-full border border-border"
          >
            <Ionicons color={colors.neutral.textPrimary} name="megaphone-outline" size={18} />
          </Pressable>
        </View>
      </View>

      {/* Teacher video area */}
      <View className="flex-1 px-5">
        <View className="flex-1 overflow-hidden rounded-card">
          <LinearGradient
            colors={[colors.neutral.surface, "#EDE9FE"]}
            end={{ x: 1, y: 1 }}
            start={{ x: 0, y: 0 }}
            style={{ flex: 1 }}
          >
            <View className="flex-1 items-center justify-end pb-6">
              <Image
                accessibilityLabel="AI teacher"
                resizeMode="contain"
                source={images.aiTeacher}
                style={{ width: "78%", height: "78%" }}
              />
            </View>

            {isCameraOn ? (
              <View
                className="absolute right-4 top-4 h-20 w-16 items-center justify-center overflow-hidden rounded-card border-2 border-white bg-white"
                style={{
                  shadowColor: "#0D132B",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.15,
                  shadowRadius: 6,
                  elevation: 4,
                }}
              >
                <Image
                  accessibilityLabel="Your camera preview"
                  resizeMode="cover"
                  source={{ uri: CAMERA_PREVIEW_URL }}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            ) : null}

            {teacherPhrase ? (
              <View
                className="mx-4 flex-row items-center justify-between rounded-card bg-white px-4 py-3.5"
                style={{
                  shadowColor: "#0D132B",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.12,
                  shadowRadius: 10,
                  elevation: 5,
                }}
              >
                <View className="flex-1 pr-3">
                  <Text className="font-poppins-semibold text-[16px] leading-[21px] text-text-primary">
                    {teacherPhrase.text}
                  </Text>
                  {showSubtitles ? (
                    <Text className="mt-0.5 font-poppins-regular text-[14px] leading-[19px] text-text-secondary">
                      {teacherPhrase.translation}
                    </Text>
                  ) : null}
                </View>
                <Ionicons color={colors.brand.purple} name="volume-high" size={22} />
              </View>
            ) : null}

            {/* Call controls sit on top of the live video area, like the reference design. */}
            <View className="mb-5 mt-4 flex-row items-center justify-center gap-8">
              <CallControl
                active={isCameraOn}
                icon={isCameraOn ? "videocam" : "videocam-off"}
                label="Camera"
                onPress={() => setIsCameraOn((value) => !value)}
              />
              <CallControl
                active={isMicOn}
                icon={isMicOn ? "mic" : "mic-off"}
                label="Mic"
                onPress={() => setIsMicOn((value) => !value)}
              />
              <CallControl
                active={showSubtitles}
                icon="language"
                label="Subtitles"
                onPress={() => setShowSubtitles((value) => !value)}
              />
              <CallControl danger icon="call" label="End Call" onPress={handleEndCall} />
            </View>
          </LinearGradient>
        </View>
      </View>

      {/* Session feedback */}
      <View
        className="mx-5 mb-5 mt-4 flex-row items-center justify-between rounded-card bg-white px-4 py-4"
        style={{
          shadowColor: "#0D132B",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
          elevation: 3,
        }}
      >
        {SESSION_FEEDBACK.map((item) => (
          <View className="flex-1 items-center" key={item.label}>
            <Text className="font-poppins-medium text-[13px] text-text-primary">{item.label}</Text>
            <Text className="mt-1 font-poppins-semibold text-[14px]" style={{ color: item.color }}>
              {item.value}
            </Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

type CallControlProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
  active?: boolean;
  danger?: boolean;
};

function CallControl({ icon, label, onPress, active = true, danger = false }: CallControlProps) {
  return (
    <Pressable accessibilityLabel={label} className="items-center gap-1.5" onPress={onPress}>
      <View
        className={`h-14 w-14 items-center justify-center rounded-full ${
          danger ? "bg-error" : active ? "bg-surface" : "bg-border"
        }`}
      >
        <Ionicons
          color={danger ? "#FFFFFF" : active ? colors.neutral.textPrimary : colors.neutral.textSecondary}
          name={icon}
          size={22}
        />
      </View>
      <Text className="font-poppins-regular text-[12px] text-text-secondary">{label}</Text>
    </Pressable>
  );
}
