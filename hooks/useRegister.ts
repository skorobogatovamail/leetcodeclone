import { useRouter } from "next/navigation";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { collection, doc, setDoc } from "firebase/firestore";

import { auth, firestore } from "@/firebase/firebase";
import { toast } from "react-toastify";

export const useRegister = () => {
    const router = useRouter();

    const [createUserWithEmailAndPassword, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const register = async (inputs: Record<string, string>) => {
        try {
            const newUser = await createUserWithEmailAndPassword(
                inputs.email,
                inputs.password
            );

            if (newUser) {
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
                };

                const usersCollection = collection(firestore, "users");
                await setDoc(doc(usersCollection, newUser.user.uid), userData)

                router.push("/tasks");
            }

        } catch (err) {
            toast.error(err instanceof Error ? err.message : String(err));
        }
    }

    return { register, loading, error }
}
