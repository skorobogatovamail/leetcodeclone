import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, firestore } from "@/firebase/firebase";

export const useGetUsersProblemData = (problemId: string) => {
  const [userProblemData, setUserProblemData] = useState({
    solved: false,
    liked: false,
    starred: false,
  });
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchData = async () => {
      const usersCollection = collection(firestore, "users");
      const userRef = doc(usersCollection, user?.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data();
        const { solvedProblems, likedProblems, starredProblems } = userData;
        setUserProblemData({
          solved: solvedProblems.includes(problemId),
          liked: likedProblems.includes(problemId),
          starred: starredProblems.includes(problemId),
        });
      }
    };
    if (user) fetchData();
  }, [problemId, user]);

  return { userProblemData, setUserProblemData };
};
