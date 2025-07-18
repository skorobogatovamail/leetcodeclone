import { Check, LoaderCircle, Star } from "lucide-react";
import React from "react";

import { DBProblem } from "@/data/problems";
import { cn } from "@/lib/utils";

import CircleSkeleton from "../../Skeletons/CircleSkeleton";
import RectangleSkeleton from "../../Skeletons/RectangleSkeleton";

import DifficultyBadge from "./badges/DifficultyBadge";
import LikesBadge from "./badges/LikesBadge";

type ProblemDescriptionBadgesProps = {
  problemData: DBProblem;
  userProblemData: { liked: boolean; solved: boolean; starred: boolean };
  loading: boolean;
  updatingLike: boolean;
  updatingStar: boolean;
  _solved: boolean;
  onLike: () => void;
  onStar: () => void;
};

const ProblemDescriptionBadges: React.FC<ProblemDescriptionBadgesProps> = ({
  problemData,
  userProblemData,
  loading,
  updatingLike,
  updatingStar,
  _solved,
  onLike,
  onStar,
}) => {
  return (
    <div className="flex gap-3 items-center">
      {loading ? (
        <RectangleSkeleton />
      ) : (
        problemData?.difficulty && (
          <DifficultyBadge difficulty={problemData?.difficulty} />
        )
      )}

      {loading ? (
        <CircleSkeleton />
      ) : (
        (userProblemData.solved || _solved) && (
          <Check className="h-4 w-4 text-green-500" />
        )
      )}

      {loading ? (
        <RectangleSkeleton />
      ) : updatingLike ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <LikesBadge
          likes={problemData?.likes}
          userLiked={userProblemData.liked}
          onClick={onLike}
        />
      )}

      {loading ? (
        <CircleSkeleton />
      ) : updatingStar ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <Star
          className={cn(
            "h-4 w-4",
            userProblemData.starred && "text-yellow-500"
          )}
          onClick={onStar}
          fill={userProblemData.starred ? "currentColor" : "none"}
        />
      )}
    </div>
  );
};
export default ProblemDescriptionBadges;
