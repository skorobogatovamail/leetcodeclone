// components/GoogleAuth.tsx
"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useMutation } from "@tanstack/react-query";
import { signInWithCustomToken } from "firebase/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { auth } from "@/firebase/firebase";
import { closeAuthModal } from "@/lib/features/authModalSlice";
import { useAppDispatch } from "@/lib/hooks";

export default function GoogleAuth() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const loginMutation = useMutation({
    mutationFn: async (token: string) => {
      const response = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Google authentication failed");
      }

      return response.json();
    },
    onSuccess: async (data) => {
      try {
        // Входим в Firebase с кастомным токеном
        await signInWithCustomToken(auth, data.token);

        toast.success("Logged in successfully with Google");
        dispatch(closeAuthModal());
        router.push("/tasks");
      } catch (error) {
        toast.error("Failed to sign in with custom token");
        console.error("Firebase sign in error:", error);
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        if (credentialResponse.credential) {
          loginMutation.mutate(credentialResponse.credential);
        }
      }}
      onError={() => {
        toast.error("Google authentication failed");
      }}
      useOneTap // Опционально: включает One Tap sign-in
      auto_select // Опционально: автоматически выбирает аккаунт если пользователь уже входил
    />
  );
}
