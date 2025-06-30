import React from "react";
import Title from "../Title";
import { Check, ScrollText, Star, ThumbsUp } from "lucide-react";
import { Problem } from "@/data/types/problem";

interface ProblemDescriptionProps {
  problem: Problem
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem }) => {
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
        <div className="flex gap-2 items-center">
          <div>Easy</div>
          <Check className="h-4 w-4" />
          <ThumbsUp className="h-4 w-4" />
          <Star className="h-4 w-4" />
        </div>

        <div dangerouslySetInnerHTML={{ __html: problem.problemStatement }}></div>

        <div className="mt-4 text-sm">
          {problem.examples.map((el) => (
            <div key={el.id}>
              <p>Example {el.id}: </p>
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
      </div>
    </div >
  );
};
export default ProblemDescription;
