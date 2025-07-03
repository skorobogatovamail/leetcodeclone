import React from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Workspace from "@/components/Workspace/Workspace";
import { problems } from "@/data/problems/index";

interface ProblemPageProps {
  params: Promise<{ pid: string }>
}

const ProblemPage: React.FC<ProblemPageProps> = async ({ params }) => {
  const { pid } = await params;
  const problem = problems[pid];
  problem.handlerFunction = problem.handlerFunction.toString();

  if (!problem) {
    return notFound()
  }
  return (
    <>
      <Navbar problemPage />
      <div className="bg-gradient-to-b from-slate-50 to-white h-screen m-2">
        <Workspace problem={problem} />
      </div>
    </>
  );
};
export default ProblemPage;


export const generateStaticParams = async () => {
  return Object.keys(problems).map(path => ({
    pid: path
  }))

}