import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View, type LayoutChangeEvent } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CIRCLE_SIZE = 40;
const ICON_SIZE = 20;
const ACTIVE_COLOR = "#6C4EF5";
const INACTIVE_COLOR = "#6B7280";

type TabIcon = (props: { size: number; color: string }) => React.ReactNode;

const TAB_ICONS: Record<string, { active: TabIcon; inactive: TabIcon }> = {
  index: {
    active: ({ size, color }) => <Ionicons color={color} name="home" size={size} />,
    inactive: ({ size, color }) => <Ionicons color={color} name="home-outline" size={size} />,
  },
  learn: {
    active: ({ size, color }) => <Ionicons color={color} name="book" size={size} />,
    inactive: ({ size, color }) => <Ionicons color={color} name="book-outline" size={size} />,
  },
  "ai-teacher": {
    active: ({ size, color }) => (
      <MaterialCommunityIcons color={color} name="robot" size={size} />
    ),
    inactive: ({ size, color }) => (
      <MaterialCommunityIcons color={color} name="robot-outline" size={size} />
    ),
  },
  chat: {
    active: ({ size, color }) => (
      <Ionicons color={color} name="chatbubble-ellipses" size={size} />
    ),
    inactive: ({ size, color }) => (
      <Ionicons color={color} name="chatbubble-ellipses-outline" size={size} />
    ),
  },
  profile: {
    active: ({ size, color }) => <Ionicons color={color} name="person" size={size} />,
    inactive: ({ size, color }) => <Ionicons color={color} name="person-outline" size={size} />,
  },
};

type TabBarRoute = {
  key: string;
  name: string;
};

type TabBarDescriptor = {
  options: {
    title?: string;
  };
};

type TabBarNavigation = {
  navigate: (name: string) => void;
  emit: (event: {
    type: "tabPress";
    target: string;
    canPreventDefault: true;
  }) => { defaultPrevented: boolean };
};

type CustomTabBarProps = {
  state: { index: number; routes: TabBarRoute[] };
  descriptors: Record<string, TabBarDescriptor>;
  navigation: TabBarNavigation;
};

export function CustomTabBar({ state, descriptors, navigation }: CustomTabBarProps) {
  const insets = useSafeAreaInsets();
  const [barWidth, setBarWidth] = useState(0);
  const tabWidth = barWidth / state.routes.length;

  const translateX = useSharedValue(0);
  const hasMeasured = useRef(false);

  useEffect(() => {
    if (tabWidth === 0) return;

    const target = tabWidth * state.index + (tabWidth - CIRCLE_SIZE) / 2;

    if (!hasMeasured.current) {
      translateX.value = target;
      hasMeasured.current = true;
    } else {
      translateX.value = withTiming(target, { duration: 250 });
    }
  }, [state.index, tabWidth, translateX]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handleLayout = (event: LayoutChangeEvent) => {
    setBarWidth(event.nativeEvent.layout.width);
  };

  return (
    <View
      style={[styles.container, { paddingBottom: insets.bottom + 4 }]}
      onLayout={handleLayout}
    >
      {barWidth > 0 ? (
        <Animated.View style={[styles.indicator, indicatorStyle]} />
      ) : null}

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title ?? route.name;
        const focused = state.index === index;
        const icons = TAB_ICONS[route.name];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={focused ? { selected: true } : {}}
            accessibilityLabel={label}
            style={styles.tabItem}
            onPress={onPress}
          >
            <View style={styles.iconSlot}>
              {icons
                ? focused
                  ? icons.active({ size: ICON_SIZE, color: "#FFFFFF" })
                  : icons.inactive({ size: ICON_SIZE, color: INACTIVE_COLOR })
                : null}
            </View>
            <Text
              className="font-poppins-medium"
              numberOfLines={1}
              style={[styles.label, { opacity: focused ? 0 : 1 }]}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingTop: 6,
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 8,
  },
  indicator: {
    position: "absolute",
    top: 6,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: ACTIVE_COLOR,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  iconSlot: {
    height: CIRCLE_SIZE,
    width: CIRCLE_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 11,
    lineHeight: 14,
    color: INACTIVE_COLOR,
  },
});
