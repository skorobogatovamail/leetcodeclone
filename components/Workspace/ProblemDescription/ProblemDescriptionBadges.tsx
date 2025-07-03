import React from 'react';
import { Check, LoaderCircle, Star } from "lucide-react";

import { cn } from '@/lib/utils';
import { DBProblem } from '@/data/problems';

import RectangleSkeleton from "../../Skeletons/RectangleSkeleton";
import CircleSkeleton from "../../Skeletons/CircleSkeleton";
import DifficultyBadge from "./badges/DifficultyBadge";
import LikesBadge from "./badges/LikesBadge";


type ProblemDescriptionBadgesProps = {
    problemData: DBProblem,
    userProblemData: any,
    loading: boolean;
    updatingLike: boolean,
    updatingStar: boolean,
    onLike: () => void;
    onStar: () => void;
};

const ProblemDescriptionBadges: React.FC<ProblemDescriptionBadgesProps> = ({
    problemData,
    userProblemData,
    loading,
    updatingLike,
    updatingStar,
    onLike,
    onStar
}) => {

    return (
        <div className="flex gap-3 items-center">

            {loading
                ? <RectangleSkeleton />
                : problemData?.difficulty && <DifficultyBadge difficulty={problemData?.difficulty} />}

            {loading
                ? <CircleSkeleton />
                : <Check className={cn("h-4 w-4 text-green-600", userProblemData.solved && "text-green-500")} />
            }

            {loading
                ? <RectangleSkeleton />
                : updatingLike
                    ? <LoaderCircle className="animate-spin" />
                    : <LikesBadge likes={problemData?.likes} userLiked={userProblemData.liked} onClick={onLike} />
            }

            {loading
                ? <CircleSkeleton />
                : updatingStar
                    ? <LoaderCircle className="animate-spin" />
                    : <Star className={cn("h-4 w-4", userProblemData.starred && "text-yellow-500")} onClick={onStar} fill={userProblemData.starred ? "currentColor" : "none"} />
            }
        </div>
    )
}
export default ProblemDescriptionBadges;