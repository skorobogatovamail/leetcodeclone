"use client";

import { arrayUnion, collection, doc, updateDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Split from "react-split";
import { toast } from "react-toastify";

import { problems } from "@/data/problems/index";
import { Problem } from "@/data/types/problem";
import { auth, firestore } from "@/firebase/firebase";

import CodeEditor from "./CodeEditor";
import EditorFooter from "./EditorFooter";
import PreferenceNav from "./PreferenceNav";
import TestCases from "./TestCases";

interface SandboxProps {
  problem: Problem;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setSolved: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sandbox: React.FC<SandboxProps> = ({
  problem,
  setSuccess,
  setSolved,
}) => {
  const [userCode, setUserCode] = React.useState(problem.starterCode);
  const [user] = useAuthState(auth);
  const { pid } = useParams();

  const handleSubmit = async () => {
    if (!user) {
      toast.error("You need to be logged in to submit your solution");
      return;
    }
    try {
      const cleanedCode = userCode.trim().replace(/;\s*$/, "");
      const userFunction = new Function(`return (${cleanedCode})`)();

      // Проверяем, что это действительно функция
      if (typeof userFunction !== "function") {
        throw new Error("Your code must define a function");
      }
      const handler = problems[pid as string].handlerFunction;

      if (typeof handler === "function") {
        const success = handler(userFunction);

        if (success) {
          toast.success("Your solution passed all test cases!");
          setSolved(true);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 4000);

          const usersCollection = collection(firestore, "users");
          const userRef = doc(usersCollection, user.uid);
          await updateDoc(userRef, {
            solvedProblems: arrayUnion(pid),
          });
        }
      }
    } catch (error) {
      console.log(error instanceof Error ? error.message : error);
      if (
        error instanceof Error &&
        error.message.startsWith("AssertionError:")
      ) {
        toast.error("Your solution failed one or more test cases!");
      }
      toast.error(error instanceof Error ? error.message : "error");
    }
  };

  const onChange = (code: string) => {
    setUserCode(code);
    localStorage.setItem(`code-${pid}`, JSON.stringify(code));
  };

  useEffect(() => {
    const code = localStorage.getItem(`code-${pid}`);
    if (user) {
      setUserCode(
        code && code !== "{}" ? JSON.parse(code) : problem.starterCode
      );
    } else {
      setUserCode(problem.starterCode);
    }
  }, [pid, user, problem.starterCode]);

  return (
    <Split
      className="relative"
      direction="vertical"
      sizes={[60, 40]}
      minSize={60}
    >
      <div className="py-4 border-1 rounded-lg bg-white overflow-auto">
        <PreferenceNav />
        <CodeEditor code={userCode} onChange={onChange} />
      </div>
      <div className=" py-4 border-1 rounded-lg bg-white overflow-auto">
        <TestCases testCases={problem.examples} />
      </div>
      <EditorFooter handleSubmit={handleSubmit} />
    </Split>
  );
};
export default Sandbox;
