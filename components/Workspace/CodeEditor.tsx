"use client";

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";

const CodeEditor: React.FC = () => {
  const boilerplate = `
  function twoSum(nums, target) => {
  // your code here
  };
  `;
  return (
    <div className="mt-2">
      <CodeMirror
        value={boilerplate}
        theme={vscodeLight}
        extensions={[javascript()]}
        style={{ fontSize: 16 }}
      />
    </div>
  );
};
export default CodeEditor;
