import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getLanguageById, languages } from "../../../data/languages";
import { getLessonsByUnit } from "../../../data/lessons";
import { getUnitsByLanguage } from "../../../data/units";
import { LessonCard, type LessonCardStatus } from "../../components/lesson-card";
import { useLanguageStore } from "../../store/language-store";
import { useProgressStore } from "../../store/progress-store";
import { colors } from "../../theme";

type Tab = "lessons" | "practice";

export default function LearnScreen() {
  const [activeTab, setActiveTab] = useState<Tab>("lessons");

  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);
  const completedLessonIds = useProgressStore((state) => state.completedLessonIds);

  const language = getLanguageById(selectedLanguageId ?? languages[0].id) ?? languages[0];
  const unit = getUnitsByLanguage(language.id)[0];
  const lessons = unit ? getLessonsByUnit(unit.id) : [];

  const completedCount = lessons.filter((lesson) => completedLessonIds.includes(lesson.id)).length;
  const firstIncompleteIndex = lessons.findIndex((lesson) => !completedLessonIds.includes(lesson.id));

  const getStatus = (index: number): LessonCardStatus => {
    if (completedLessonIds.includes(lessons[index].id)) return "completed";
    if (index === firstIncompleteIndex) return "in-progress";
    return "locked";
  };

  if (!unit) {
    return (
      <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View className="flex-1 items-center justify-center bg-white px-6">
          <Text className="h3 text-center">No lessons available for {language.name} yet.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 pt-2">
          <Pressable
            accessibilityLabel="Go back"
            hitSlop={10}
            onPress={() => (router.canGoBack() ? router.back() : router.replace("/"))}
          >
            <Ionicons color={colors.neutral.textPrimary} name="chevron-back" size={26} />
          </Pressable>

          <View className="flex-1 items-center">
            <Text className="font-poppins-semibold text-[19px] leading-[24px] text-text-primary">
              {unit.title}
            </Text>
            <Text className="mt-0.5 font-poppins-regular text-[13px] text-text-secondary">
              Unit {unit.order} • {completedCount}/{lessons.length} lessons
            </Text>
          </View>

          <Pressable accessibilityLabel="Bookmark unit" hitSlop={10}>
            <Ionicons color={colors.brand.purple} name="bookmark-outline" size={24} />
          </Pressable>
        </View>

        {/* Unit banner */}
        <Image
          accessibilityLabel={`${unit.title} illustration`}
          className="mt-4 h-[220px] w-full"
          resizeMode="cover"
          source={{ uri: unit.imageUrl }}
        />

        {/* Tabs */}
        <View
          className="-mt-6 mx-5 flex-row rounded-pill bg-white px-1.5 py-1.5"
          style={{
            shadowColor: "#0D132B",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 8,
            elevation: 4,
          }}
        >
          <Pressable
            className={`flex-1 items-center rounded-pill py-2.5 ${
              activeTab === "lessons" ? "border-b-2 border-lingua-purple" : ""
            }`}
            onPress={() => setActiveTab("lessons")}
          >
            <Text
              className={`font-poppins-semibold text-[15px] ${
                activeTab === "lessons" ? "text-lingua-purple" : "text-text-secondary"
              }`}
            >
              Lessons
            </Text>
          </Pressable>
          <Pressable
            className={`flex-1 items-center rounded-pill py-2.5 ${
              activeTab === "practice" ? "border-b-2 border-lingua-purple" : ""
            }`}
            onPress={() => setActiveTab("practice")}
          >
            <Text
              className={`font-poppins-semibold text-[15px] ${
                activeTab === "practice" ? "text-lingua-purple" : "text-text-secondary"
              }`}
            >
              Practice
            </Text>
          </Pressable>
        </View>

        {/* Content */}
        {activeTab === "lessons" ? (
          <View className="mt-5 px-5">
            {lessons.map((lesson, index) => (
              <LessonCard
                exerciseCount={lesson.activities.length}
                key={lesson.id}
                onPress={() => router.push(`/lesson/${lesson.id}` as never)}
                order={lesson.order}
                status={getStatus(index)}
                title={lesson.title}
              />
            ))}
          </View>
        ) : (
          <View className="mt-10 items-center px-8">
            <Text className="h4 text-center text-text-secondary">
              Practice exercises for this unit are coming soon.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
