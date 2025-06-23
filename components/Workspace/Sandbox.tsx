"use client";

import React from "react";
import Split from "react-split";
import PreferenceNav from "./PreferenceNav";
import CodeEditor from "./CodeEditor";

const Sandbox: React.FC = () => {
  return (
    <Split
      className="h-[calc(100vh-94px)]"
      direction="vertical"
      sizes={[70, 30]}
    >
      <div className="mt-2 py-4  border-1 rounded-lg bg-white">
        <PreferenceNav />
        <CodeEditor />
      </div>
      <div></div>
    </Split>
  );
};
export default Sandbox;
