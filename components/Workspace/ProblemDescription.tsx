'use client'

import React, { useState } from "react";
import { Check, LoaderCircle, ScrollText, Star, ThumbsUp } from "lucide-react";
import { useAuthState } from "react-firebase-hooks/auth";

import { cn } from "@/lib/utils";
import { Problem } from "@/data/types/problem";
import { auth, firestore } from "@/firebase/firebase";
import { useFetchProblem } from "@/hooks/useFetchProblem";
import { useGetUsersProblemData } from "@/hooks/useGetUsersProblemData";
import RectangleSkeleton from "../Skeletons/RectangleSkeleton";
import CircleSkeleton from "../Skeletons/CircleSkeleton";
import Title from "../Title";
import { collection, doc, getDoc, runTransaction } from "firebase/firestore";

interface ProblemDescriptionProps {
  problem: Problem
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem }) => {
  const [user] = useAuthState(auth)
  const { problem: problemData, setProblem: setProblemData, loading } = useFetchProblem(problem.id)
  const { userProblemData, setUserProblemData } = useGetUsersProblemData(problem.id)
  const [updating, setUpdating] = useState(false)

  const handleLike = async () => {
    if (!user) return;
    if (updating) return;

    setUpdating(true)
    await runTransaction(firestore, async (transaction) => {
      const usersCollection = collection(firestore, 'users')
      const problemsCollection = collection(firestore, 'problems')

      const userRef = doc(usersCollection, user.uid)
      const problemRef = doc(problemsCollection, problem.id)

      const userDoc = await transaction.get(userRef)
      const problemDoc = await transaction.get(problemRef)

      if (userDoc.exists() && problemDoc.exists()) {
        if (userProblemData.liked) {
          transaction.update(userRef, {
            likedProblems: userDoc.data().likedProblems.filter((el: string) => el !== problem.id)
          })

          transaction.update(problemRef, {
            likes: problemDoc.data().likes - 1
          })

          setUserProblemData(prev => ({ ...prev, liked: false }))
          setProblemData(prev => prev ? ({ ...prev, likes: prev?.likes ? prev?.likes - 1 : 0 }) : null)

        } else {
          transaction.update(userRef, {
            likedProblems: [...userDoc.data().likedProblems, problem.id]
          })

          transaction.update(problemRef, {
            likes: problemDoc.data().likes + 1
          })

          setUserProblemData(prev => ({ ...prev, liked: true }))
          setProblemData(prev => prev ? ({ ...prev, likes: prev?.likes ? prev?.likes + 1 : 1 }) : null)
        }
      }
    })
    setUpdating(false)
  }

  return (
    <div className="py-4 px-6  border-1 rounded-lg bg-white">
      <div className="flex items-center">
        <div className="flex gap-2 items-center">
          <ScrollText className="h-4 w-4" />
          <span className="text-sm">Description</span>
        </div>
      </div>

      <div className="pt-4 h-full rounded-r-md flex flex-col gap-3">
        <Title text={problem.title} as="h3" />
        <div className="flex gap-3 items-center">

          {loading
            ? <RectangleSkeleton />
            : <div className={cn(
              "text-sm py-1 px-3 rounded-full",
              problemData?.difficulty === "Easy"
                ? "text-green-500 bg-green-100"
                : problemData?.difficulty === "Medium"
                  ? "text-orange-500 bg-orange-100"
                  : "text-red-500 bg-red-100"
            )}>
              {problemData?.difficulty}
            </div>}

          {loading
            ? <CircleSkeleton />
            : <Check className={cn("h-4 w-4 text-green-600", userProblemData.solved && "text-green-500")} />
          }

          {loading
            ? <RectangleSkeleton />
            : updating
              ? <LoaderCircle className="animate-spin" />
              : <div className="flex gap-1 items-center" onClick={handleLike}>
                {<ThumbsUp className={cn("h-4 w-4", userProblemData.liked && "text-blue-500")} />}
                <span>{problemData?.likes}</span>
              </div>
          }

          {loading
            ? <CircleSkeleton />
            : <Star className={cn("h-4 w-4", userProblemData.starred && "text-yellow-500")} />
          }
        </div>

        <div dangerouslySetInnerHTML={{ __html: problem.problemStatement }}></div>

        <div className="mt-4 text-sm">
          {problem.examples.map((el) => (
            <div key={el.id}>
              <p>Example {el.id}: </p>
              {el.img && <img src={el.img} alt='task image' className="mt-3"></img>}
              <div className="example-card">
                <pre className="bg-neutral-200 ">
                  <strong>Input: </strong> {el.inputText} <br />
                  <strong>Output:</strong> {el.outputText} <br />
                  {el.explanation && (
                    <>
                      <strong>Explanation:</strong> {el.explanation}
                    </>
                  )}

                </pre>
              </div>
            </div>
          ))}
        </div>

        <div className='my-8 pb-4'>
          <div className='text-sm font-medium'>Constraints:</div>
          <ul className='ml-5 list-disc '>
            <div dangerouslySetInnerHTML={{ __html: problem.constraints }} />
          </ul>
        </div>
      </div>
    </div >
  );
};
export default ProblemDescription;
