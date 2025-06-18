import React from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription";
import CodeEditor from "./CodeEditor";

type WorkspaceProps = {};

const Workspace: React.FC<WorkspaceProps> = () => {
  return (
    <Split>
      <div>
        <ProblemDescription />
      </div>
      <div>
        <CodeEditor />
      </div>
    </Split>
  );
};
export default Workspace;
