import React from "react";

import { Problem } from "@/data/types/problem";

import ProblemExample from "./ProblemExample";

type ProblemDescriptionExamplesProps = {
  examples: Problem["examples"];
};

const ProblemDescriptionExamples: React.FC<ProblemDescriptionExamplesProps> = ({
  examples,
}) => {
  return (
    <div className="mt-4 text-sm">
      {examples.map((example) => (
        <ProblemExample key={example.id} example={example} />
      ))}
    </div>
  );
};
export default ProblemDescriptionExamples;
