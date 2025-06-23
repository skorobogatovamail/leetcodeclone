"use client";

import React from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription";
import CodeEditor from "./CodeEditor";

const Workspace: React.FC = () => {
  return (
    <Split className="split h-full">
      <ProblemDescription />
      <CodeEditor />
    </Split>
  );
};
export default Workspace;
