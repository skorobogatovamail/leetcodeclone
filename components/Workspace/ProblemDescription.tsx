'use client'

import React from "react";
import Title from "../Title";
import { Check, ScrollText, Star, ThumbsUp } from "lucide-react";
import { Problem } from "@/data/types/problem";
import { useFetchProblem } from "@/hooks/useFetchProblem";
import RectangleSkeleton from "../Skeletons/RectangleSkeleton";
import CircleSkeleton from "../Skeletons/CircleSkeleton";
import { cn } from "@/lib/utils";

interface ProblemDescriptionProps {
  problem: Problem
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem }) => {

  const { problem: problemData, loading } = useFetchProblem(problem.id)
  console.log(problemData)

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
          {loading ? <RectangleSkeleton /> : <div className={cn(
            "text-sm py-1 px-3 rounded-full",
            problemData?.difficulty === "Easy"
              ? "text-green-500 bg-green-100"
              : problemData?.difficulty === "Medium"
                ? "text-orange-500 bg-orange-100"
                : "text-red-500 bg-red-100"
          )}>{problemData?.difficulty}</div>}
          {loading ? <CircleSkeleton /> : <Check className="h-4 w-4 text-green-600" />}
          {loading ? <RectangleSkeleton /> :
            <div className="flex gap-1 items-center">
              <ThumbsUp className="h-4 w-4" />
              <span>{problemData?.likes}</span>
            </div>}
          {loading ? <CircleSkeleton /> : <Star className="h-4 w-4" />}
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
