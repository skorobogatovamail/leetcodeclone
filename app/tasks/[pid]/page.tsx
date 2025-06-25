import Navbar from "@/components/Navbar";
import Workspace from "@/components/Workspace/Workspace";
import React from "react";

const ProblemPage: React.FC = () => {
  return (
    <>
      <Navbar problemPage />
      <div className="bg-gradient-to-b from-slate-50 to-white h-screen m-2">
        <Workspace />
      </div>
    </>
  );
};
export default ProblemPage;
