"use client";

import { ClockFading } from "lucide-react";
import React, { useEffect, useState } from "react";

const Timer: React.FC = () => {
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleClockClick = () => {
    setShowTimer((prev) => !prev);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (showTimer) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      setTime(0);
    }

    return () => clearInterval(intervalId);
  }, [showTimer]);

  return (
    <div
      className=" rounded text-orange-500 hover:bg-neutral-200 p-1 cursor-pointer"
      onClick={handleClockClick}
    >
      {showTimer ? (
        <div className="flex items-center gap-2">
          <ClockFading />
          <span>{formatTime(time)}</span>
        </div>
      ) : (
        <ClockFading />
      )}
    </div>
  );
};
export default Timer;
