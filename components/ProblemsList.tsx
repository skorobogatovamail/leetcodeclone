import React from "react";

import { DBProblem as ProblemType } from "@/data/problems";
import { useGetSolvedProblems } from "@/hooks/useGetSolvedProblems";

import Problem from "./Problem";
import LoadingSkeleton from "./Skeletons/LoadingSkeleton";

type ProblemsListProps = {
  problems: ProblemType[];
  loading: boolean;
};

const ProblemsList: React.FC<ProblemsListProps> = ({ problems, loading }) => {
  const userSolvedProblems = useGetSolvedProblems() as string[];
  return (
    <ul className="flex flex-col rounded-lg border border-neutral-200 divide-y divide-neutral-200">
      {problems.map((el: ProblemType) => (
        <li key={el.id}>
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <Problem
              id={el.id}
              title={el.title}
              difficulty={el.difficulty}
              category={el.category}
              order={el.order}
              videoId={el.videoId}
              solved={userSolvedProblems.includes(el.id)}
            />
          )}
        </li>
      ))}
    </ul>
  );
};
export default ProblemsList;
