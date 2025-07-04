import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, doc, getDoc } from "firebase/firestore";

import { auth, firestore } from "@/firebase/firebase";

export const useGetSolvedProblems = () => {
  const [user] = useAuthState(auth);
  const [userSolvedProblems, setUserSolvedProblems] = useState([]);

  useEffect(() => {
    const getUserSolvedProblems = async () => {
      if (user) {
        const usersCollectoin = collection(firestore, "users");
        const userRef = doc(usersCollectoin, user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const solvedProblems = userDoc?.data()?.solvedProblems;
          setUserSolvedProblems(solvedProblems);
        }
      }
    };
    getUserSolvedProblems();
  }, [user]);

  return userSolvedProblems;
};
