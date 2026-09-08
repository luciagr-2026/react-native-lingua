import { View } from "react-native";

type XPBarProps = {
  progress: number;
  trackClassName?: string;
  fillClassName?: string;
};

/** Horizontal pill progress bar. `progress` is a 0-1 fraction. */
export function XPBar({ progress, trackClassName, fillClassName }: XPBarProps) {
  const clamped = Math.max(0, Math.min(1, progress));

  return (
    <View className={`h-2 w-full overflow-hidden rounded-pill ${trackClassName ?? "bg-border"}`}>
      <View
        className={`h-full rounded-pill ${fillClassName ?? "bg-lingua-purple"}`}
        style={{ width: `${clamped * 100}%` }}
      />
    </View>
  );
}
