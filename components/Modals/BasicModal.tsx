"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import Title from "../Title";
import { useAppDispatch } from "@/lib/hooks";
import { closeAuthModal } from "@/lib/features/authModalSlice";

type BasicModalProps = {
  title: string;
};

const BasicModal: React.FC<React.PropsWithChildren<BasicModalProps>> = ({
  title,
  children,
}) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(closeAuthModal());
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") dispatch(closeAuthModal());
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full items-center justify-center bg-slate-400 opacity-80"></div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center w-full">
        <div className="w-full lg:mx-100 mx-40 rounded-lg shadow bg-slate-200 p-4 flex flex-col gap-2">
          <div>
            <div className="flex justify-between ">
              <Title text={title} as="h4"></Title>
              <Button size="sm" variant="outline" onClick={handleClick}>
                <X />
              </Button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
export default BasicModal;
