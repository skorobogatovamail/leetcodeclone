import React from "react";
import Problem from "./Problem";
import { Problem as ProblemType } from "@/data/problems";

type ProblemsListProps = {
  problems: ProblemType[];
};

const ProblemsList: React.FC<ProblemsListProps> = ({ problems }) => {
  return (
    <ul className="flex flex-col rounded-lg border border-neutral-200 divide-y divide-neutral-200">
      {problems.map((el: ProblemType) => (
        <li key={el.id}>
          <Problem
            id={el.id}
            title={el.title}
            difficulty={el.difficulty}
            category={el.category}
            order={el.order}
            videoId={el.videoId}
          />
        </li>
      ))}
    </ul>
  );
};
export default ProblemsList;
