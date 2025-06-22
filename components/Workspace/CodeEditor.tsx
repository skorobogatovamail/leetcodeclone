import React from "react";
import PreferenceNav from "./PreferenceNav";

type CodeEditorProps = {};

const CodeEditor: React.FC<CodeEditorProps> = () => {
  return (
    <div className="px-4 sm:px-10 rounded h-full border-2 py-4">
      <PreferenceNav />
    </div>
  );
};
export default CodeEditor;
