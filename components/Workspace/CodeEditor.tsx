"use client";

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";

const CodeEditor: React.FC = () => {
  return (
    <CodeMirror
      value="const a = 1"
      theme={vscodeDark}
      extensions={[javascript()]}
      style={{ fontSize: 16 }}
    />
  );
};
export default CodeEditor;
