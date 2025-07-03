"use client";

import React from "react";
import Split from "react-split";
import Confetti from 'react-confetti';

import { Problem } from "@/data/types/problem";
import { useWindowSize } from "@/hooks/useWindowSize";

import ProblemDescription from "./ProblemDescription/ProblemDescription";
import Sandbox from "./Sandbox";


interface WorkspaceProps {
  problem: Problem
}

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  const windowSize = useWindowSize()

  return (
    <div>
      <Split className="split h-full">
        <ProblemDescription problem={problem} />
        <Sandbox problem={problem} />
      </Split>
      <Confetti
        gravity={0.3}
        tweenDuration={4000}
        width={windowSize.width}
        height={windowSize.height}
      />
    </div>
  );
};
export default Workspace;
