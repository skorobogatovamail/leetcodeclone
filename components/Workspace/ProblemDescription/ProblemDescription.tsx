"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useAuthState } from "react-firebase-hooks/auth";

import { Problem } from "@/data/types/problem";
import { auth } from "@/firebase/firebase";
import { useFetchProblem } from "@/hooks/useFetchProblem";
import { useGetUsersProblemData } from "@/hooks/useGetUsersProblemData";
import { useProblemActions } from "@/hooks/useProblemActions";

import Title from "../../Title";
import ProblemDescriptionBadges from "./ProblemDescriptionBadges";
import ProblemDescriptionTitle from "./ProblemDescriptionTitle";
import ProblemDescriptionExamples from "./ProblemDescriptionExamples";
import ProblemDescriptionConstraints from "./ProblemDescriptionConstraints";

interface ProblemDescriptionProps {
  problem: Problem;
  _solved: boolean;
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({
  problem,
  _solved,
}) => {
  const [user] = useAuthState(auth);
  const {
    problem: problemData,
    setProblem: setProblemData,
    loading,
  } = useFetchProblem(problem.id);
  const { userProblemData, setUserProblemData } = useGetUsersProblemData(
    problem.id
  );

  const { handleLike, handleStar, updatingLike, updatingStar } =
    useProblemActions({
      problemId: problem.id,
      user,
      currentUserData: userProblemData,
      setProblemData,
      setUserProblemData,
    });

  return (
    <div className="py-4 px-6  border-1 rounded-lg bg-white">
      <ProblemDescriptionTitle text={"Description"} />

      <div className="pt-4 h-full rounded-r-md flex flex-col gap-3">
        <Title text={problem.title} as="h3" />
        {problemData && (
          <ProblemDescriptionBadges
            problemData={problemData}
            userProblemData={userProblemData}
            loading={loading}
            updatingLike={updatingLike}
            updatingStar={updatingStar}
            onLike={handleLike}
            onStar={handleStar}
            _solved={_solved}
          />
        )}

        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {problem.problemStatement}
        </ReactMarkdown>
        <ProblemDescriptionExamples examples={problem.examples} />
        <ProblemDescriptionConstraints constraints={problem.constraints} />
      </div>
    </div>
  );
};
export default ProblemDescription;
