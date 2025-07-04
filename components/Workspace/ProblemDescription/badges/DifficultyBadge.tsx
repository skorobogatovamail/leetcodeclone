import { DBProblem } from "@/data/problems";
import { cn } from "@/lib/utils";
import React from "react";

type DifficultyBadgeProps = {
  difficulty: DBProblem["difficulty"];
};

const colors = {
  Easy: "text-green-500 bg-green-100",
  Medium: "text-orange-500 bg-orange-100",
  Hard: "text-red-500 bg-red-100",
};

const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({
  difficulty = "Easy",
}) => {
  return (
    <div
      className={cn(
        "text-sm py-1 px-3 rounded-full",
        colors[difficulty as keyof typeof colors]
      )}
    >
      {difficulty}
    </div>
  );
};
export default DifficultyBadge;
