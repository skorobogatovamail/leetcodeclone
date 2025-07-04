import { GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="text-xl font-bold flex justify-between gap-2 items-center"
    >
      <GraduationCap />
      <span>LeetcodeClone</span>
    </Link>
  );
};
export default Logo;
