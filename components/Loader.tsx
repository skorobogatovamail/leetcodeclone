"use client";

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "@/firebase/firebase";
import { LoaderCircle } from "lucide-react";

const Loader: React.FC<React.PropsWithChildren> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, loading] = useAuthState(auth);
  return (
    <div>
      {loading ? (
        <LoaderCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 w-10 h-10 animate-spin" />
      ) : (
        children
      )}
    </div>
  );
};
export default Loader;
