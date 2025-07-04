"use client";

import { indentWithTab } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";
import { indentUnit } from "@codemirror/language";
import { EditorView } from "@codemirror/view";
import { keymap } from "@codemirror/view";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";
import React from "react";

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
  const extensions = [
    javascript(),
    indentUnit.of("  "), // 2 пробела для отступов
    EditorView.lineWrapping,
    keymap.of([indentWithTab]), // Добавляем стандартное поведение табуляции
  ];

  return (
    <div className="mt-2">
      <CodeMirror
        value={code}
        theme={vscodeLight}
        extensions={extensions}
        style={{ fontSize: 14 }}
        onChange={onChange}
        basicSetup={{
          tabSize: 2,
          lineNumbers: true,
          highlightActiveLineGutter: true,
          foldGutter: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          searchKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
