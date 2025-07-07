// hooks/useRegister.ts
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

import { auth, firestore } from "@/firebase/firebase";

export const useRegister = () => {
  const router = useRouter();

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const register = async (inputs: Record<string, string>) => {
    try {
      if (!inputs.email || !inputs.password || !inputs.name) {
        throw new Error("Please fill all fields");
      }

      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (!newUser) {
        throw new Error("Failed to create user");
      }

      const userData = {
        name: inputs.name,
        uid: newUser.user.uid,
        email: newUser.user.email,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        likedProblems: [],
        dislikedProblems: [],
        solvedProblems: [],
        starredProblems: [],
        photoURL: "",
        emailVerified: false,
        provider: "email",
      };

      await setDoc(doc(firestore, "users", newUser.user.uid), userData);
      router.push("/tasks");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Registration failed";
      toast.error(errorMessage);
      throw err; // Пробрасываем ошибку для обработки в компоненте
    }
  };

  return { register, loading, error };
};
