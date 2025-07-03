"use client";

import React from "react";
import Split from "react-split";
import { useAuthState } from "react-firebase-hooks/auth";

import { Problem } from "@/data/types/problem";
import { auth } from "@/firebase/firebase";

import PreferenceNav from "./PreferenceNav";
import CodeEditor from "./CodeEditor";
import TestCases from "./TestCases";
import EditorFooter from "./EditorFooter";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";
import { problems } from "@/data/problems/index";

interface SandboxProps {
  problem: Problem,
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

const Sandbox: React.FC<SandboxProps> = ({ problem, setSuccess }) => {
  const [userCode, setUserCode] = React.useState(problem.starterCode);
  const [user] = useAuthState(auth)
  const { pid } = useParams()

  const handleSubmit = () => {
    if (!user) {
      toast.error("You need to be logged in to submit your solution");
      return;
    }
    try {
      const cleanedCode = userCode.trim().replace(/;\s*$/, '');
      const userFunction = new Function(`return (${cleanedCode})`)();

      // Проверяем, что это действительно функция
      if (typeof userFunction !== 'function') {
        throw new Error('Your code must define a function');
      }
      const handler = problems[pid as string].handlerFunction;
      if (typeof handler === 'function') {
        const success = handler(userFunction);

        if (success) {
          toast.success("Your solution passed all test cases!");
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 4000);
        }
      }


    } catch (error) {
      console.log(error instanceof Error ? error.message : error);
      if (error instanceof Error && error.message.startsWith('AssertionError:')) {
        toast.error("Your solution failed one or more test cases!");
      }
      toast.error(error instanceof Error ? error.message : 'error');
    }
  }

  const onChange = (code: string) => {
    setUserCode(code);
  }

  return (
    <Split
      className="relative"
      direction="vertical"
      sizes={[60, 40]}
      minSize={60}
    >
      <div className="py-4 border-1 rounded-lg bg-white overflow-auto">
        <PreferenceNav />
        <CodeEditor code={problem.starterCode} onChange={onChange} />
      </div>
      <div className=" py-4 border-1 rounded-lg bg-white overflow-auto">
        <TestCases testCases={problem.examples} />
      </div>
      <EditorFooter handleSubmit={handleSubmit} />
    </Split>
  );
};
export default Sandbox;
