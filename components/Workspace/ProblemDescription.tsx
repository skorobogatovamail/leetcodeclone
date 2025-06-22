import React from "react";
import Title from "../Title";
import { Check, ScrollText, Star, ThumbsUp } from "lucide-react";

type ProblemDescriptionProps = {};

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {
  return (
    <div className="px-2 sm:px-5 border-2 py-6">
      <div className="flex items-center">
        <div className="flex gap-2 items-center">
          <ScrollText className="h-4 w-4" />
          Description
        </div>
      </div>

      <div className="pt-4 h-full rounded-r-md flex flex-col gap-3">
        <Title text="Two Sum" as="h3" />
        <div className="flex gap-2 items-center">
          <div>Easy</div>
          <Check className="h-4 w-4" />
          <ThumbsUp className="h-4 w-4" />
          <Star className="h-4 w-4" />
        </div>

        <div className=" text-sm flex flex-col gap-3">
          <p>
            Given an array of integers <code>nums</code> and an integer{" "}
            <code>target</code>, return{" "}
            <em>indices of the two numbers such that they add up to</em>{" "}
            <code>target</code>.
          </p>
          <p>
            You may assume that each input would have{" "}
            <strong>exactly one solution</strong>, and you may not use thesame
            element twice.
          </p>
          <p>You can return the answer in any order.</p>
        </div>

        <div className="mt-4 text-sm">
          <div>
            <p>Example 1: </p>
            <div className="example-card">
              <pre className="bg-neutral-200 ">
                <strong>Input: </strong> nums = [2,7,11,15], target = 9 <br />
                <strong>Output:</strong> [0,1] <br />
                <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we
                return [0, 1].
              </pre>
            </div>
          </div>

          <div>
            <p>Example 2: </p>
            <div className="example-card">
              <pre className="bg-neutral-200 ">
                <strong>Input: </strong> nums = [3,2,4], target = 6 <br />
                <strong>Output:</strong> [1,2] <br />
                <strong>Explanation:</strong> Because nums[1] + nums[2] == 6, we
                return [1, 2].
              </pre>
            </div>
          </div>

          <div>
            <p>Example 3: </p>
            <div className="example-card">
              <pre className="bg-neutral-200 ">
                <strong>Input: </strong> nums = [3,3], target = 6
                <br />
                <strong>Output:</strong> [0,1] <br />
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProblemDescription;
