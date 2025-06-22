"use client";

import React from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription";
import CodeEditor from "./CodeEditor";

type WorkspaceProps = {};

const Workspace: React.FC<WorkspaceProps> = () => {
  return (
    <Split className="split h-full">
      <ProblemDescription />
      <CodeEditor />
    </Split>
  );
};
export default Workspace;
