import { Problem as ProblemType } from "@/data/problems";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Flame } from "lucide-react";
import React from "react";

const Problem: React.FC<ProblemType> = ({
  title,
  difficulty,
  category,
  order,
  //   videoId,
}) => {
  return (
    <div className="hover:bg-neutral-100 rounded-t-lg">
      <div className="px-6 py-5 flex gap-10 justify-between items-center">
        <div>{order}</div>
        <div>
          <Check className=" text-green-500" />
        </div>
        <div className="grow">
          <p className="text-md font-semibold text-neutral-900">{title}</p>
          <div className="flex gap-4 mt-2">
            <span className="text-sm text-neutral-600">{category}</span>

            <div className="flex gap-1 items-center">
              <Flame className="w-4 h-4 text-neutral-600  " />
              <span
                className={cn(
                  "text-sm",
                  difficulty === "Easy"
                    ? "text-green-500"
                    : difficulty === "Medium"
                    ? "text-orange-500"
                    : "text-red-500"
                )}
              >
                {difficulty}
              </span>
            </div>
          </div>
        </div>
        <div>
          <ArrowRight className="w-6 h-6 text-neutral-300 " />
        </div>
      </div>
    </div>
  );
};
export default Problem;
