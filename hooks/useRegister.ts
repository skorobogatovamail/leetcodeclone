import { useRouter } from "next/navigation";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { collection, doc, setDoc } from "firebase/firestore";

import { auth, firestore } from "@/firebase/firebase";

export const useRegister = () => {
    const router = useRouter();

    const [createUserWithEmailAndPassword, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const register = async (inputs: Record<string, string>) => {
        const newUser = await createUserWithEmailAndPassword(
            inputs.email,
            inputs.password
        );

        if (!newUser) return;

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

    return { register, loading }
}
