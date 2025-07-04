import React from "react";

import { cn } from "@/lib/utils";

type SubtitleProps = {
  className?: string;
  text: string;
};

const Subtitle: React.FC<SubtitleProps> = ({ className, text }) => {
  return <p className={cn(className, "text-gray-500")}>{text}</p>;
};
export default Subtitle;
