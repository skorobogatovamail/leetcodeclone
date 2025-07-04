import { ScrollText } from "lucide-react";
import React from "react";

type ProblemDescriptionTitleProps = {
  text: string;
};

const ProblemDescriptionTitle: React.FC<ProblemDescriptionTitleProps> = ({
  text,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <ScrollText className="h-4 w-4" />
      <span className="text-sm">{text}</span>
    </div>
  );
};
export default ProblemDescriptionTitle;
