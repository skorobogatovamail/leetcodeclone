import React from "react";

import { Example } from "@/data/types/problem";

type ProblemExampleProps = {
  example: Example;
};

const ProblemExample: React.FC<ProblemExampleProps> = ({ example }) => {
  return (
    <>
      <p>Example {example.id}: </p>
      {example.img && (
        <img src={example.img} alt="task image" className="mt-3"></img>
      )}
      <div className="example-card">
        <pre className="bg-neutral-200 ">
          <strong>Input: </strong> {example.inputText} <br />
          <strong>Output:</strong> {example.outputText} <br />
          {example.explanation && (
            <>
              <strong>Explanation:</strong> {example.explanation}
            </>
          )}
        </pre>
      </div>
    </>
  );
};
export default ProblemExample;
