import Navbar from "@/components/Navbar";
import ProblemsList from "@/components/ProblemsList";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { problems } from "@/data/problems";
import React from "react";

type TasksPageProps = {};

const TasksPage: React.FC<TasksPageProps> = () => {
  return (
    <>
      <Navbar />
      <div className="px-8 sm:px-20 bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-10 flex flex-col gap-5">
          <Title text="Master coding interviews with confidence" />
          <Subtitle
            className="max-w-[600px]"
            text="Our platform is tailored to help you to prepare for coding interviews smoothly. 
          Developed by interviewers from top tech companies."
          />
        </section>
        <section className="py-10 flex flex-col gap-5">
          <ProblemsList problems={problems} />
        </section>
      </div>
    </>

  );
};
export default TasksPage;
