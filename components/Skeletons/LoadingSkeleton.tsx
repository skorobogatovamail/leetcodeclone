import React from "react";

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="flex items-center space-x-12 m-4 px-6">
      <div className="w-6 h-6 shrink-0 rounded-full bg-neutral-200"></div>
      <div className="h-4 sm:w-52  w-32  rounded-full bg-neutral-200"></div>
      <div className="h-4 sm:w-52  w-32 rounded-full bg-neutral-200"></div>
      <div className="h-4 sm:w-52 w-32 rounded-full bg-neutral-200"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSkeleton;
