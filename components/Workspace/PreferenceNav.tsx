"use client";

import { Code, Fullscreen, TestTubeDiagonal } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const PreferenceNav: React.FC = () => {
  const [active, setActive] = useState<"code" | "testCases">("code");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    function exitHandler() {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
        return;
      }
      setIsFullscreen(true);
    }

    if (document.addEventListener) {
      document.addEventListener("fullscreenchange", exitHandler);
      document.addEventListener("webkitfullscreenchange", exitHandler);
      document.addEventListener("mozfullscreenchange", exitHandler);
      document.addEventListener("MSFullscreenChange", exitHandler);
    }
    return () => {
      document.removeEventListener("fullscreenchange", exitHandler);
      document.removeEventListener("webkitfullscreenchange", exitHandler);
      document.removeEventListener("mozfullscreenchange", exitHandler);
      document.removeEventListener("MSFullscreenChange", exitHandler);
    };
  }, [isFullscreen]);

  return (
    <div className="flex gap-2 items-center justify-between px-6 ">
      <div className="flex gap-2 items-center">
        <Button
          variant={active === "testCases" ? "ghost" : "secondary"}
          onClick={() => setActive("code")}
        >
          <Code className="h-4 w-4" />
          <span>Code</span>
        </Button>
        <Button
          variant={active === "code" ? "ghost" : "secondary"}
          onClick={() => setActive("testCases")}
        >
          <TestTubeDiagonal className="h-4 w-4" />
          <span>Test cases</span>
        </Button>
      </div>
      <div className="flex gap-2 items-center group relative">
        <Button
          variant="ghost"
          className={cn(active === "code" && "text-neutral-500")}
          onClick={handleFullscreen}
        >
          <Fullscreen className="h-4 w-4" />
          <span className="tip">Full screen</span>
        </Button>
      </div>
    </div>
  );
};
export default PreferenceNav;
