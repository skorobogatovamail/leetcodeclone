"use client";

import React from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription";
import Sandbox from "./Sandbox";

const Workspace: React.FC = () => {
  return (
    <div>
      <Split className="split h-full">
        <ProblemDescription />
        <Sandbox />
      </Split>
    </div>
  );
};
export default Workspace;
