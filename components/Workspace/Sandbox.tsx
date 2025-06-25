"use client";

import React from "react";
import Split from "react-split";
import PreferenceNav from "./PreferenceNav";
import CodeEditor from "./CodeEditor";
import TestCases from "./TestCases";
import EditorFooter from "./EditorFooter";

const Sandbox: React.FC = () => {
  return (
    <Split
      className="relative"
      direction="vertical"
      sizes={[60, 40]}
      minSize={60}
    >
      <div className="py-4 border-1 rounded-lg bg-white overflow-auto">
        <PreferenceNav />
        <CodeEditor />
      </div>
      <div className=" py-4 border-1 rounded-lg bg-white overflow-auto">
        <TestCases />
      </div>
      <EditorFooter />
    </Split>
  );
};
export default Sandbox;
