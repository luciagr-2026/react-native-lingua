import { useAuth, useSignIn, useSignUp, useSSO } from "@clerk/expo";
import { useRef, useState } from "react";
import type { Href } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";

import { images } from "../../constants/images";

type AuthScreenProps = {
  mode: "sign-in" | "sign-up";
};

const socialProviders = [
  { name: "Google", strategy: "oauth_google", mark: "G", markClassName: "text-[31px] text-[#4285F4]" },
  { name: "Facebook", strategy: "oauth_facebook", mark: "f", markClassName: "text-[31px] text-[#1877F2]" },
  { name: "Apple", strategy: "oauth_apple", mark: "", markClassName: "text-[27px] text-text-primary" },
] as const;

function navigateAfterAuth({ session }: { session?: { currentTask?: unknown } | null }) {
  if (session?.currentTask) {
    return;
  }
  router.replace("/");
}

function VerificationModal({
  visible,
  onSubmit,
  onResend,
  error,
}: {
  visible: boolean;
  onSubmit: (code: string) => void;
  onResend: () => void;
  error?: string;
}) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  const handleCodeChange = (value: string) => {
    const nextCode = value.replace(/\D/g, "").slice(0, 6);
    setCode(nextCode);

    if (nextCode.length === 6) {
      inputRef.current?.blur();
      onSubmit(nextCode);
    }
  };

  return (
    <Modal animationType="fade" transparent visible={visible}>
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 justify-end bg-[#0D132B66] px-5 pb-16"
      >
        <View className="rounded-[28px] bg-white px-6 pb-16 pt-6">
          <View className="items-center">
            <View className="h-12 w-12 items-center justify-center rounded-full bg-[#F1EDFF]">
              <Text className="font-poppins-bold text-[22px] text-lingua-purple">✉</Text>
            </View>
            <Text className="mt-4 font-poppins-bold text-[24px] leading-[31px] text-text-primary">
              Check your email
            </Text>
            <Text className="mt-2 text-center font-poppins-regular text-[14px] leading-[22px] text-text-secondary">
              We sent you an email. Enter the 6-digit verification code to
              continue.
            </Text>
          </View>

          <Pressable
            accessibilityLabel="Enter verification code"
            className="mt-7 flex-row justify-between"
            onPress={() => inputRef.current?.focus()}
          >
            {Array.from({ length: 6 }, (_, index) => (
              <View
                className={`h-20 w-11 items-center justify-center rounded-[12px] border ${
                  code[index] ? "border-lingua-purple bg-[#F5F3FF]" : "border-border bg-white"
                }`}
                key={index}
              >
                <Text className="font-poppins-semibold text-[20px] text-text-primary">
                  {code[index] ?? ""}
                </Text>
              </View>
            ))}
          </Pressable>

          {error ? (
            <Text className="mt-3 text-center font-poppins-regular text-[13px] text-error">
              {error}
            </Text>
          ) : null}

          <Pressable className="mt-5 items-center" onPress={onResend}>
            <Text className="font-poppins-medium text-[14px] text-lingua-purple">
              Resend code
            </Text>
          </Pressable>

          <TextInput
            ref={inputRef}
            autoFocus
            className="absolute h-px w-px opacity-0"
            keyboardType="number-pad"
            maxLength={6}
            onChangeText={handleCodeChange}
            textContentType="oneTimeCode"
            value={code}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

export function AuthScreen({ mode }: AuthScreenProps) {
  const isSignUp = mode === "sign-up";
  const actionLabel = isSignUp ? "Sign Up" : "Sign In";

  const { isLoaded: authLoaded, isSignedIn } = useAuth();
  const { signIn, errors: signInErrors, fetchStatus: signInFetchStatus } = useSignIn();
  const { signUp, errors: signUpErrors, fetchStatus: signUpFetchStatus } = useSignUp();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [verificationError, setVerificationError] = useState<string | undefined>(undefined);
  const [socialError, setSocialError] = useState<string | null>(null);

  const isSubmitting = isSignUp
    ? signUpFetchStatus === "fetching"
    : signInFetchStatus === "fetching";

  if (authLoaded && isSignedIn) {
    return <Redirect href="/" />;
  }

  const handleSubmit = async () => {
    setFormError(null);
    setSocialError(null);

    if (isSignUp) {
      const { error } = await signUp.password({ emailAddress: email, password });
      if (error) {
        setFormError(
          signUpErrors.fields.emailAddress?.message ??
            signUpErrors.fields.password?.message ??
            error.message ??
            "Something went wrong. Please try again.",
        );
        return;
      }

      if (signUp.status === "complete") {
        await signUp.finalize({ navigate: navigateAfterAuth });
        return;
      }

      const { error: codeError } = await signUp.verifications.sendEmailCode();
      if (codeError) {
        setFormError(codeError.message ?? "Couldn't send the verification code.");
        return;
      }
      setShowVerification(true);
      return;
    }

    const { error } = await signIn.password({ emailAddress: email, password });
    if (error) {
      setFormError(
        signInErrors.fields.identifier?.message ??
          signInErrors.fields.password?.message ??
          error.message ??
          "Something went wrong. Please try again.",
      );
      return;
    }

    if (signIn.status === "complete") {
      await signIn.finalize({ navigate: navigateAfterAuth });
    }
  };

  const handleVerifyCode = async (code: string) => {
    setVerificationError(undefined);
    const { error } = await signUp.verifications.verifyEmailCode({ code });
    if (error) {
      setVerificationError(error.message ?? "That code didn't work. Try again.");
      return;
    }

    if (signUp.status === "complete") {
      await signUp.finalize({ navigate: navigateAfterAuth });
    }
  };

  const handleResendCode = () => {
    setVerificationError(undefined);
    void signUp.verifications.sendEmailCode();
  };

  const handleSocialPress = async (strategy: (typeof socialProviders)[number]["strategy"]) => {
    setSocialError(null);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/" as Href);
      }
    } catch {
      setSocialError("This sign-in option isn't available yet.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <KeyboardAvoidingView
        behavior={process.env.EXPO_OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          automaticallyAdjustKeyboardInsets
          className="flex-1 bg-white"
          contentContainerStyle={{ paddingHorizontal: 32, paddingBottom: 72 }}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Pressable
            accessibilityLabel="Go back"
            className="mt-1 h-10 w-10 items-start justify-center"
            hitSlop={10}
            onPress={() => router.back()}
          >
            <Text className="font-poppins-regular text-[38px] leading-[40px] text-text-primary">‹</Text>
          </Pressable>
          <Text className="mt-4 font-poppins-semibold text-[28px] leading-[38px] tracking-[-1px]"  >
            {isSignUp ? "Create your account" : "Welcome back"}
          </Text>
          <Text className="mt-2 font-poppins-regular text-[16px] leading-[24px] text-text-secondary">
          {isSignUp ? "Start your language journey today ✨" : "Continue your language journey"}
        </Text>

        <View className="relative mt-5 h-[125px] items-center justify-end overflow-visible">
          <Text className="absolute left-[24%] top-6 text-[19px] text-[#FF9F1C]">✦</Text>
          <Text className="absolute right-[20%] top-8 text-[19px] text-[#63A8FF]">✦</Text>
          <Text className="absolute right-[24%] top-[65px] text-[19px] text-[#FFD34E]">✦</Text>
          <Image
            accessibilityLabel="Waving Lingua fox"
            className="h-[145px] w-[195px]"
            resizeMode="contain"
            source={images.mascotAuth}
          />
        </View>

        <View className="mt-1 gap-2">
          <View className="h-[72px] justify-center rounded-[16px] border border-border px-5">
            <Text className="font-poppins-regular text-[14px] text-text-secondary">Email</Text>
            <TextInput
              autoCapitalize="none"
              className="mt-0.5 font-poppins-regular text-[17px] leading-[25px] text-text-primary"
              keyboardType="email-address"
              onChangeText={setEmail}
              placeholder="alex@gmail.com"
              placeholderTextColor="#0D132B"
              textContentType="emailAddress"
              value={email}
            />
          </View>

          <View className="h-[68px] flex-row items-center rounded-[16px] border border-border px-5">
            <View className="flex-1">
              <Text className="font-poppins-regular text-[14px] text-text-secondary">Password</Text>
              <TextInput
                className="mt-0.5 font-poppins-regular text-[17px] leading-[25px] text-text-primary"
                onChangeText={setPassword}
                placeholder="•••••••••"
                placeholderTextColor="#0D132B"
                secureTextEntry={!isPasswordVisible}
                textContentType={isSignUp ? "newPassword" : "password"}
                value={password}
              />
            </View>
            <Pressable
              accessibilityLabel={isPasswordVisible ? "Hide password" : "Show password"}
              onPress={() => setIsPasswordVisible((visible) => !visible)}
            >
              <Text className="text-[22px] text-text-secondary">◉</Text>
            </Pressable>
          </View>

          {formError ? (
            <Text className="font-poppins-regular text-[13px] text-error">{formError}</Text>
          ) : null}

          <Pressable
            className="h-[56px] items-center justify-center rounded-[16px] bg-lingua-purple"
            disabled={isSubmitting}
            onPress={handleSubmit}
            style={{ opacity: isSubmitting ? 0.7 : 1 }}
          >
            <Text className="font-poppins-semibold text-[21px] text-white">{actionLabel}</Text>
          </Pressable>
        </View>

        <View className="mt-6 flex-row items-center gap-4">
          <View className="h-px flex-1 bg-border" />
          <Text className="font-poppins-regular text-[14px] text-text-secondary">or continue with</Text>
          <View className="h-px flex-1 bg-border" />
        </View>

        <View className="mt-4 gap-3">
          {socialProviders.map((provider) => (
            <Pressable
              accessibilityLabel={`Continue with ${provider.name}`}
              className="h-[61px] flex-row items-center rounded-[18px] border border-border px-7"
              key={provider.name}
              onPress={() => handleSocialPress(provider.strategy)}
            >
              <Text className={`w-12 text-center font-poppins-bold ${provider.markClassName}`}>
                {provider.mark}
              </Text>
              <Text className="ml-5 font-poppins-regular text-[17px] text-text-primary">
                Continue with {provider.name}
              </Text>
            </Pressable>
          ))}
        </View>

        {socialError ? (
          <Text className="mt-3 text-center font-poppins-regular text-[13px] text-error">
            {socialError}
          </Text>
        ) : null}

        <View className="mt-7 flex-row justify-center">
          <Text className="font-poppins-regular text-[15px] text-text-secondary">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
          </Text>
          <Pressable onPress={() => router.replace(isSignUp ? "./sign-in" : "./sign-up")}>
            <Text className="font-poppins-medium text-[15px] text-lingua-purple">
              {isSignUp ? "Log in" : "Sign up"}
            </Text>
          </Pressable>
        </View>

        {isSignUp ? <View nativeID="clerk-captcha" /> : null}
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        error={verificationError}
        onResend={handleResendCode}
        onSubmit={handleVerifyCode}
        visible={showVerification}
      />
    </SafeAreaView>
  );
}
