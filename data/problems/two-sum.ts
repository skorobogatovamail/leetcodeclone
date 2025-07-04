import assert from "assert";

import { Problem } from "../types/problem";

const handlerTwoSum = (fn: (nums: number[], target: number) => number[]) => {
  try {
    const nums = [
      [2, 7, 11, 3],
      [0, 12, 5, 2, 3],
      [4, 10, 8, 1],
    ];

    const targets = [9, 8, 11];

    const answers = [
      [0, 1],
      [2, 4],
      [1, 3],
    ];

    for (let i = 0; i < nums.length; i += 1) {
      const result = fn(nums[i], targets[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    throw error;
  }
};

const starterCodeTwoSum = `
    function twoSum(nums, target) {
    // your code here
    };
`;

export const twoSum: Problem = {
  id: "two-sum",
  title: "1. Two Sum",
  problemStatement: `<div class=" text-sm flex flex-col gap-3">
          <p>
            Given an array of integers <code>nums</code> and an integer
            <code>target</code>, return
            <em>indices of the two numbers such that they add up to</em>
            <code>target</code>.
          </p>
          <p>
            You may assume that each input would have
            <strong>exactly one solution</strong>, and you may not use thesame
            element twice.
          </p>
          <p>You can return the answer in any order.</p>
        </div>`,
  examples: [
    {
      id: 1,
      inputText: "nums = [2,7,11,15], target = 9",
      outputText: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      id: 2,
      inputText: "nums = [3,2,4], target = 6",
      outputText: "[1,2]",
      explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
    },
    {
      id: 3,
      inputText: " nums = [3,3], target = 6",
      outputText: "[0,1]",
    },
  ],
  constraints: `<li class='mt-2'>
  <code>2 ≤ nums.length ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ nums[i] ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ target ≤ 10</code>
</li>
<li class='mt-2 text-sm'>
<strong>Only one valid answer exists.</strong>
</li>`,
  handlerFunction: handlerTwoSum,
  starterCode: starterCodeTwoSum,
  order: 1,
  starterFunctionName: "function twoSum(",
};
