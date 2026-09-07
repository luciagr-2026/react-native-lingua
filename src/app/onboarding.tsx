import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants/images";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 bg-white px-7">
        <View className="mt-10 flex-row items-center justify-center gap-2">
          <Image
            accessibilityLabel="Lingua mascot"
            className="h-14 w-14"
            resizeMode="contain"
            source={images.mascotLogo}
          />
          <Text className="font-poppins-bold text-[31px] leading-[37px] tracking-[-1px] text-text-primary">
            lingua
          </Text>
        </View>

        <View className="mt-16">
          <Text className="font-poppins-bold text-[38px] leading-[52px] tracking-[-1.2px] text-text-primary">
            Your AI language{"\n"}
            <Text className="text-lingua-purple">teacher.</Text>
          </Text>
          <Text className="body-large mt-4 max-w-[330px] text-[17px] leading-[29px] text-text-secondary">
            Real conversations, personalized{"\n"}
            lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="mt-5 flex-1 items-center justify-center">
          <View className="relative h-[400px] w-full max-w-[390px]">
            <View className="absolute left-1 top-8 -rotate-[7deg] rounded-[20px] bg-[#EDF6FF] px-6 py-4">
              <Text className="font-poppins-medium text-[24px] leading-[29px] text-[#10152B]">
                Hello!
              </Text>
              <View className="absolute bottom-[-8px] right-6 h-5 w-5 rotate-45 bg-[#EDF6FF]" />
            </View>

            <View className="absolute right-0 top-1 rotate-[10deg] rounded-[20px] bg-[#F5F4FF] px-6 py-4">
              <Text className="font-poppins-medium text-[24px] leading-[29px] text-lingua-purple">
                ¡Hola!
              </Text>
              <View className="absolute bottom-[-8px] left-6 h-5 w-5 rotate-45 bg-[#F5F4FF]" />
            </View>

            <View className="absolute right-0 top-[137px] rotate-[10deg] rounded-[20px] bg-[#FFF4EE] px-5 py-4">
              <Text className="font-poppins-medium text-[24px] leading-[29px] text-[#FF5C34]">
                你好!
              </Text>
              <View className="absolute bottom-[-8px] left-7 h-5 w-5 rotate-45 bg-[#FFF4EE]" />
            </View>

            <Image
              accessibilityLabel="Waving Lingua mascot"
              className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2"
              resizeMode="contain"
              source={images.mascotWelcome}
            />
          </View>
        </View>

        <Pressable className="mb-7 h-[72px] items-center justify-center rounded-[24px] bg-lingua-purple">
          <View className="flex-row items-center gap-4">
            <Text className="font-poppins-semibold text-[23px] leading-[28px] text-white">
              Get Started
            </Text>
            <Text className="font-poppins-regular text-[42px] leading-[37px] text-white">
              ›
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
