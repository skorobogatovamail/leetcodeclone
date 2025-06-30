"use client";

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";

interface CodeEditorProps {
  code: string
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code }) => {
  const boilerplate = code;
  return (
    <div className="mt-2">
      <CodeMirror
        value={boilerplate}
        theme={vscodeLight}
        extensions={[javascript()]}
        style={{ fontSize: 14 }}
      />
    </div>
  );
};
export default CodeEditor;
