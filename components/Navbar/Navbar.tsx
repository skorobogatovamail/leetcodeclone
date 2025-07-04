"use client";

import {
  ChevronLeft,
  ChevronRight,
  List,
  LogOut,
  UserCircle2,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

import { problems } from "@/data/problems/index";
import { auth } from "@/firebase/firebase";
import { AuthModalState, openAuthModal } from "@/lib/features/authModalSlice";
import { useAppDispatch } from "@/lib/hooks";
import { cn } from "@/lib/utils";

import Logo from "../Logo";
import Timer from "../Timer";
import { Button } from "../ui/button";

type NavbarProps = {
  problemPage?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ problemPage }) => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { pid } = useParams();

  const handleOpenModal = (type: AuthModalState["modalType"]) => {
    dispatch(openAuthModal(type));
  };

  const handleLogout = async () => {
    try {
      const success = await signOut();
      if (!success) throw new Error("Logout failed");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : String(error), {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  const handleNavigateProblems = (isForward: boolean) => {
    const { order } = problems[pid as string];
    const direction = isForward ? 1 : -1;
    const nextProblemOrder = order + direction;
    const nextProblemKey = Object.keys(problems).find(
      (key) => problems[key].order === nextProblemOrder
    );

    if (!nextProblemKey && isForward) {
      const firstProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === 1
      );
      router.push(`/tasks/${firstProblemKey}`);
    } else if (!nextProblemKey && !isForward) {
      const lastProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === Object.keys(problems).length
      );
      router.push(`/tasks/${lastProblemKey}`);
    } else {
      router.push(`/tasks/${nextProblemKey}`);
    }
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between border-b py-5",
        problemPage ? "px-10" : "px-15 sm:px-20"
      )}
    >
      <Logo />
      {problemPage && (
        <div className="flex items-center justify-center gap-4 ">
          <div
            className="flex items-center justify-center rounded h-8 w-8 cursor-pointer text-neutral-500 hover:bg-neutral-200"
            onClick={() => handleNavigateProblems(false)}
          >
            <ChevronLeft />
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <List className="text-neutral-500  h-5 w-5 " />
            <span className="hover:text-neutral-500">Problem list</span>
          </div>
          <div
            className="flex items-center justify-center rounded h-8 w-8 cursor-pointer text-neutral-500 hover:bg-neutral-200"
            onClick={() => handleNavigateProblems(true)}
          >
            <ChevronRight />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between gap-2">
        {user && problemPage && <Timer />}

        {user ? (
          <>
            <div className="relative group cursor-pointer">
              <UserCircle2 className="hover:bg-neutral-200 p-1 rounded h-8 w-8" />
              <p className="tip">{user?.email}</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut />
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline" onClick={() => handleOpenModal("login")}>
              Login
            </Button>
            <Button onClick={() => handleOpenModal("register")}>Sign Up</Button>
          </>
        )}
      </div>
    </div>
  );
};
export default Navbar;
