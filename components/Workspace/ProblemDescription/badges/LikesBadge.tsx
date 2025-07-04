import { ThumbsUp } from "lucide-react";
import React from "react";

import { DBProblem } from "@/data/problems";
import { cn } from "@/lib/utils";

type LikesBadgeProps = {
  likes: DBProblem["likes"] | undefined;
  userLiked: boolean;
  onClick: () => void;
};

const LikesBadge: React.FC<LikesBadgeProps> = ({
  likes,
  userLiked,
  onClick,
}) => {
  return (
    <div className="flex gap-1 items-center" onClick={onClick}>
      {
        <ThumbsUp
          className={cn("h-4 w-4", userLiked && "text-blue-500")}
          fill={userLiked ? "currentColor" : "none"}
        />
      }
      <span>{likes}</span>
    </div>
  );
};
export default LikesBadge;
