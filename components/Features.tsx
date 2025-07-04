import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import { Code, GraduationCap, Users } from "lucide-react";

const Features: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col items-center gap-5">
        <Title text="Platform features" as="h2" />
        <Subtitle text="Everything you need to learn solving coding questions effectively" />
      </div>
      <div className="flex items-center justify-around gap-5">
        <div className="flex flex-col items-center rounded-lg gap-1 w-[300px] border py-3 px-3">
          <div className="rounded-full p-3 bg-slate-100">
            <Code className="h-6 w-6" />
          </div>
          <Title text="Interactive Code" as="h3" />
          <Subtitle
            className="text-center text-sm"
            text="Run code examples directly in your browser and get instant feedback"
          />
        </div>

        <div className="flex flex-col items-center rounded-lg gap-1 w-[300px] border py-3 px-3">
          <div className="rounded-full p-3 bg-slate-100">
            <GraduationCap className="h-6 w-6" />
          </div>
          <Title text="Practical Tests" as="h3" />
          <Subtitle
            className="text-center text-sm"
            text="Validate your knowledge with coding challenges and auto-graded tests"
          />
        </div>

        <div className="flex flex-col items-center rounded-lg gap-1 w-[300px] border py-3 px-3">
          <div className="rounded-full p-3 bg-slate-100">
            <Users className="h-6 w-6" />
          </div>
          <Title text="Track your progress" as="h3" />
          <Subtitle
            className="text-center text-sm"
            text="Track your progress effortlessly with real-time updates to stay motivated"
          />
        </div>
      </div>
    </div>
  );
};
export default Features;
