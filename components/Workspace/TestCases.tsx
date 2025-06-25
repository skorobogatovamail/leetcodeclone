import React from "react";
import { Button } from "../ui/button";

const TestCases: React.FC = () => {
  return (
    <div className="px-6">
      <div>
        <span className="text-sm relative">
          Test Cases
          <hr className="absolute -bottom-1 h-0.5 w-full rounded-lg bg-neutral-300"></hr>
        </span>
      </div>

      <div className="flex mt-3 gap-2">
        <Button variant="secondary">Case 1</Button>
        <Button variant="secondary">Case 2</Button>
        <Button variant="secondary">Case 3</Button>
      </div>

      <div className=" my-4">
        <p className="text-sm font-medium mt-4 ">Input:</p>
        <div className="cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent mt-2 text-sm bg-neutral-200">
          nums: [2,7,11,15], target: 9
        </div>
        <p className="text-sm font-medium mt-4 ">Output:</p>
        <div className=" cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent  mt-2 text-sm  bg-neutral-200">
          [0, 1]
        </div>
      </div>
    </div>
  );
};
export default TestCases;
