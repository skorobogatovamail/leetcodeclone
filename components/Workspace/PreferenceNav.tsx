"use client";

import { Code, Fullscreen, TestTubeDiagonal } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const PreferenceNav: React.FC = () => {
  const [active, setActive] = useState<"code" | "testCases">("code");
  return (
    <div className="flex gap-2 items-center justify-between px-6 ">
      <div className="flex gap-2 items-center">
        <Button
          variant="ghost"
          className={cn(active === "testCases" && "text-neutral-500")}
          onClick={() => setActive("code")}
        >
          <Code className="h-4 w-4" />
          <span>Code</span>
        </Button>
        <Button
          variant="ghost"
          className={cn(active === "code" && "text-neutral-500")}
          onClick={() => setActive("testCases")}
        >
          <TestTubeDiagonal className="h-4 w-4" />
          <span>Test cases</span>
        </Button>
      </div>
      <div className="flex gap-2 items-center group relative">
        <Button
          variant="ghost"
          className={cn(
            active === "code" && "text-neutral-500"
            // "group relative"
          )}
        >
          <Fullscreen className="h-4 w-4" />
          <span className="tip">Full screen</span>
        </Button>
      </div>
    </div>
  );
};
export default PreferenceNav;
