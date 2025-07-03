"use client";

import React from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import Sandbox from "./Sandbox";
import { Problem } from "@/data/types/problem";

interface WorkspaceProps {
  problem: Problem
}

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  return (
    <div>
      <Split className="split h-full">
        <ProblemDescription problem={problem} />
        <Sandbox problem={problem} />
      </Split>
    </div>
  );
};
export default Workspace;
