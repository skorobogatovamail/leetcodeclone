import React from "react";
import { Button } from "../ui/button";
import { Problem } from "@/data/types/problem";

interface TestCasesProps {
  testCases: Problem['examples']
}
const TestCases: React.FC<TestCasesProps> = ({ testCases }) => {
  return (
    <div className="px-6">
      <div>
        <span className="text-sm relative">
          Test Cases
          <hr className="absolute -bottom-1 h-0.5 w-full rounded-lg bg-neutral-300"></hr>
        </span>
      </div>

      <div className="flex mt-3 gap-2">
        {testCases.map(el => (
          <Button key={el.id} variant="secondary">Case {el.id + 1}</Button>
        ))}
      </div>

      <div className=" my-4">
        {testCases.map(el => (
          <React.Fragment key={el.id}>
            <p className="text-sm font-medium mt-4 ">Input:</p>
            <div className="cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent mt-2 text-sm bg-neutral-200">
              {el.inputText}
            </div>
            <p className="text-sm font-medium mt-4 ">Output:</p>
            <div className=" cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent  mt-2 text-sm  bg-neutral-200">
              {el.outputText}
            </div>
          </React.Fragment>

        ))}
      </div>
    </div>
  );
};
export default TestCases;
