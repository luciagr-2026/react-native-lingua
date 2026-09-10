import { Redirect } from "expo-router";

import { getLanguageById, languages } from "../../../data/languages";
import { getLessonsByUnit } from "../../../data/lessons";
import { getUnitsByLanguage } from "../../../data/units";
import { PlaceholderScreen } from "../../components/placeholder-screen";
import { useLanguageStore } from "../../store/language-store";
import { useProgressStore } from "../../store/progress-store";

export default function AiTeacherScreen() {
  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);
  const completedLessonIds = useProgressStore((state) => state.completedLessonIds);

  const language = getLanguageById(selectedLanguageId ?? languages[0].id) ?? languages[0];
  const unit = getUnitsByLanguage(language.id)[0];
  const lessons = unit ? getLessonsByUnit(unit.id) : [];

  if (lessons.length === 0) {
    return (
      <PlaceholderScreen
        description="Practice speaking with your AI video teacher here."
        title="AI Teacher"
      />
    );
  }

  const nextLesson = lessons.find((lesson) => !completedLessonIds.includes(lesson.id)) ?? lessons[0];

  return <Redirect href={`/lesson/${nextLesson.id}` as never} />;
}
