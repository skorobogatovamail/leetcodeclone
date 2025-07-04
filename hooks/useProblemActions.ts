import { User } from "firebase/auth";
import { doc, runTransaction } from "firebase/firestore";
import { useState, useCallback } from "react";

import { firestore } from "@/firebase/firebase";

interface UseProblemActionsProps {
  problemId: string;
  user?: User | null | undefined;
  currentUserData?: {
    liked: boolean;
    starred: boolean;
  };
  setProblemData: React.Dispatch<React.SetStateAction<any>>; // eslint-disable-line @typescript-eslint/no-explicit-any
  setUserProblemData: React.Dispatch<React.SetStateAction<any>>; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export const useProblemActions = ({
  problemId,
  user,
  currentUserData,
  setProblemData,
  setUserProblemData,
}: UseProblemActionsProps) => {
  const [updatingLike, setUpdatingLike] = useState(false);
  const [updatingStar, setUpdatingStar] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateProblemInteraction = useCallback(
    async (type: "like" | "star", action: "add" | "remove") => {
      if (!user) {
        setError("You need to be logged in to perform this action");
        return;
      }

      const isLike = type === "like";
      const updatingState = isLike ? setUpdatingLike : setUpdatingStar;
      updatingState(true);
      setError(null);

      try {
        await runTransaction(firestore, async (transaction) => {
          const userRef = doc(firestore, "users", user.uid);
          const userDoc = await transaction.get(userRef);

          if (!userDoc.exists()) return;

          // Обработка star
          if (type === "star") {
            const starredProblems = userDoc.data().starredProblems || [];
            const newStarred =
              action === "add"
                ? [...starredProblems, problemId]
                : starredProblems.filter((id: string) => id !== problemId);

            transaction.update(userRef, {
              starredProblems: newStarred,
            });
            setUserProblemData(
              (prev: { liked: boolean; starred: boolean }) => ({
                ...prev,
                starred: action === "add",
              })
            );
            return;
          }

          // Обработка like
          const problemRef = doc(firestore, "problems", problemId);
          const problemDoc = await transaction.get(problemRef);

          if (problemDoc.exists()) {
            const currentLikes = problemDoc.data().likes || 0;
            const likedProblems = userDoc.data().likedProblems || [];
            const newLikes =
              action === "add" ? currentLikes + 1 : currentLikes - 1;
            const newLiked =
              action === "add"
                ? [...likedProblems, problemId]
                : likedProblems.filter((id: string) => id !== problemId);

            transaction.update(userRef, {
              likedProblems: newLiked,
            });
            transaction.update(problemRef, { likes: newLikes });

            setUserProblemData(
              (prev: { liked: boolean; starred: boolean }) => ({
                ...prev,
                liked: action === "add",
              })
            );
            setProblemData((prev: { likes?: number } | null) =>
              prev ? { ...prev, likes: newLikes } : null
            );
          }
        });
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(`Failed to ${action} ${type}`);
        }
      } finally {
        updatingState(false);
      }
    },
    [user, problemId, setUserProblemData, setProblemData]
  );

  const handleLike = useCallback(async () => {
    const action = currentUserData?.liked ? "remove" : "add";
    await updateProblemInteraction("like", action);
  }, [currentUserData?.liked, updateProblemInteraction]);

  const handleStar = useCallback(async () => {
    const action = currentUserData?.starred ? "remove" : "add";
    await updateProblemInteraction("star", action);
  }, [currentUserData?.starred, updateProblemInteraction]);

  return {
    handleLike,
    handleStar,
    updatingLike,
    updatingStar,
    error,
    setError,
  };
};
