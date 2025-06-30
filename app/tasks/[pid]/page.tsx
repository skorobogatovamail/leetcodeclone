import Navbar from "@/components/Navbar";
import Workspace from "@/components/Workspace/Workspace";
import { problems } from "@/data/problems/index";
import { Problem } from "@/data/types/problem";
import React from "react";

interface ProblemPageProps {
  params: { pid: string }
}

const ProblemPage: React.FC<ProblemPageProps> = async ({ params }) => {
  const { pid } = await params;
  console.log(pid)
  const problem = problems[pid];
  console.log(problem)
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