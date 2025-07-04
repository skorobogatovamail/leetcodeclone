import React from "react";

import { Button } from "../ui/button";

interface EditorFooterProps {
  handleSubmit: () => void;
}

const EditorFooter: React.FC<EditorFooterProps> = ({ handleSubmit }) => {
  return (
    <div className="flex bg-dark-layer-1 z-10  absolute bottom-0 w-full justify-end items-center">
      <div className="mx-5 my-[10px] flex gap-4">
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline">Run</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
};
export default EditorFooter;
