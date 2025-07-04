"use client";

import React, { useState } from "react";
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
  const [success, setSuccess] = useState(false)
  const [solved, setSolved] = useState(false)
  return (
    <div>
      <Split className="split h-full">
        <ProblemDescription problem={problem} _solved={solved} />
        <Sandbox setSuccess={setSuccess} problem={problem} setSolved={setSolved} />
      </Split>
      {success && <Confetti
        gravity={0.3}
        tweenDuration={4000}
        width={windowSize.width}
        height={windowSize.height}
      />}
    </div>
  );
};
export default Workspace;
